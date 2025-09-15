import React, { useState } from 'react'
import './Experiences.css'

const Experiences = () => {
  const [activeTab, setActiveTab] = useState('education')

  const education = [
    {
      id: 1,
      title: "Bachelor of Computer Science",
      institution: "University Name",
      period: "2021 - 2025",
      description: "Pursuing a comprehensive computer science degree with focus on software engineering, algorithms, and data structures.",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "GPA: 3.8/4.0",
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering"
      ],
      skills: ["Java", "Python", "C++", "Data Structures", "Algorithms"],
      status: "current"
    },
    {
      id: 2,
      title: "High School Diploma",
      institution: "High School Name",
      period: "2017 - 2021",
      description: "Graduated with honors, maintaining strong academic performance while participating in various extracurricular activities.",
      achievements: [
        "Valedictorian",
        "National Honor Society Member",
        "Math Club President"
      ],
      skills: ["Mathematics", "Science", "Leadership"],
      status: "completed"
    }
  ]

  const workExperience = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      description: "Developing custom websites and web applications for local businesses and startups.",
      achievements: [
        "Built 15+ responsive websites using React and Node.js",
        "Improved client website performance by 40% on average",
        "Maintained 100% client satisfaction rate"
      ],
      skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"],
      status: "current"
    },
    {
      id: 2,
      title: "Teaching Assistant",
      company: "University Computer Science Department",
      period: "2023 - Present",
      description: "Assisting professors in teaching introductory programming courses and helping students with coding assignments.",
      achievements: [
        "Mentored 50+ students in programming fundamentals",
        "Improved student pass rate by 15%",
        "Developed supplementary learning materials"
      ],
      skills: ["Java", "Python", "Teaching", "Mentoring", "Problem Solving"],
      status: "current"
    },
    {
      id: 3,
      title: "Summer Intern",
      company: "Local Tech Startup",
      period: "Summer 2023",
      description: "Worked as a software development intern, contributing to the company's main web application.",
      achievements: [
        "Implemented new user authentication system",
        "Reduced application load time by 30%",
        "Collaborated with senior developers on feature development"
      ],
      skills: ["React", "Express.js", "PostgreSQL", "Git", "Agile"],
      status: "completed"
    }
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      period: "2023",
      description: "Full-stack e-commerce application with user authentication, payment processing, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
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
      technologies: ["React", "Socket.io", "Express.js", "PostgreSQL"],
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
