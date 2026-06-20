import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const COUNT = 85
const MAX_DIST = 3.8
const SPREAD = 16
const GRAB_RADIUS = 0.75

export default function ParticleNet() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 10

    const pos = new Float32Array(COUNT * 3)
    const vel = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * SPREAD
      pos[i * 3 + 1] = (Math.random() - 0.5) * SPREAD
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4
      vel[i * 3]     = (Math.random() - 0.5) * 0.0025
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.0025
    }

    const ptGeo = new THREE.BufferGeometry()
    const ptAttr = new THREE.BufferAttribute(pos, 3)
    ptGeo.setAttribute('position', ptAttr)
    const ptMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.065,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    })
    scene.add(new THREE.Points(ptGeo, ptMat))

    const MAX_SEGS = (COUNT * (COUNT - 1)) / 2
    const lPos = new Float32Array(MAX_SEGS * 6)
    const lCol = new Float32Array(MAX_SEGS * 6)
    const lineGeo = new THREE.BufferGeometry()
    const lPosAttr = new THREE.BufferAttribute(lPos, 3)
    const lColAttr = new THREE.BufferAttribute(lCol, 3)
    lineGeo.setAttribute('position', lPosAttr)
    lineGeo.setAttribute('color', lColAttr)
    const lineMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true })
    scene.add(new THREE.LineSegments(lineGeo, lineMat))

    // Drag state
    const raycaster = new THREE.Raycaster()
    const mouseNDC = new THREE.Vector2()
    const intersectPt = new THREE.Vector3()
    let draggedIdx = -1
    let dragVelX = 0
    let dragVelY = 0
    let prevWorldX = 0
    let prevWorldY = 0
    let mouseClientX = -9999
    let mouseClientY = -9999

    const projectToPlane = (clientX, clientY, targetZ) => {
      mouseNDC.set(
        (clientX / window.innerWidth) * 2 - 1,
        -(clientY / window.innerHeight) * 2 + 1
      )
      raycaster.setFromCamera(mouseNDC, camera)
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -targetZ)
      raycaster.ray.intersectPlane(plane, intersectPt)
      return { x: intersectPt.x, y: intersectPt.y }
    }

    const findNearest = (wx, wy) => {
      let minDist = Infinity
      let closest = -1
      for (let i = 0; i < COUNT; i++) {
        const dx = pos[i * 3] - wx
        const dy = pos[i * 3 + 1] - wy
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < minDist) { minDist = d; closest = i }
      }
      return { idx: closest, dist: minDist }
    }

    const onMouseDown = (e) => {
      const { x, y } = projectToPlane(e.clientX, e.clientY, 0)
      const { idx, dist } = findNearest(x, y)
      if (dist < GRAB_RADIUS) {
        draggedIdx = idx
        dragVelX = 0; dragVelY = 0
        vel[idx * 3] = 0; vel[idx * 3 + 1] = 0
        const wp = projectToPlane(e.clientX, e.clientY, pos[idx * 3 + 2])
        prevWorldX = wp.x; prevWorldY = wp.y
        document.body.style.cursor = 'grabbing'
      }
    }

    const onMouseMove = (e) => {
      mouseClientX = e.clientX
      mouseClientY = e.clientY
      if (draggedIdx === -1) return
      const nodeZ = pos[draggedIdx * 3 + 2]
      const { x, y } = projectToPlane(e.clientX, e.clientY, nodeZ)
      dragVelX = x - prevWorldX
      dragVelY = y - prevWorldY
      pos[draggedIdx * 3] = x
      pos[draggedIdx * 3 + 1] = y
      prevWorldX = x; prevWorldY = y
    }

    const onMouseUp = () => {
      if (draggedIdx !== -1) {
        // Fling with capped velocity
        const speed = Math.sqrt(dragVelX ** 2 + dragVelY ** 2)
        const maxSpeed = 0.018
        const scale = speed > maxSpeed ? maxSpeed / speed : 1
        vel[draggedIdx * 3]     = dragVelX * scale
        vel[draggedIdx * 3 + 1] = dragVelY * scale
        draggedIdx = -1
        document.body.style.cursor = ''
      }
    }

    const onTouchStart = (e) => {
      const t = e.touches[0]
      const { x, y } = projectToPlane(t.clientX, t.clientY, 0)
      const { idx, dist } = findNearest(x, y)
      if (dist < GRAB_RADIUS) {
        draggedIdx = idx
        dragVelX = 0; dragVelY = 0
        vel[idx * 3] = 0; vel[idx * 3 + 1] = 0
        const wp = projectToPlane(t.clientX, t.clientY, pos[idx * 3 + 2])
        prevWorldX = wp.x; prevWorldY = wp.y
        e.preventDefault()
      }
    }

    const onTouchMove = (e) => {
      if (draggedIdx === -1) return
      const t = e.touches[0]
      const nodeZ = pos[draggedIdx * 3 + 2]
      const { x, y } = projectToPlane(t.clientX, t.clientY, nodeZ)
      dragVelX = x - prevWorldX
      dragVelY = y - prevWorldY
      pos[draggedIdx * 3] = x
      pos[draggedIdx * 3 + 1] = y
      prevWorldX = x; prevWorldY = y
      e.preventDefault()
    }

    const onTouchEnd = () => onMouseUp()

    canvas.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    canvas.addEventListener('touchstart', onTouchStart, { passive: false })
    canvas.addEventListener('touchmove', onTouchMove, { passive: false })
    canvas.addEventListener('touchend', onTouchEnd)

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    let rafId
    const half = SPREAD / 2

    const tick = () => {
      rafId = requestAnimationFrame(tick)

      if (!reducedMotion) {
        for (let i = 0; i < COUNT; i++) {
          if (i === draggedIdx) continue
          pos[i * 3]     += vel[i * 3]
          pos[i * 3 + 1] += vel[i * 3 + 1]
          if (pos[i * 3] > half) pos[i * 3] = -half
          else if (pos[i * 3] < -half) pos[i * 3] = half
          if (pos[i * 3 + 1] > half) pos[i * 3 + 1] = -half
          else if (pos[i * 3 + 1] < -half) pos[i * 3 + 1] = half
        }
        ptAttr.needsUpdate = true
      }

      // Update hover cursor
      if (draggedIdx === -1 && mouseClientX > -9000) {
        const { x, y } = projectToPlane(mouseClientX, mouseClientY, 0)
        const { dist } = findNearest(x, y)
        canvas.style.cursor = dist < GRAB_RADIUS ? 'grab' : 'default'
      }

      let li = 0
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = pos[i * 3] - pos[j * 3]
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
          if (d < MAX_DIST) {
            const a = (1 - d / MAX_DIST) * 0.4
            const base = li * 6
            lPos[base]     = pos[i * 3];     lPos[base + 1] = pos[i * 3 + 1]; lPos[base + 2] = pos[i * 3 + 2]
            lPos[base + 3] = pos[j * 3];     lPos[base + 4] = pos[j * 3 + 1]; lPos[base + 5] = pos[j * 3 + 2]
            lCol[base] = lCol[base + 1] = lCol[base + 2] = a
            lCol[base + 3] = lCol[base + 4] = lCol[base + 5] = a
            li++
          }
        }
      }
      lineGeo.setDrawRange(0, li * 2)
      lPosAttr.needsUpdate = true
      lColAttr.needsUpdate = true

      renderer.render(scene, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      canvas.removeEventListener('touchstart', onTouchStart)
      canvas.removeEventListener('touchmove', onTouchMove)
      canvas.removeEventListener('touchend', onTouchEnd)
      document.body.style.cursor = ''
      ptGeo.dispose(); ptMat.dispose()
      lineGeo.dispose(); lineMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'all' }}
      aria-hidden="true"
    />
  )
}
