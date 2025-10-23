import React, { useState } from 'react'
import './Experiences.css'

const Experiences = () => {
  const [activeTab, setActiveTab] = useState('education')

  const education = [
    {
      id: 1,
      title: "Bachelor of Computer Engineering (Co-op)",
      institution: "Concordia University, Montreal",
      period: "2023 - 2028",
      description: "Pursuing a comprehensive computer engineering degree with co-op program, focusing on software engineering, hardware systems, algorithms, and data structures.",
      achievements: [
        "Co-op program participant",
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Architecture",
        "Montreal, QC, Canada"
      ],
      skills: ["Java", "Python", "C++", "Data Structures", "Algorithms", "Computer Architecture", "Software Engineering"],
      status: "current"
    },
    {
      id: 2,
      title: "High School Diploma",
      institution: "SAIS (Sharjah American International School), Sharjah, UAE",
      period: "2017 - 2021",
      description: "Graduated from SAIS in Sharjah, UAE, maintaining strong academic performance while participating in various extracurricular activities.",
      achievements: [
        "Strong academic performance",
        "Participated in various school activities",
        "Mathematics and Science focus"
      ],
      skills: ["Mathematics", "Science", "Leadership", "International Education"],
      status: "completed"
    }
  ]

  const workExperience = [
    {
      id: 1,
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      description: "Working on various web development projects and personal applications to build experience and skills.",
      achievements: [
        "Developed multiple web applications using React",
        "Worked on full-stack projects and API development",
        "Gained experience with modern web technologies"
      ],
      skills: ["React", "MongoDB", "JavaScript", "HTML/CSS"],
      status: "current"
    },
    {
      id: 2,
      title: "Software Developer & Electrical Engineer",
      company: "Space Concordia - Robotics Division",
      period: "2023 - 2025",
      description: "Working on robotics projects for space exploration. Developed publisher-subscriber software architecture and contributed to Mars rover firmware development alongside a team of experts.",
      achievements: [
        "Developed publisher-subscriber program architecture for robotics software",
        "Worked on Mars rover basic firmware with expert team",
        "Collaborated on space robotics hardware and software integration",
        "Contributed to real-time communication systems"
      ],
      skills: ["Python", "C++", "ROS (Robot Operating System)", "Firmware Development", "Team Collaboration", "Space Robotics"],
      status: "current"
    },
    {
      id: 3,
      title: "Computer Engineering Student",
      company: "Concordia University",
      period: "2021 - Present",
      description: "Studying Computer Engineering with focus on software development, hardware systems, and robotics. Completed coursework in programming, algorithms, and engineering fundamentals.",
      achievements: [
        "Completed core programming courses (Java, Python, C++)",
        "Studied data structures and algorithms",
        "Worked on engineering design projects",
        "Participated in robotics and space engineering projects"
      ],
      skills: ["Java", "Python", "C++", "Data Structures", "Algorithms", "Engineering Design"],
      status: "completed"
    }
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      period: "2023",
      description: "Full-stack e-commerce application with user authentication, payment processing, and inventory management.",
      technologies: ["React", "MongoDB", "Stripe API"],
      features: [
        "User authentication and authorization",
        "Shopping cart and checkout process",
        "Admin dashboard for inventory management",
        "Payment integration with Stripe"
      ],
      link: "https://github.com/username/ecommerce-platform",
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      period: "2023",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Socket.io", "PostgreSQL"],
      features: [
        "Real-time task updates",
        "Team collaboration tools",
        "Project timeline visualization",
        "Notification system"
      ],
      link: "https://github.com/username/task-manager",
      status: "completed"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      period: "2024",
      description: "Interactive weather dashboard with location-based forecasts and historical data visualization.",
      technologies: ["React", "D3.js", "OpenWeather API", "Chart.js"],
      features: [
        "Location-based weather forecasts",
        "Interactive data visualization",
        "Historical weather trends",
        "Mobile-responsive design"
      ],
      link: "https://github.com/username/weather-dashboard",
      status: "in-progress"
    }
  ]

  const getCurrentData = () => {
    switch (activeTab) {
      case 'education':
        return education
      case 'work':
        return workExperience
      case 'projects':
        return projects
      default:
        return education
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'current':
        return '#e50914'
      case 'completed':
        return '#00d4aa'
      case 'in-progress':
        return '#ffb800'
      default:
        return '#b3b3b3'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'current':
        return 'Current'
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="experiences">
      {/* Hero Section */}
      <section className="experiences-hero">
        <div className="container">
          <h1 className="page-title">My Journey</h1>
          <p className="page-subtitle">
            A timeline of my educational background, work experience, and notable projects
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="section">
        <div className="container">
          <div className="tab-navigation">
            <button
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <span className="tab-icon">🎓</span>
              Education
            </button>
            <button
              className={`tab-button ${activeTab === 'work' ? 'active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              <span className="tab-icon">💼</span>
              Work Experience
            </button>
            <button
              className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <span className="tab-icon">🚀</span>
              Projects
            </button>
          </div>

          {/* Timeline */}
          <div className="timeline">
            {getCurrentData().map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-marker">
                  <div 
                    className="marker-dot"
                    style={{ backgroundColor: getStatusColor(item.status) }}
                  ></div>
                  <div className="status-badge" style={{ backgroundColor: getStatusColor(item.status) }}>
                    {getStatusText(item.status)}
                  </div>
                </div>
                
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="card-header">
                      <h3 className="experience-title">{item.title}</h3>
                      <div className="experience-meta">
                        <span className="company">{item.company || item.institution}</span>
                        <span className="period">{item.period}</span>
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <p className="experience-description">{item.description}</p>
                      
                      {item.achievements && (
                        <div className="achievements">
                          <h4>Achievements:</h4>
                          <ul>
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.features && (
                        <div className="features">
                          <h4>Key Features:</h4>
                          <ul>
                            {item.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="skills">
                        <h4>Technologies & Skills:</h4>
                        <div className="skills-list">
                          {item.skills?.map((skill, idx) => (
                            <span key={idx} className="skill-tag">{skill}</span>
                          ))}
                          {item.technologies?.map((tech, idx) => (
                            <span key={idx} className="skill-tag">{tech}</span>
                          ))}
                        </div>
                      </div>

                      {item.link && (
                        <div className="project-links">
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            View Project →
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experiences
