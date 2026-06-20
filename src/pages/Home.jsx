import React, { useState } from 'react'
import {
  motion,
  MotionConfig,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion'
import StarField from '../components/StarField'
import './Home.css'

/* ----------------------------------------------------------------
   Inline icons — Lucide-style strokes + official brand glyphs.
   No emojis used anywhere as UI icons.
---------------------------------------------------------------- */
const IcMail = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)
const IcPhone = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const IcPin = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
)
const IcCalendar = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18M8 2v4M16 2v4" />
  </svg>
)
const IcCap = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
)
const IcArrow = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
)
const IcCopy = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect width="13" height="13" x="9" y="9" rx="2" /><path d="M5 15c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2" />
  </svg>
)
const IcCheck = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
const IcGithub = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)
const IcLinkedin = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

/* ----------------------------------------------------------------
   Motion variants — orchestrated, spring-based, never linear.
---------------------------------------------------------------- */
const EASE = [0.22, 1, 0.36, 1]
const container = (stagger = 0.1, delay = 0.05) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
})
const up = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}
const ruleV = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { opacity: 1, scaleX: 1, transition: { duration: 0.6, ease: EASE } },
}
const railV = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.9, ease: EASE } },
}
const VP = { once: true, amount: 0.2 }
const VP_LIST = { once: true, amount: 0.12 }

/* ----------------------------------------------------------------
   Data
---------------------------------------------------------------- */
const experiences = [
  {
    role: 'Co-Founder & Chief Product Officer',
    company: 'LocalGo',
    location: 'Remote',
    period: 'Jan 2026 — Present',
    current: true,
    bullets: [
      'Co-founded LocalGo, a full-stack food & groceries delivery platform connecting downtown Montreal consumers with small local businesses.',
      'Optimized routing algorithms and order-dispatching mechanics, reducing average delivery times by 15% for consumers across downtown Montreal.',
    ],
    tags: ['Full-Stack', 'Routing Algorithms', 'Real-Time Dispatch', 'Product'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'CopyPasta',
    location: 'Remote',
    period: 'Feb 2026 — May 2026',
    current: false,
    bullets: [
      'Designed and implemented a high-performance file conversion engine supporting 20+ formats natively on macOS.',
      'Optimized media-processing logic to cut conversion latency by 15% across high-resolution datasets.',
      'Managed version control with Git/GitHub — feature branches, merge-conflict resolution, and clean codebase documentation.',
      'Maintained sandboxed file-access protocols and shipped client-side release updates for the live App Store application.',
    ],
    tags: ['Swift', 'SwiftUI', 'AppKit', 'ImageIO', 'PDFKit', 'AVFoundation'],
  },
  {
    role: 'Software Engineer Team Member',
    company: 'Space Concordia',
    location: 'Montreal, QC',
    period: 'Sep 2025 — Jan 2026',
    current: false,
    bullets: [
      'Designed, built, and simulated a fully autonomous robot independently using ROS2 and Gazebo.',
      'Developed publisher/subscriber communication systems in Python and C++.',
    ],
    tags: ['ROS2', 'Gazebo', 'Python', 'C++'],
  },
  {
    role: 'Full-Stack Software Engineer',
    company: 'Freelancer',
    clients: 'PureBranded · Singer Haley · STB',
    location: 'Remote',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Designed and built custom websites and web applications for companies and businesses across a range of industries.',
    ],
    tags: ['React', 'FastAPI', 'TypeScript', 'Web Apps'],
  },
]

const projects = [
  {
    title: 'Sufra AI',
    blurb: 'A full-stack, Groq-powered restaurant assistant built on a multi-agent LLM architecture with RAG-based semantic retrieval over ChromaDB.',
    features: [
      'Multi-agent LLM system with RAG-based semantic retrieval over ChromaDB for context-aware responses.',
      'Intelligent agents for ordering, reservations, and dietary constraints with optimized intent routing and authentication.',
      'Cut agent decision latency via prompt caching, Chain-of-Thought reasoning pipelines, and dynamic resource-routing optimization.',
    ],
    tech: ['React Native', 'Expo', 'FastAPI', 'Python', 'TypeScript', 'SQLite', 'ChromaDB', 'Groq'],
    github: 'https://github.com/samerodeh/falafel_fullstack_chatbot_application',
  },
  {
    title: 'Facelytics',
    blurb: 'A facial-recognition system pairing a custom-trained CNN with vectorized embedding comparison for real-time face verification.',
    features: [
      'Custom Convolutional Neural Network (CNN) trained to parse image datasets and extract high-dimensional facial embeddings.',
      'Vectorized math operations comparing embedding distance metrics — stable logic for real-time face verification.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Supabase', 'Celery', 'Redis'],
    github: 'https://github.com/samerodeh/Facelytics',
  },
]

