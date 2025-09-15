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
        { name: "Vue.js", level: 70, color: "#4FC08D" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "Express.js", level: 80, color: "#000000" },
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
        { name: "Redis", level: 60, color: "#DC382D" }
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
        { name: "Agile/Scrum", level: 75, color: "#FF6B6B" },
        { name: "Jest", level: 70, color: "#C21325" }
      ]
    }
  }

  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      description: "A full-stack Netflix clone with user authentication, movie browsing, and recommendation system.",
      image: "🎬",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Stripe"],
      category: "web",
      features: [
        "User authentication and profiles",
        "Movie streaming interface",
        "Search and filtering",
        "Payment integration",
        "Responsive design"
      ],
      github: "https://github.com/username/netflix-clone",
      demo: "https://netflix-clone-demo.com",
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management platform with real-time updates and team collaboration features.",
      image: "📋",
      technologies: ["React", "Socket.io", "Express.js", "PostgreSQL", "Redis"],
      category: "web",
      features: [
        "Real-time collaboration",
        "Task assignment and tracking",
        "Project timeline visualization",
        "Notification system",
        "File attachments"
      ],
      github: "https://github.com/username/task-manager",
      demo: "https://task-manager-demo.com",
      status: "completed"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and historical data visualization.",
      image: "🌤️",
      technologies: ["React", "D3.js", "OpenWeather API", "Chart.js", "PWA"],
      category: "web",
      features: [
        "Location-based forecasts",
        "Interactive data visualization",
        "Historical weather trends",
        "PWA capabilities",
        "Offline support"
      ],
      github: "https://github.com/username/weather-dashboard",
      demo: "https://weather-dashboard-demo.com",
      status: "in-progress"
    },
    {
      id: 4,
      title: "Machine Learning Model",
      description: "Sentiment analysis model for social media posts using natural language processing.",
      image: "🤖",
      technologies: ["Python", "TensorFlow", "NLTK", "Pandas", "Scikit-learn"],
      category: "ai",
      features: [
        "Sentiment classification",
        "Real-time processing",
        "Model training pipeline",
        "API integration",
        "Performance metrics"
      ],
      github: "https://github.com/username/sentiment-analysis",
      demo: null,
      status: "completed"
    },
    {
      id: 5,
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans and progress monitoring.",
      image: "💪",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Push Notifications"],
      category: "mobile",
      features: [
        "Workout tracking",
        "Progress visualization",
        "Social features",
        "Push notifications",
        "Offline mode"
      ],
      github: "https://github.com/username/fitness-app",
      demo: null,
      status: "in-progress"
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with admin dashboard and payment processing.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3"],
      category: "web",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment processing",
        "Admin dashboard",
        "Order management"
      ],
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
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
