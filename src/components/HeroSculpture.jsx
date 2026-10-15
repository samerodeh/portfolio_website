import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroSculpture() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
    } catch {
      mount.classList.add('no-webgl')
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100)
    camera.position.set(0, 0, 10)
    const group = new THREE.Group()
    scene.add(group)

    const geometry = new THREE.TorusKnotGeometry(1.65, 0.46, 280, 26, 2, 3)
    const material = new THREE.MeshPhysicalMaterial({ color: 0xbec9cc, metalness: 0.72, roughness: 0.24, clearcoat: 0.8, clearcoatRoughness: 0.18 })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.set(0.36, 0.16, -0.18)
    group.add(mesh)

    const wireGeometry = new THREE.TorusKnotGeometry(1.73, 0.48, 220, 10, 2, 3)
    const wireMaterial = new THREE.MeshBasicMaterial({ color: 0x4d777b, wireframe: true, transparent: true, opacity: 0.095 })
    const wire = new THREE.Mesh(wireGeometry, wireMaterial)
    wire.scale.setScalar(1.01)
    group.add(wire)

    const orbitGeometry = new THREE.TorusGeometry(2.7, 0.006, 3, 200)
    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x71898b, transparent: true, opacity: 0.32 })
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial)
    orbit.rotation.set(1.08, 0.2, 0.37)
    group.add(orbit)
    const orbit2 = orbit.clone()
    orbit2.rotation.set(-0.6, 0.85, -0.5)
    orbit2.scale.setScalar(0.83)
    group.add(orbit2)

    scene.add(new THREE.AmbientLight(0xffffff, 1.8))
    const key = new THREE.DirectionalLight(0xffffff, 4.5)
    key.position.set(-4, 5, 6)
    scene.add(key)
    const rim = new THREE.PointLight(0x9cd5d8, 80)
    rim.position.set(3, -2, 3)
    scene.add(rim)

    let pointerX = 0
    let pointerY = 0
    const onMove = event => {
      const rect = mount.getBoundingClientRect()
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.34
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.26
    }
    mount.addEventListener('pointermove', onMove)
    const resize = () => {
      const { width, height } = mount.getBoundingClientRect()
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
      renderer.render(scene, camera)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(mount)
    resize()

    let frame
    const start = performance.now()
    const animate = now => {
      const t = (now - start) * 0.001
      group.rotation.y += (pointerX + (reduced ? 0 : t * 0.11) - group.rotation.y) * 0.035
      group.rotation.x += (-pointerY + (reduced ? 0 : Math.sin(t * 0.35) * 0.06) - group.rotation.x) * 0.035
      renderer.render(scene, camera)
      if (!reduced) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      mount.removeEventListener('pointermove', onMove)
      geometry.dispose(); material.dispose(); wireGeometry.dispose(); wireMaterial.dispose(); orbitGeometry.dispose(); orbitMaterial.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="hero-sculpture" ref={mountRef} role="img" aria-label="Interactive three-dimensional metallic sculpture" />
}
