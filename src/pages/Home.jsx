import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
import TiltCard from '../components/TiltCard'
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
const IcAward = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" /><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" />
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
const container = (stagger = 0.22, delay = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
})
const up = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.6, ease: EASE } },
}
const ruleV = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { opacity: 1, scaleX: 1, transition: { duration: 1.0, ease: EASE } },
}
const railV = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 1.4, ease: EASE } },
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
      "Built LocalGo's backend, a FastAPI service on Postgres for ordering, dispatch, and delivery tracking.",
      'Engineered full-stack features, building the mobile interfaces in TypeScript with React Native and Expo.',
      'Shipped mobile builds through Expo / EAS with over-the-air updates, staged release channels, and crash reporting.',
      'Provisioned the whole stack as code with Terraform and Ansible, plus zero-downtime deploys and rollback.',
      'Deployed on Docker and Kubernetes with Prometheus monitoring, Redis caching, and RabbitMQ queues.',
      'Set up GitHub Actions CI/CD: lint, type checks, and unit and integration tests with Pytest on every push.',
      'Self-hosted Postgres with automated backups, tested restores, and a read replica ready for failover.',
      'Tuned routing and order-dispatch logic, cutting average delivery times by 15% across downtown Montreal.',
    ],
    tags: ['FastAPI', 'PostgreSQL', 'React Native', 'Expo', 'Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Prometheus', 'Redis', 'RabbitMQ', 'GitHub Actions'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'CopyPasta',
    location: 'Remote',
    period: 'Feb 2026 — May 2026',
    current: false,
    bullets: [
      'Built a fully offline file-conversion feature for ClipTex, an OCR app that lifts text out of any screenshot.',
      'Designed and implemented a high-performance file-conversion engine supporting 20+ formats natively on macOS.',
      'Optimized media-processing logic to cut conversion latency by 15% across high-resolution datasets.',
      'Wrote QA and unit-test coverage for every new function in the file-conversions class using OOP.',
      'Maintained sandboxed file access and security practices for the live App Store release.',
    ],
    tags: ['Swift', 'SwiftUI', 'AppKit', 'ImageIO', 'PDFKit', 'AVFoundation'],
  },
  {
    role: 'Robotics Software Member',
    company: 'Space Concordia',
    location: 'Montreal, QC',
    period: 'Sep 2025 — Jan 2026',
    current: false,
    bullets: [
      'Designed, built, and simulated a fully autonomous robot independently using ROS2 and Gazebo.',
      'Developed publisher/subscriber communication systems in Python and C/C++.',
    ],
    tags: ['ROS2', 'Gazebo', 'Python', 'C / C++'],
  },
  {
    role: 'Full-Stack Software Engineer',
    company: 'Freelancer',
    clients: 'PureBranded · Singer Haley · STB',
    location: 'Remote',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Designed and built custom apps and web applications for a range of companies and businesses.',
    ],
    tags: ['React', 'FastAPI', 'TypeScript', 'Expo'],
  },
]

const certifications = [
  { name: 'Cisco CCNA', status: 'In progress' },
  { name: 'CKAD: Certified Kubernetes Application Developer', status: 'In progress' },
]

const projects = [
  {
    title: 'Sufra AI',
    kind: 'Mobile App + Backend',
    blurb: 'A multi-agent restaurant assistant spanning a React Native app and a FastAPI backend service.',
    features: [
      'Multi-agent LLM assistant that routes each message to a specialist agent for ordering, reservations, or dietary intent.',
      'RAG-based semantic retrieval over the menu with ChromaDB for context-aware answers.',
      'FastAPI backend with SQLite for authentication and order tracking, with React Native and Expo clients.',
    ],
    tech: ['React Native', 'Expo', 'FastAPI', 'Python', 'TypeScript', 'SQLite', 'ChromaDB', 'Groq'],
    github: 'https://github.com/samerodeh/SufraAI',
  },
  {
    title: 'Jarvis',
    kind: 'Home Automation System',
    blurb: 'A voice-controlled home automation system built on a multi-agent LLM workflow on Google Gemini.',
    features: [
      'Multi-agent LLM workflow on Google Gemini that turns natural voice commands into home actions.',
      'Embedded C/C++ firmware for ESP32 nodes and custom PCBs, handling UART / I2C and SG90 servo control.',
      'Bridges agent output to hardware in real time, translating language intent into low-latency servo and relay commands.',
      'Deployed across 4+ rooms for voice-controlled switching of lights and heaters on resource-constrained nodes.',
    ],
    tech: ['Python', 'Google Gemini', 'ESP32', 'Embedded C/C++', 'PCB Design', 'UART / I2C'],
    github: 'https://github.com/samerodeh/full_home_automation_system',
  },
  {
    title: 'Facelytics',
    kind: 'Web Application',
    blurb: 'A CNN-based web app that compares faces using vector embeddings for real-time verification.',
    features: [
      'Custom-trained CNN that extracts high-dimensional facial embeddings from image datasets.',
      'Vectorized distance metrics comparing embeddings for stable, real-time face verification.',
      'FastAPI REST API with a React frontend, GitHub OAuth, and Celery + Redis background jobs, containerized with Docker.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Supabase', 'Celery', 'Redis'],
    github: 'https://github.com/samerodeh/Facelytics',
  },
]

