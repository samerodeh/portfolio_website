import React, { useState } from 'react'
import './SkillsProjects.css'

const SkillsProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      technologies: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "JavaScript", level: 85, color: "#F7DF1E" },
        { name: "TypeScript", level: 75, color: "#3178C6" },
        { name: "HTML5", level: 95, color: "#E34F26" },
        { name: "CSS3", level: 90, color: "#1572B6" },
        { name: "Tailwind CSS", level: 80, color: "#06B6D4" },
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      technologies: [
        { name: "Python", level: 90, color: "#3776AB" },
        { name: "Java", level: 75, color: "#ED8B00" },
        { name: "C++", level: 70, color: "#00599C" },
        { name: "REST APIs", level: 85, color: "#FF6B6B" },
        { name: "GraphQL", level: 65, color: "#E10098" }
      ]
    },
    database: {
      title: "Database & Cloud",
      icon: "🗄️",
      technologies: [
        { name: "MongoDB", level: 80, color: "#47A248" },
        { name: "PostgreSQL", level: 75, color: "#336791" },
        { name: "MySQL", level: 70, color: "#4479A1" },
        { name: "AWS", level: 60, color: "#FF9900" },
        { name: "Firebase", level: 75, color: "#FFCA28" },
        { name: "Docker", level: 65, color: "#2496ED" },
      ]
    },
    tools: {
      title: "Tools & Others",
      icon: "🛠️",
      technologies: [
        { name: "Git", level: 90, color: "#F05032" },
        { name: "VS Code", level: 95, color: "#007ACC" },
        { name: "Figma", level: 70, color: "#F24E1E" },
        { name: "Postman", level: 80, color: "#FF6C37" },
        { name: "Linux", level: 65, color: "#FCC624" },
      ]
    }
  }

  const projects = [
    {
      id: 1,
      title: "Face Detection App",
      description: "Built a face detection app using Python and OpenCV. It can detect faces in images and videos, plus some basic recognition features.",
      image: "👁️",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "Jupyter Notebook"],
      category: "ai",
      features: [
        "Detects faces in photos and videos",
        "Works with webcam input",
        "Simple GUI interface",
        "Can identify multiple faces at once",
        "Built with Python and OpenCV"
      ],
      github: "https://github.com/samerodeh/face_detection_app",
      demo: null,
      status: "completed"
    },
    {
      id: 2,
      title: "Database Management System",
      description: "A full-stack application with PostgreSQL backend and React frontend for managing and querying databases efficiently.",
      image: "🗄️",
      technologies: ["React", "PostgreSQL", "SQL"],
      category: "web",
      features: [
        "PostgreSQL database integration",
        "React-based user interface",
        "Database query and management tools",
        "Real-time data visualization",
        "User authentication system"
      ],
      github: "https://github.com/samerodeh/database-project",
      demo: null,
      status: "completed"
    },
    {
      id: 3,
      title: "React UI Components",
      description: "A collection of reusable React components and UI elements for building modern web applications.",
      image: "⚛️",
      technologies: ["React", "JavaScript", "CSS", "HTML", "Component Design"],
      category: "web",
      features: [
        "Reusable React components",
        "Modern UI design patterns",
        "Responsive layouts",
        "Interactive elements",
        "Custom styling and themes"
      ],
      github: "https://github.com/samerodeh/react-ui-components",
      demo: null,
      status: "completed"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🌟' },
    { id: 'web', label: 'Web Apps', icon: '🌐' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { id: 'ai', label: 'AI/ML', icon: '🤖' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getStatusColor = (status) => {
    switch (status) {
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
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="skills-projects">
      {/* Hero Section */}
      <section className="skills-hero">
        <div className="container">
          <h1 className="page-title">Skills & Projects</h1>
          <p className="page-subtitle">
            Technical expertise and portfolio of projects showcasing my development journey
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([key, skill]) => (
              <div key={key} className="skill-category">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <h3 className="skill-title">{skill.title}</h3>
                </div>
                <div className="technologies-list">
                  {skill.technologies.map((tech, index) => (
                    <div key={index} className="technology-item">
                      <div className="tech-info">
                        <span className="tech-name">{tech.name}</span>
                        <span className="tech-level">{tech.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: `${tech.level}%`,
                            backgroundColor: tech.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          {/* Project Filters */}
          <div className="project-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <div className="project-image">{project.image}</div>
                  <div className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>
                    {getStatusText(project.status)}
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
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
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <span>Live Demo</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillsProjects
