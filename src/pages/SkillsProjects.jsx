import React from 'react'
import { motion } from 'framer-motion'
import TiltCard from '../components/TiltCard'
import './SkillsProjects.css'
import { projects, Emphasized } from '../resumeContent'

const EASE = [0.22, 1, 0.36, 1]
const up = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.6, ease: EASE } },
}
const container = (stagger = 0.22, delay = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
})
const VP = { once: true, amount: 0.15 }

const SkillsProjects = () => {

  return (
    <div className="skills-projects">
      {/* Hero Section */}
      <motion.section
        className="skills-hero"
        initial="hidden"
        animate="show"
        variants={container(0.22, 0.08)}
      >
        <div className="container">
          <motion.h1 className="page-title" variants={up}>Projects</motion.h1>
          <motion.p className="page-subtitle" variants={up}>
            A selection of projects spanning full-stack development, AI systems, and backend engineering
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="projects-grid"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={container(0.22, 0.08)}
          >
            {projects.map((project) => (
              <TiltCard key={project.title} className="project-card" variants={up}>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3><span>{project.date}{project.kind && ` · ${project.kind}`}</span>
                </div>

                <div className="project-content">
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}><Emphasized text={feature} /></li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>{project.linkLabel || "GitHub"}</span>
                    <span>→</span>
                  </a>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SkillsProjects
