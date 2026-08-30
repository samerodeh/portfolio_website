import React from 'react'
import { motion } from 'framer-motion'
import TiltCard from '../components/TiltCard'
import './SkillsProjects.css'

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
  const projects = [
    {
      id: 1,
      title: "Sufra AI",
      description: "A multi-agent restaurant assistant spanning a React Native app and a FastAPI backend, with RAG-based semantic retrieval over the menu via ChromaDB.",
      technologies: ["React Native", "Expo", "FastAPI", "Python", "TypeScript", "SQLite", "ChromaDB", "Groq"],
      features: [
        "Multi-agent LLM assistant that routes each message to a specialist agent for ordering, reservations, or dietary intent",
        "RAG-based semantic retrieval over the menu with ChromaDB for context-aware answers",
        "FastAPI backend with SQLite for authentication and order tracking, with React Native and Expo clients"
      ],
      github: "https://github.com/samerodeh/SufraAI",
      status: "completed"
    },
    {
      id: 2,
      title: "Jarvis",
      description: "A voice-controlled home automation system built on a multi-agent LLM workflow on Google Gemini, bridging language intent to ESP32 hardware in real time.",
      technologies: ["Python", "Google Gemini", "ESP32", "Embedded C/C++", "PCB Design", "UART / I2C"],
      features: [
        "Multi-agent LLM workflow on Google Gemini that turns natural voice commands into home actions",
        "Embedded C/C++ firmware for ESP32 nodes and custom PCBs, handling UART / I2C and SG90 servo control",
        "Deployed across 4+ rooms for voice-controlled switching of lights and heaters on resource-constrained nodes"
      ],
      github: "https://github.com/samerodeh/full_home_automation_system",
      status: "completed"
    },
    {
      id: 3,
      title: "Facelytics",
      description: "A CNN-based web app that compares faces using vector embeddings for real-time verification, with a FastAPI REST API, React frontend, GitHub OAuth, and async background jobs.",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "Supabase", "Celery", "Redis"],
      features: [
        "Custom-trained CNN that extracts high-dimensional facial embeddings from image datasets",
        "Vectorized distance metrics comparing embeddings for stable, real-time face verification",
        "FastAPI REST API with a React frontend, GitHub OAuth, and Celery + Redis background jobs, containerized with Docker"
      ],
      github: "https://github.com/samerodeh/Facelytics",
      status: "completed"
    }
  ]

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
              <TiltCard key={project.id} className="project-card" variants={up}>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <div className="project-content">
                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="more-features">+{project.features.length - 3} more...</li>
                      )}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
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
                    <span>GitHub</span>
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
