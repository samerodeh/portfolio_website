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
      title: "Software Developer",
      company: "Space Concordia",
      location: "Montreal, QC",
      period: "Sep. 2025 – Present",
      description: "Working on robotics projects for space exploration, focusing on rover communication systems and firmware development.",
      achievements: [
        "Created a publisher-subscriber program in Python and C++ for rover communication",
        "Programmed microcontrollers and wrote low-level firmware for Robotics Division subsystems"
      ],
      skills: ["Python", "C++", "Microcontrollers", "Firmware Development", "Robotics", "Communication Systems"],
      status: "current"
    },
    {
      id: 2,
      title: "Team Member – Formula Student Competition",
      company: "IEEE Concordia",
      location: "Montreal, QC",
      period: "Oct. 2025 – Nov. 2025",
      description: "Collaborated with a team to design and build a Formula One-style race car from scratch, integrating mechanical, electrical, and software systems.",
      achievements: [
        "Collaborated with a team to design and build a Formula One-style race car from scratch",
        "Integrated mechanical, electrical, and software systems (chassis, controls, embedded electronics)",
        "Implemented wireless motor control on ESP32 using PWM with an L298N driver for DC motors, including telemetry and control endpoints",
        "Competed in an inter-university event, applying engineering design, teamwork, and problem-solving"
      ],
      skills: ["ESP32", "PWM", "Motor Control", "Embedded Systems", "Team Collaboration", "Engineering Design"],
      status: "completed"
    }
  ]

  const education = [
    {
      id: 1,
      title: "Computer Engineering Student",
      company: "Concordia University",
      location: "Montreal, QC, Canada",
      period: "2023 - 2028",
      description: "Pursuing a comprehensive computer engineering degree with co-op program, focusing on software engineering, hardware systems, algorithms, and data structures.",
      achievements: [
        "Co-op program participant",
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Architecture",
        "Montreal, QC, Canada"
      ],
      skills: ["Java", "Python", "C++", "Data Structures", "Algorithms", "Computer Architecture", "Software Engineering"],
      status: "current"
    }
  ]

  const projects = [
    {
      id: 1,
      title: "Autonomous Vehicle",
      description: "Built a small autonomous ground vehicle for an engineering physical challenge, performing mapping, localization, and navigation using ROS 2, SLAM, Gazebo, and the Nav2 stack.",
      technologies: ["ROS 2", "SLAM", "Gazebo", "Nav2", "Raspberry Pi", "Arduino", "Fusion"],
      features: [
        "Built a small autonomous ground vehicle for an engineering physical challenge",
        "Performed mapping, localization, and navigation using ROS 2, SLAM, Gazebo, and the Nav2 stack",
        "Hardware architecture involved Raspberry Pi (perception/planning) and Arduino (real-time motor control, PWM/encoders) with sensor fusion",
        "Modeled mounts/enclosures in Fusion and fabricated prototypes via 3D printing",
        "Currently extending the platform into an autonomous vacuum prototype (coverage planning, obstacle avoidance)"
      ],
      github: "https://github.com/samerodeh/autonomous_vehicle",
      status: "completed"
    },
    {
      id: 2,
      title: "Facelytics",
      description: "Built a full-stack web application with a FastAPI REST API and a React frontend, featuring facial recognition capabilities and GitHub OAuth integration.",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "Supabase", "Celery", "Redis"],
      features: [
        "Built a full-stack web application with a FastAPI REST API and a React frontend",
        "Fine-tuned a CNN to generate facial embeddings and compare two faces",
        "Implemented GitHub OAuth for user repository data access",
        "Used Celery + Redis for background jobs (e.g., report generation, notifications)"
      ],
      github: "https://github.com/samerodeh/facelytics",
      status: "completed"
    },
    {
      id: 3,
      title: "Hank's Café Chatbot",
      description: "Developed a mobile-first React Native application with Expo Router, featuring an intelligent chatbot using OpenAI with Retrieval-Augmented Generation (RAG).",
      technologies: ["React Native", "TypeScript", "Firebase", "Pinecone", "OpenAI"],
      features: [
        "Developed a mobile-first React Native application with Expo Router",
        "Designed RESTful API endpoints in FastAPI for chatbot communication",
        "Built an intelligent chatbot using OpenAI with Retrieval-Augmented Generation (RAG)",
        "Integrated a vector database with Pinecone for semantic search and product recommendations",
        "Applied prompt engineering to improve model response quality and consistency",
        "Created responsive UI components with TypeScript and NativeWind"
      ],
      github: "https://github.com/samerodeh/hanks_cafe_chatbot",
      status: "completed"
    },
    {
      id: 4,
      title: "Neural Network from Scratch",
      description: "Implemented a fully connected feedforward neural network from scratch without deep learning frameworks, trained and tested on the MNIST dataset.",
      technologies: ["Python", "NumPy", "Matplotlib"],
      features: [
        "Implemented a fully connected feedforward neural network from scratch without deep learning frameworks",
        "Coded forward propagation, backpropagation, and gradient descent using only NumPy",
        "Applied ReLU and softmax activations with cross-entropy loss for multi-class classification",
        "Trained and tested the network on the MNIST dataset, achieving strong accuracy",
        "Visualized training performance using Matplotlib (loss curves and accuracy plots)"
      ],
      github: "https://github.com/samerodeh/neural_network_scratch",
      status: "completed"
    }
  ]

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "samer.odeh592@outlook.com",
      link: "mailto:samer.odeh592@outlook.com"
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
      value: "linkedin.com/in/samer-odeh-1265b1343/",
      link: "https://www.linkedin.com/in/samer-odeh-1265b1343/"
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
        <div className="hero-content">
            <p className="hero-subtitle fade-in-up">Computer Engineering Student | Developer</p>
            <p className="hero-description fade-in-up animate-delay-1">
            Building cool stuff with code. Currently studying Computer Engineering at Concordia University 
            and always working on something interesting.
          </p>
            <p className="hero-quote fade-in-up animate-delay-2">
              "Developers, developers, developers!" - Steve Ballmer
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
                    <h4>Achievements:</h4>
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