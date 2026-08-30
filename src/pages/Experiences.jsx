import React from 'react'
import { motion } from 'framer-motion'
import TiltCard from '../components/TiltCard'
import './Experiences.css'

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
  const experiences = [
    {
      id: 1,
      title: "Bachelor of Engineering in Computer Engineering",
      company: "Concordia University",
      location: "Montreal, QC, Canada",
      period: "Expected Sep. 2029",
      description: "Studying Computer Engineering with a focus on software systems, computer architecture, algorithms, and data structures.",
      achievements: [
        "Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Computer Architecture, Software Engineering"
      ],
      skills: ["Java", "Python", "C / C++", "Data Structures", "Algorithms", "Computer Architecture"],
      status: "current"
    },
    {
      id: 2,
      title: "Co-Founder & Chief Product Officer",
      company: "LocalGo",
      location: "Remote",
      period: "Jan. 2026 – Present",
      description: "Co-founded LocalGo, a full-stack food and groceries delivery platform, and own its backend, infrastructure, and mobile engineering.",
      achievements: [
        "Built LocalGo's backend, a FastAPI service on Postgres for ordering, dispatch, and delivery tracking",
        "Engineered full-stack features and built the mobile interfaces in TypeScript with React Native and Expo",
        "Shipped mobile builds through Expo / EAS with over-the-air updates, staged release channels, and crash reporting",
        "Provisioned the whole stack as code with Terraform and Ansible, plus zero-downtime deploys and rollback",
        "Deployed on Docker and Kubernetes with Prometheus monitoring, Redis caching, and RabbitMQ queues",
        "Set up GitHub Actions CI/CD with lint, type checks, and unit and integration tests using Pytest",
        "Self-hosted Postgres with automated backups, tested restores, and a read replica ready for failover",
        "Tuned routing and order-dispatch logic, cutting average delivery times by 15% across downtown Montreal"
      ],
      skills: ["FastAPI", "PostgreSQL", "React Native", "Expo", "Terraform", "Ansible", "Docker", "Kubernetes", "Prometheus", "Redis", "RabbitMQ", "GitHub Actions"],
      status: "current"
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      company: "CopyPasta",
      location: "Remote",
      period: "Feb. 2026 – May 2026",
      description: "Worked on ClipTex, an OCR app that lifts text out of any screenshot, shipped on the macOS App Store.",
      achievements: [
        "Built a fully offline file-conversion feature for ClipTex",
        "Designed and implemented a high-performance file-conversion engine supporting 20+ formats natively on macOS",
        "Optimized media-processing logic to cut conversion latency by 15% across high-resolution datasets",
        "Wrote QA and unit-test coverage for every new function in the file-conversions class using OOP",
        "Maintained sandboxed file access and security practices for the live App Store release"
      ],
      skills: ["Swift", "SwiftUI", "AppKit", "ImageIO", "PDFKit", "AVFoundation"],
      status: "completed"
    },
    {
      id: 4,
      title: "Robotics Software Member",
      company: "Space Concordia",
      location: "Montreal, QC, Canada",
      period: "Sep. 2025 – Jan. 2026",
      description: "Built autonomous-robot software on the Space Concordia team using ROS2 and Gazebo.",
      achievements: [
        "Designed, built, and simulated a fully autonomous robot independently using ROS2 and Gazebo",
        "Developed publisher/subscriber communication systems in Python and C/C++"
      ],
      skills: ["Python", "C / C++", "ROS2", "Gazebo", "Linux", "Robotics"],
      status: "completed"
    },
    {
      id: 5,
      title: "Full-Stack Software Engineer",
      company: "Freelancer",
      location: "Remote",
      period: "2025 – Present",
      description: "Freelance full-stack engineering for PureBranded, Singer Haley, and STB.",
      achievements: [
        "Designed and built custom apps and web applications for a range of companies and businesses"
      ],
      skills: ["React", "FastAPI", "TypeScript", "Expo", "REST APIs"],
      status: "current"
    }
  ]

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
              <TiltCard key={exp.id} className="experience-item" variants={up}>
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>

                <div className="experience-content">
                  <p className="experience-description">{exp.description}</p>

                  <div className="achievements">
                    <h4>Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="skills">
                    <h4>Technologies &amp; Skills:</h4>
                    <div className="skills-list">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
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
