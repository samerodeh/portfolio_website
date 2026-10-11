import React from 'react'
import { motion } from 'framer-motion'
import TiltCard from '../components/TiltCard'
import './Experiences.css'
import { experiences, Emphasized } from '../resumeContent'

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

const Experiences = () => {

  return (
    <div className="experiences">
      {/* Hero Section */}
      <motion.section
        className="experiences-hero"
        initial="hidden"
        animate="show"
        variants={container(0.22, 0.08)}
      >
        <div className="container">
          <motion.h1 className="page-title" variants={up}>Experience</motion.h1>
          <motion.p className="page-subtitle" variants={up}>
            My journey in software engineering, embedded systems, and computer engineering
          </motion.p>
        </div>
      </motion.section>

      {/* Experiences List */}
      <section className="section">
        <div className="container">
          <motion.div
            className="experiences-list"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={container(0.22, 0.08)}
          >
            {experiences.map((exp) => (
              <TiltCard key={exp.company} className="experience-item" variants={up}>
                <div className="experience-header">
                  <h3 className="experience-title">{exp.role}</h3>
                  <div className="experience-meta">
                    <span className="company">{exp.company}{exp.clientLinks && <> ({exp.clientLinks.map((client, index) => <React.Fragment key={client.label}>{index > 0 && ", "}<a href={client.url} target="_blank" rel="noopener noreferrer">{client.label}</a></React.Fragment>)})</>}</span>
                    <span className="location">{exp.location}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>

                <div className="experience-content">
                  <div className="achievements">
                    <h4>Achievements:</h4>
                    <ul>
                      {exp.bullets.map((achievement, idx) => (
                        <li key={idx}><Emphasized text={achievement} /></li>
                      ))}
                    </ul>
                  </div>

                  {exp.tags.length > 0 && <div className="skills">
                    <h4>Technologies &amp; Skills:</h4>
                    <div className="skills-list">
                      {exp.tags.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>}
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experiences
