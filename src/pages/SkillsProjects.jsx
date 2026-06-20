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
      title: "Sufra",
      description: "A full-stack AI-powered restaurant chatbot built with React Native (Expo) and FastAPI, integrating a multi-agent LLM system with RAG via ChromaDB for context-aware responses and semantic menu search.",
      technologies: ["React Native", "Expo", "FastAPI", "Python", "TypeScript", "SQLite", "ChromaDB", "Groq"],
      features: [
        "Built a full-stack AI-powered restaurant chatbot using React Native (Expo) and FastAPI",
        "Integrated a multi-agent LLM system with RAG via ChromaDB for context-aware responses and semantic menu search",
        "Designed modular order, menu, dietary, and reservation agents with intent routing, integrating SQLite databases for authentication and order tracking"
      ],
      github: "https://github.com/samerodeh/sufra",
      status: "completed"
    },
    {
      id: 2,
      title: "Facelytics",
      description: "A full-stack web application with a FastAPI REST API and React frontend, featuring a fine-tuned CNN for facial embedding generation and comparison, backed by GitHub OAuth and async background job processing.",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "Supabase", "Celery", "Redis"],
      features: [
        "Built a full-stack web app (FastAPI REST API + React frontend) and fine-tuned a CNN to generate facial embeddings for face comparison",
        "Implemented GitHub OAuth and used Celery + Redis for background jobs including report generation and notifications",
        "Containerized the full application stack with Docker and deployed with Supabase for managed database hosting"
      ],
      github: "https://github.com/samerodeh/facelytics",
      status: "completed"
    },
    {
      id: 3,
      title: "Distributed URL Shortener",
      description: "A scalable URL shortening service inspired by Bitly, supporting custom aliases, analytics, and expiration links — built with a focus on production-grade system design.",
      technologies: ["Python", "PostgreSQL", "Redis", "Docker", "REST API"],
      features: [
        "Designed and built a scalable URL shortening service supporting custom aliases, analytics, and expiration links",
        "Implemented caching with Redis, persistent storage with PostgreSQL, and rate limiting for high request throughput",
        "Containerized services using Docker and documented API endpoints with production-style system design considerations"
      ],
      github: "https://github.com/samerodeh/distributed-url-shortener",
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