const skillGroups = [
  { label: 'Languages', items: ['Python', 'C / C++', 'TypeScript', 'JavaScript', 'Java', 'Node.js', 'Swift', 'SQL', 'Bash'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Terraform', 'Ansible', 'Prometheus', 'Datadog', 'Confluence', 'Linux'] },
  { label: 'Frameworks', items: ['React', 'React Native', 'FastAPI', 'SQLAlchemy', 'Prisma', 'Flask'] },
  { label: 'Databases', items: ['PostgreSQL', 'SQLite', 'Redis', 'ChromaDB', 'Supabase'] },
  { label: 'Machine Learning & AI', items: ['Fine-Tuning', 'scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'LLMs', 'RAG', 'CNNs'] },
  { label: 'Data & Visualization', items: ['NumPy', 'pandas', 'SciPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Power BI'] },
  { label: 'Concepts', items: ['System Design', 'DevSecOps', 'Prompt Engineering', 'Optimization', 'REST APIs', 'Data Structures', 'Algorithms'] },
  { label: 'Tooling', items: ['Cursor', 'Herdr (tmux)', 'vim / neovim', 'Claude Code CLI', 'Copilot CLI', 'Kiro CLI'] },
]

const education = {
  degree: 'Bachelor of Engineering in Computer Engineering',
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
    variants={container(0.22, 0.08)}
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
        <div className="proj-headings">
          <h3 className="proj-title">{p.title}</h3>
          {p.kind && <span className="proj-kind">{p.kind}</span>}
        </div>
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
  <TiltCard
    as="a"
    className="contact-card"
    href={link}
    {...(link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    variants={up}
  >
    <span className="contact-ic"><Icon className="cci" /></span>
    <span className="contact-text">
      <span className="contact-label">{label}</span>
      <span className="contact-value">{value}</span>
    </span>
    <IcArrow className="ca" />
  </TiltCard>
)

/* ---------------------------------------------------------------- */

const Home = () => {
  const [copied, setCopied] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#experience') {
      const el = document.getElementById('experience')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [location.hash])

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
          <div className="hero-bottom-fade" aria-hidden="true" />
          <div className="container">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="show"
              variants={container(0.22, 0.08)}
            >
              <motion.p className="hero-subtitle" variants={up}>
                Full-Stack Engineer &amp; Computer Engineering Student
              </motion.p>
              <motion.p className="hero-description" variants={up}>
                I build production software end to end, from FastAPI backends and Kubernetes infrastructure
                to React Native apps and multi-agent AI systems. Co-Founder and CPO of LocalGo, freelance
                full-stack engineer, and Computer Engineering student at Concordia University.
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
            <SectionHead eyebrow="// 01 · Career" title="Experience" />

            <motion.ol
              className="timeline"
              initial="hidden"
              whileInView="show"
              viewport={VP_LIST}
              variants={container(0.22, 0.08)}
            >
              <motion.span className="tl-rail" variants={railV} aria-hidden="true" />
              {experiences.map((exp) => (
                <motion.li className="tl-item" key={exp.company} variants={up}>
                  <span className={`tl-node ${exp.current ? 'is-current' : ''}`} aria-hidden="true" />
                  <TiltCard as="article" className="tl-card">
                    <div className="tl-top">
                      <div className="tl-headings">
                        <h3 className="tl-role">{exp.role}</h3>
                        <p className="tl-company">
                          {exp.company}
                          {exp.clients && <span className="tl-clients"> · {exp.clients}</span>}
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
                  </TiltCard>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* ===== CERTIFICATIONS ===== */}
        <section className="section" id="certifications">
          <div className="container">
            <SectionHead eyebrow="// 02 · Credentials" title="Certifications" />
            <motion.div
              className="certs"
              initial="hidden"
              whileInView="show"
              viewport={VP_LIST}
              variants={container(0.22, 0.08)}
            >
              {certifications.map((c) => (
                <motion.div className="cert" key={c.name} variants={up}>
                  <span className="cert-icon" aria-hidden="true"><IcAward className="ci" /></span>
                  <div className="cert-body">
                    <h3 className="cert-name">{c.name}</h3>
                    <span className="cert-status">{c.status}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section className="section" id="projects">
          <div className="container">
            <SectionHead eyebrow="// 03 · Selected work" title="Projects" />
            <motion.div
              className="projects"
              initial="hidden"
              whileInView="show"
              viewport={VP_LIST}
              variants={container(0.22, 0.08)}
            >
              {projects.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
            </motion.div>
          </div>
        </section>

        {/* ===== TECHNICAL SKILLS ===== */}
        <section className="section" id="skills">
          <div className="container">
            <SectionHead eyebrow="// 04 · Toolkit" title="Technical Skills" />
            <motion.div
              className="skills"
              initial="hidden"
              whileInView="show"
              viewport={VP_LIST}
              variants={container(0.22, 0.08)}
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
            <SectionHead eyebrow="// 05 · Background" title="Education" />
            <TiltCard
              className="edu"
              initial="hidden"
              whileInView="show"
              viewport={VP}
              variants={up}
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
            </TiltCard>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="section section-contact" id="contact">
          <div className="container">
            <SectionHead eyebrow="// 06 · Say hello" title="Get in touch">
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
              variants={container(0.22, 0.08)}
            >
              {/* Primary — email with copy-to-clipboard */}
              <TiltCard className="email-card" variants={up}>
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
              </TiltCard>

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
