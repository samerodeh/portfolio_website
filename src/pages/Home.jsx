import React, { useEffect } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import HeroSculpture from '../components/HeroSculpture'
import { Emphasized, experiences, projects } from '../resumeContent'
import './Home.css'

const ease = [0.22, 1, 0.36, 1]

function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const reduced = useReducedMotion()
  const Component = motion[as]
  return <Component className={className} initial={reduced ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.78, delay, ease }}>
    {children}
  </Component>
}

const Arrow = ({ diagonal = false }) => <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>

function SectionIntro({ number, label, title, aside }) {
  return <div className="section-intro">
    <div className="section-overline"><span>{number}</span><span>{label}</span></div>
    <Reveal as="h2" className="section-title">{title}</Reveal>
    {aside && <Reveal className="section-aside" delay={0.08}>{aside}</Reveal>}
  </div>
}

function ProjectVisual({ index }) {
  return <div className={`project-visual visual-${index}`} aria-hidden="true">
    {index === 0 && <div className="visual-phone"><div className="phone-top"><span>LOCALGO</span><span>09:41</span></div><div className="phone-greeting">Good evening,<br /><b>What are you craving?</b></div><div className="phone-search">Ask GOER anything <span>✳</span></div><div className="phone-chat"><span>Find me something vegetarian nearby</span><span>GOER is on it ↗</span></div></div>}
    {index === 1 && <div className="visual-orbit"><div className="orbit-a"/><div className="orbit-b"/><div className="orbit-core">J</div><span className="orbit-label label-one">VOICE</span><span className="orbit-label label-two">HOME</span><span className="orbit-label label-three">AUTOMATION</span></div>}
    {index === 2 && <div className="visual-face"><div className="face-grid"/><div className="face-outline"><div className="face-eye left"/><div className="face-eye right"/><div className="face-nose"/><div className="face-mouth"/></div><div className="face-caption">IDENTITY VERIFIED <span>●</span></div></div>}
  </div>
}

export default function Home() {
  const location = useLocation()
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView(), 50)
      return () => clearTimeout(timer)
    }
  }, [location.hash])

  return <>
    <motion.div className="reading-progress" style={{ scaleX: progress }} aria-hidden="true" />
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <motion.div className="availability" initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}><span className="availability-dot" /> BUILDING AT THE INTERSECTION OF SOFTWARE &amp; SYSTEMS</motion.div>
            <motion.h1 id="hero-title" initial={reduced ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.12, ease }}>Engineering<br /><em>what's next.</em></motion.h1>
            <motion.p className="hero-summary" initial={reduced ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.25, ease }}>I'm Samer Odeh, a computer engineering student and software engineer in Montréal. I build useful products across AI, mobile, and infrastructure.</motion.p>
            <motion.div className="hero-actions" initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.38, ease }}>
              <a className="button button-dark" href="#projects">Explore my work <Arrow /></a>
              <a className="text-link" href="#contact">Get in touch <Arrow diagonal /></a>
            </motion.div>
          </div>
          <div className="hero-art"><HeroSculpture /><div className="art-caption"><span>FIG. 01</span><span>Ideas in motion / 2026</span></div></div>
        </div>
        <div className="container hero-foot"><span>SCROLL TO EXPLORE ↓</span><span>MONTRÉAL, QC · CANADA</span></div>
      </section>

      <div className="intro-band" id="about"><div className="container intro-grid"><span className="band-label">A LITTLE ABOUT ME</span><Reveal as="p">I like the full picture, from the interface you can touch to the infrastructure you never see. My work moves between <strong>product engineering</strong>, <strong>agentic AI</strong>, and <strong>connected systems</strong>.</Reveal><span className="band-index">01 / 04</span></div></div>

      <section className="work-section section-pad" id="projects" aria-labelledby="projects-title"><div className="container">
        <SectionIntro number="01 / 04" label="SELECTED WORK" title={<span id="projects-title">Built with intent.</span>} aside="A few things I've brought from idea to working software." />
        <div className="project-stack">
          {projects.map((project, index) => <Reveal as="article" className="project-row" key={project.title}>
            <ProjectVisual index={index} />
            <div className="project-detail"><div className="project-kicker"><span>0{index + 1} / PROJECT</span><span>{project.date}</span></div><h3>{project.title}</h3><p className="project-lead"><Emphasized text={project.features[0]} /></p><ul className="project-points">{project.features.slice(1).map((feature, i) => <li key={i}><Emphasized text={feature} /></li>)}</ul><div className="project-tags">{project.tech.slice(0, 5).map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-action" href={project.github} target="_blank" rel="noopener noreferrer">{project.linkLabel || 'View source'} <Arrow diagonal /></a></div>
          </Reveal>)}
        </div>
      </div></section>

      <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title"><div className="container">
        <SectionIntro number="02 / 04" label="EXPERIENCE" title={<span id="experience-title">The work behind<br /><em>the work.</em></span>} aside="Building, shipping, and learning with ambitious teams." />
        <div className="experience-list">{experiences.map((experience, index) => <Reveal as="article" className="experience-row" key={experience.company}>
          <div className="experience-num">0{index + 1}</div><div className="experience-main"><h3>{experience.role}</h3><div className="experience-company">{experience.company}{experience.clientLinks && <span> · {experience.clientLinks.map((client, i) => <React.Fragment key={client.label}>{i > 0 && ', '}<a href={client.url} target="_blank" rel="noopener noreferrer">{client.label}</a></React.Fragment>)}</span>}</div><ul>{experience.bullets.map((bullet, i) => <li key={i}><Emphasized text={bullet} /></li>)}</ul></div><div className="experience-meta"><span>{experience.period}</span><span>{experience.location}</span></div>
        </Reveal>)}</div>
      </div></section>

      <section className="capabilities-section section-pad" aria-labelledby="capabilities-title"><div className="container capabilities-grid"><div><SectionIntro number="03 / 04" label="CAPABILITIES" title={<span id="capabilities-title">Many layers.<br /><em>One mindset.</em></span>} /></div><div className="capabilities-content"><Reveal as="p">Good software takes more than a stack. I combine product thinking with the engineering discipline to make ideas reliable, usable, and ready to scale.</Reveal><div className="capability-lines"><Reveal><span>01</span><strong>Product &amp; mobile</strong><span>React Native · TypeScript · Swift</span></Reveal><Reveal><span>02</span><strong>Backend &amp; AI</strong><span>Python · FastAPI · Groq</span></Reveal><Reveal><span>03</span><strong>Infrastructure</strong><span>Docker · Kubernetes · Terraform</span></Reveal><Reveal><span>04</span><strong>Embedded systems</strong><span>ROS2 · ESP32 · C/C++</span></Reveal></div></div></div></section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-inner"><div className="contact-overline">04 / 04 &nbsp; · &nbsp; WHAT'S NEXT</div><Reveal as="h2" className="contact-title"><span id="contact-title">Let's make<br /><em>something matter.</em></span></Reveal><div className="contact-bottom"><p>Have an idea, an opportunity, or a good challenge? I'd like to hear about it.</p><a href="mailto:samerodeh.dev@gmail.com" className="contact-button">Start a conversation <Arrow diagonal /></a></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Samer Odeh</span><div><a href="https://github.com/samerodeh" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/samer-odeh-1265b1343/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="mailto:samerodeh.dev@gmail.com">Email ↗</a></div><a href="#top">Back to top ↑</a></div></footer>
  </>
}