const skillGroups = [
  { label: 'Languages', items: ['Python', 'C / C++', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'Bash'] },
  { label: 'Frameworks & Tools', items: ['React', 'React Native', 'FastAPI', 'SQLAlchemy', 'Prisma', 'Flask', 'Docker', 'ROS2', 'Gazebo', 'Git / GitHub', 'Linux'] },
  { label: 'Databases', items: ['PostgreSQL', 'SQLite', 'Redis', 'ChromaDB', 'Supabase'] },
  { label: 'Data & Analytics', items: ['pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Power Apps', 'Power Automate'] },
  { label: 'Concepts', items: ['System Design', 'Relational DB Design', 'LLMs', 'RAG', 'CNNs', 'Optimization', 'REST APIs'] },
]

const education = {
  degree: 'Bachelor of Engineering, Computer Engineering',
  school: 'Concordia University',
  location: 'Montreal, QC, Canada',
  period: 'Expected Sep 2029',
}

const EMAIL = 'samerodeh.dev@gmail.com'
const secondaryContacts = [
  { label: 'Phone', value: '+1 (514) 246-4894', link: 'tel:+15142464894', Icon: IcPhone },
  { label: 'LinkedIn', value: 'in/samer-odeh', link: 'https://www.linkedin.com/in/samer-odeh-1265b1343/', Icon: IcLinkedin },
  { label: 'GitHub', value: '@samerodeh', link: 'https://github.com/samerodeh', Icon: IcGithub },
]

/* ----------------------------------------------------------------
   Section header — staggered eyebrow + title + animated rule
---------------------------------------------------------------- */
const SectionHead = ({ eyebrow, title, children }) => (
  <motion.header
    className="section-head"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.6 }}
    variants={container(0.1)}
  >
    <motion.span className="eyebrow" variants={up}>{eyebrow}</motion.span>
    <motion.h2 className="section-title" variants={up}>{title}</motion.h2>
    <motion.span className="title-rule" variants={ruleV} aria-hidden="true" />
    {children}
  </motion.header>
)

