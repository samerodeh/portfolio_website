import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function makeGlowTexture() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.2, 'rgba(255,255,255,0.9)')
  g.addColorStop(0.5, 'rgba(255,255,255,0.3)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(canvas)
}

export default function StarField() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const W = el.clientWidth || window.innerWidth
    const H = el.clientHeight || window.innerHeight

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
    camera.position.z = 5

    const tex = makeGlowTexture()

    const addStars = (count, spread, size, opacity) => {
      const pos = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        pos[i * 3]     = (Math.random() - 0.5) * spread
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread
        pos[i * 3 + 2] = (Math.random() - 0.5) * spread
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      const mat = new THREE.PointsMaterial({
        map: tex,
        size,
        transparent: true,
        opacity,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
      const pts = new THREE.Points(geo, mat)
      scene.add(pts)
      return { pts, geo, mat }
    }

    const bg = addStars(1800, 30, 0.05, 0.75)
    const fg = addStars(400, 20, 0.13, 0.5)

    let mouseX = 0, mouseY = 0
    const onMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.25
    }
    if (!reducedMotion) window.addEventListener('mousemove', onMove)

    const onResize = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    let rafId
    const clock = new THREE.Clock()

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      if (!reducedMotion) {
        const t = clock.getElapsedTime()
        bg.pts.rotation.y = t * 0.016
        bg.pts.rotation.x = t * 0.007
        fg.pts.rotation.y = t * 0.012
        fg.pts.rotation.x = t * 0.005
        camera.position.x += (mouseX - camera.position.x) * 0.05
        camera.position.y += (-mouseY - camera.position.y) * 0.05
        camera.lookAt(scene.position)
      }
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      if (!reducedMotion) window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      bg.mat.dispose(); bg.geo.dispose()
      fg.mat.dispose(); fg.geo.dispose()
      tex.dispose()
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
