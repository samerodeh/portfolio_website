import React, { useEffect, useRef, useState } from 'react'
import './Home.css'

const Home = () => {
  const [visibleElements, setVisibleElements] = useState(new Set())
  const observerRef = useRef()

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add element to visible set
            setVisibleElements(prev => new Set([...prev, entry.target.id]))
          } else {
            // Remove element from visible set when it leaves viewport
            setVisibleElements(prev => {
              const newSet = new Set(prev)
              newSet.delete(entry.target.id)
              return newSet
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const experiences = [
    {
      id: 1,
      title: "Founder & Full-Stack Engineer",
      company: "Odeh Software Consulting",
      location: "Remote",
      period: "Jan. 2026 – Present",
      description: "Founded and operate a software consulting practice delivering custom AI-powered mobile applications for local restaurants and small businesses across Montreal.",
      achievements: [
        "Architected and built a reusable full-stack platform using React Native, TypeScript, and FastAPI to serve 5 local restaurant and small business clients",
        "Delivered per-client customizations covering menus, ordering workflows, authentication, branding, and business-specific user experiences",
        "Integrated REST APIs, databases, authentication systems, and third-party services to ship production-ready cross-platform applications",
        "Automated ordering, reservations, and customer support workflows, improving operational efficiency for each client"
      ],
      skills: ["React Native", "TypeScript", "FastAPI", "REST APIs", "Authentication", "Mobile Development"],
      status: "current"
    },
    {
      id: 2,
      title: "Robotics Team Member",
      company: "Space Concordia",
      location: "Montreal, QC",
      period: "Sep. 2025 – Jan. 2026",
      description: "Contributed to the Robotics Division, developing software architecture and autonomous systems for space exploration rover platforms.",
      achievements: [
        "Learned Linux, ROS2, and robotic software architecture through team mentorship",
        "Built and simulated an autonomous robot independently using ROS2 and Gazebo",
        "Gained hands-on experience with publisher/subscriber communication patterns in Python and C++"
      ],
      skills: ["Python", "C++", "ROS2", "Gazebo", "Linux", "Robotics"],
      status: "completed"
    },
    {
      id: 3,
      title: "Team Member – Formula Student Competition",
      company: "IEEE Concordia",
      location: "Montreal, QC",
      period: "Oct. 2025 – Nov. 2025",
      description: "Collaborated with a multidisciplinary team to design, build, and compete with a Formula One-style race car, integrating mechanical, electrical, and embedded software systems.",
      achievements: [
        "Collaborated with a multidisciplinary team to design and build a small Formula One-style race car",
        "Integrated mechanical, electrical, and software systems including controls and embedded electronics",
        "Implemented wireless motor control on ESP32 using PWM with an L298N driver, adding telemetry and remote control endpoints",
        "Applied engineering design, teamwork, and problem-solving skills under competition constraints"
      ],
      skills: ["ESP32", "PWM", "Motor Control", "Embedded Systems", "C++", "Engineering Design"],
      status: "completed"
    }
  ]

  const education = [
    {
      id: 1,
      title: "Bachelor of Engineering – Computer Engineering",
      company: "Concordia University",
      location: "Montreal, QC, Canada",
      period: "2023 – Expected Sep. 2028",
      description: "Pursuing a Bachelor of Engineering in Computer Engineering with a focus on software systems, hardware architecture, algorithms, and data structures.",
      achievements: [
        "Co-op program participant",
        "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Architecture"
      ],
      skills: ["Java", "Python", "C++", "Data Structures", "Algorithms", "Computer Architecture", "Software Engineering"],
      status: "current"
    }
  ]

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
      github: "https://github.com/samerodeh/autonomous_vehicle",
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
      github: "https://github.com/samerodeh/neural_network_scratch",
      status: "completed"
    },
    {
      id: 4,
      title: "Neural Network from Scratch",
      description: "A fully connected feedforward neural network implemented from the ground up without deep learning frameworks, trained and evaluated on the MNIST dataset.",
      technologies: ["Python", "NumPy", "Matplotlib"],
      features: [
        "Implemented a fully connected feedforward neural network from scratch without deep learning frameworks",
        "Coded forward propagation, backpropagation, and gradient descent using only NumPy",
        "Applied ReLU and softmax activations with cross-entropy loss; visualized training performance using Matplotlib"
      ],
      github: "https://github.com/samerodeh/neural_network_scratch",
      status: "completed"
    }
  ]

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "samerodeh.dev@gmail.com",
      link: "mailto:samerodeh.dev@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (514) 246-4894",
      link: "tel:+15142464894"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Montreal, QC, Canada",
      link: null
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/samer-odeh",
      link: "https://www.linkedin.com/in/samer-odeh"
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
        <div className="hero-content">
            <p className="hero-subtitle fade-in-up">Full-Stack Engineer & Computer Engineering Student</p>
            <p className="hero-description fade-in-up animate-delay-1">
              I build production-ready software — from AI-powered mobile apps to embedded robotics systems.
              Currently studying Computer Engineering at Concordia University and running my own software consulting practice.
            </p>
            <p className="hero-quote fade-in-up animate-delay-2">
              "Developers, developers, developers!" – Steve Ballmer
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in-up">Experience</h2>
          <div className="experiences-list">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                id={`exp-${exp.id}`}
                className={`experience-item animate-on-scroll ${visibleElements.has(`exp-${exp.id}`) ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
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
                    <h4>Technologies & Skills:</h4>
                    <div className="skills-list">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <h2 className="section-title fade-in-up">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                id={`project-${project.id}`}
                className={`project-card animate-on-scroll ${visibleElements.has(`project-${project.id}`) ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section education-section">
        <div className="container">
          <h2 className="section-title fade-in-up">Education</h2>
          <div className="experiences-list">
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                id={`edu-${edu.id}`}
                className={`experience-item animate-on-scroll ${visibleElements.has(`edu-${edu.id}`) ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                <div className="experience-header">
                  <h3 className="experience-title">{edu.title}</h3>
                  <div className="experience-meta">
                    <span className="company">{edu.company}</span>
                    <span className="location">{edu.location}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                </div>
                
                <div className="experience-content">
                  <p className="experience-description">{edu.description}</p>
                  
                  <div className="achievements">
                    <h4>Highlights:</h4>
                    <ul>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
            </div>
            
                  <div className="skills">
                    <h4>Technologies & Skills:</h4>
                    <div className="skills-list">
                      {edu.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <h2 className="section-title fade-in-up">Contact</h2>
          <div className="contact-info">
            <div className="info-list">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  id={`contact-${index}`}
                  className={`info-item animate-on-scroll ${visibleElements.has(`contact-${index}`) ? 'animate' : ''}`}
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  <span className="info-icon">{info.icon}</span>
                  <div className="info-content">
                    <span className="info-label">{info.title}</span>
                    {info.link ? (
                      <a href={info.link} className="info-value link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