/* ----------------------------------------------------------------
   Project card — cursor-tracked 3D tilt + spotlight glare
---------------------------------------------------------------- */
const ProjectCard = ({ p, index }) => {
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

  return (
    <motion.article
      className="proj"
      variants={up}
      onMouseMove={reduce ? undefined : handleMove}
      onMouseLeave={reduce ? undefined : handleLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={reduce ? undefined : { scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      {!reduce && <motion.span className="proj-glare" style={{ background: glare }} aria-hidden="true" />}
      <span className="proj-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div className="proj-head">
        <h3 className="proj-title">{p.title}</h3>
        <motion.a
          className="proj-icon"
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.title} source on GitHub`}
          whileHover={{ rotate: -8, scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <IcGithub className="gh" />
        </motion.a>
      </div>
      <p className="proj-blurb">{p.blurb}</p>
      <ul className="bullets bullets-sm">
        {p.features.map((f, j) => <li key={j}>{f}</li>)}
      </ul>
      <div className="chips">
        {p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
      </div>
      <a className="proj-link" href={p.github} target="_blank" rel="noopener noreferrer">
        View source <IcArrow className="la" />
      </a>
    </motion.article>
  )
}

/* ----------------------------------------------------------------
   Contact card (secondary) — spring lift on hover
---------------------------------------------------------------- */
const ContactCard = ({ label, value, link, Icon }) => (
  <motion.a
    className="contact-card"
    href={link}
    {...(link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    variants={up}
    whileHover={{ y: -6 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: 'spring', stiffness: 320, damping: 20 }}
  >
    <span className="contact-ic"><Icon className="cci" /></span>
    <span className="contact-text">
      <span className="contact-label">{label}</span>
      <span className="contact-value">{value}</span>
    </span>
    <IcArrow className="ca" />
  </motion.a>
)

/* ---------------------------------------------------------------- */

const Home = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    // immediate feedback; clipboard write runs in the background (never block the UI)
    try {
      const p = navigator.clipboard?.writeText(EMAIL)
      if (p && typeof p.catch === 'function') p.catch(() => {})
    } catch {
      /* clipboard unavailable — "Write me" covers the mailto path */
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1900)
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="home">
        {/* ===== HERO (front page — preserved, motion entrance) ===== */}
        <section className="hero-section">
          <StarField />
          <div className="container">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="show"
              variants={container(0.13, 0.1)}
            >
              <motion.p className="hero-subtitle" variants={up}>
                Full-Stack Engineer &amp; Computer Engineering Student
              </motion.p>
              <motion.p className="hero-description" variants={up}>
                I build production-ready software — from AI-powered mobile apps to embedded robotics systems.
                Currently studying Computer Engineering at Concordia University and running my own software consulting practice.
              </motion.p>
              <motion.p className="hero-quote" variants={up}>
                "Developers, developers, developers!" – Steve Ballmer
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== EXPERIENCE ===== */}
        <section className="section" id="experience">
          <div className="container">
            <SectionHead eyebrow="// 01 — Career" title="Experience" />

            <motion.ol
              className="timeline"
              initial="hidden"
              whileInView="show"
              viewport={VP_LIST}
              variants={container(0.14, 0.1)}
            >
              <motion.span className="tl-rail" variants={railV} aria-hidden="true" />
              {experiences.map((exp) => (
                <motion.li className="tl-item" key={exp.company} variants={up}>
                  <span className={`tl-node ${exp.current ? 'is-current' : ''}`} aria-hidden="true" />
                  <article className="tl-card">
                    <div className="tl-top">
                      <div className="tl-headings">
                        <h3 className="tl-role">{exp.role}</h3>
                        <p className="tl-company">
                          {exp.company}
                          {exp.clients && <span className="tl-clients"> — {exp.clients}</span>}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="badge-live"><span className="live-dot" />Present</span>
                      )}
                    </div>

                    <div className="meta-row">
                      <span className="meta"><IcPin className="mi" />{exp.location}</span>
                      <span className="meta"><IcCalendar className="mi" />{exp.period}</span>
                    </div>

                    <ul className="bullets">
                      {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>

                    <div className="chips">
                      {exp.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                    </div>
                  </article>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section className="section" id="projects">
          <div className="container">
            <SectionHead eyebrow="// 02 — Selected work" title="Projects" />
            <motion.div
              className="projects"
              initial="hidden"
              whileInView="show"
              viewport={VP_LIST}
              variants={container(0.16, 0.08)}
            >
              {projects.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
            </motion.div>
          </div>
        </section>

        {/* ===== TECHNICAL SKILLS ===== */}
        <section className="section" id="skills">
          <div className="container">
            <SectionHead eyebrow="// 03 — Toolkit" title="Technical Skills" />
            <motion.div
              className="skills"
              initial="hidden"
              whileInView="show"
              viewport={VP_LIST}
              variants={container(0.1, 0.05)}
            >
              {skillGroups.map((g) => (
                <motion.div className="skill-group" key={g.label} variants={up}>
                  <h3 className="skill-label">{g.label}</h3>
                  <div className="chips">
                    {g.items.map((it) => <span className="chip" key={it}>{it}</span>)}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== EDUCATION ===== */}
        <section className="section" id="education">
          <div className="container">
            <SectionHead eyebrow="// 04 — Background" title="Education" />
            <motion.div
              className="edu"
              initial="hidden"
              whileInView="show"
              viewport={VP}
              variants={up}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <span className="edu-icon" aria-hidden="true"><IcCap className="ei" /></span>
              <div className="edu-body">
                <h3 className="edu-degree">{education.degree}</h3>
                <p className="edu-school">{education.school}</p>
              </div>
              <div className="meta-row edu-meta">
                <span className="meta"><IcPin className="mi" />{education.location}</span>
                <span className="meta"><IcCalendar className="mi" />{education.period}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="section section-contact" id="contact">
          <div className="container">
            <SectionHead eyebrow="// 05 — Say hello" title="Get in touch">
              <motion.p className="section-lede" variants={up}>
                Open to internships and collaboration — the fastest way to reach me is email,
                and I usually reply within a day.
              </motion.p>
              <motion.span className="loc-pill" variants={up}>
                <IcPin /> Based in Montreal, QC, Canada
              </motion.span>
            </SectionHead>

            <motion.div
              className="contact-wrap"
              initial="hidden"
              whileInView="show"
              viewport={VP_LIST}
              variants={container(0.12, 0.05)}
            >
              {/* Primary — email with copy-to-clipboard */}
              <motion.div
                className="email-card"
                variants={up}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="email-main">
                  <span className="contact-ic big"><IcMail className="cci" /></span>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="email-value">{EMAIL}</span>
                  </div>
                </div>
                <div className="email-actions">
                  <motion.button
                    type="button"
                    className="copy-btn"
                    onClick={copyEmail}
                    whileTap={{ scale: 0.94 }}
                    aria-label="Copy email address"
                  >
                    <motion.span
                      key={copied ? 'done' : 'copy'}
                      className={`copy-inner ${copied ? 'is-done' : ''}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22, ease: EASE }}
                    >
                      {copied ? <IcCheck className="cbi" /> : <IcCopy className="cbi" />}
                      {copied ? 'Copied' : 'Copy'}
                    </motion.span>
                  </motion.button>
                  <motion.a
                    className="write-btn"
                    href={`mailto:${EMAIL}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  >
                    Write me <IcArrow className="cbi" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Secondary — phone, linkedin, github */}
              <div className="contact-row">
                {secondaryContacts.map((c) => <ContactCard key={c.label} {...c} />)}
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <span>© {new Date().getFullYear()} Samer Odeh</span>
            <span className="foot-dot" aria-hidden="true">•</span>
            <span>Designed &amp; built in Montreal</span>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}

export default Home
