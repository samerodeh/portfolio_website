import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion'

export default function TiltCard({ as = 'div', className, style, children, ...rest }) {
  const reduce = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spring = { stiffness: 150, damping: 18, mass: 0.4 }
  const rotateX = useSpring(useTransform(py, [0, 1], [6.5, -6.5]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-6.5, 6.5]), spring)
  const glareX = useTransform(px, [0, 1], ['0%', '100%'])
  const glareY = useTransform(py, [0, 1], ['0%', '100%'])
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(229,9,20,0.12), transparent 55%)`

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const handleLeave = () => { px.set(0.5); py.set(0.5) }

  const Tag = motion[as]

  return (
    <Tag
      className={className}
      style={reduce ? style : { ...style, rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={reduce ? undefined : handleMove}
      onMouseLeave={reduce ? undefined : handleLeave}
      {...rest}
    >
      {!reduce && (
        <motion.span className="tilt-glare" style={{ background: glare }} aria-hidden="true" />
      )}
      {children}
    </Tag>
  )
}
