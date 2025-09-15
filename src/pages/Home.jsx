import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const featuredContent = [
    {
      id: 1,
      title: "Full-Stack Development",
      description: "Building modern web applications with React, Node.js, and cloud technologies",
      image: "🎯",
      category: "Skills"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences with modern design principles",
      image: "🎨",
      category: "Design"
    },
    {
      id: 3,
      title: "Data Science",
      description: "Analyzing data to drive insights and build intelligent solutions",
      image: "📊",
      category: "Analytics"
    },
    {
      id: 4,
      title: "Machine Learning",
      description: "Developing AI models and algorithms for real-world applications",
      image: "🤖",
      category: "AI/ML"
    }
  ]

  const achievements = [
    { title: "Projects Completed", value: "25+", icon: "🚀" },
    { title: "Technologies Mastered", value: "15+", icon: "⚡" },
    { title: "Years Learning", value: "3+", icon: "📚" },
    { title: "Happy Collaborators", value: "50+", icon: "🤝" }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="gradient-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">
            Aspiring Software Engineer | Full-Stack Developer | Tech Enthusiast
          </p>
          <p className="hero-description">
            Passionate about creating innovative solutions and learning new technologies. 
            Ready to make an impact in the tech industry as an intern.
          </p>
          
          <div className="hero-buttons">
            <Link to="/experiences" className="btn btn-primary">
              View My Journey
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>

          {/* Floating Elements */}
          <div className="floating-elements">
            <div className="floating-card">React</div>
            <div className="floating-card">JavaScript</div>
            <div className="floating-card">Python</div>
            <div className="floating-card">Node.js</div>
            <div className="floating-card">MongoDB</div>
            <div className="floating-card">AWS</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hi! I'm a passionate computer science student with a love for creating 
                digital experiences that make a difference. My journey in tech began with 
                curiosity and has evolved into a deep passion for full-stack development, 
                data science, and emerging technologies.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the latest 
                industry trends. As an aspiring intern, I'm excited to contribute to 
                meaningful projects while growing my skills in a professional environment.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎓</span>
                  <span>Computer Science Student</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💻</span>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🌟</span>
                  <span>Tech Enthusiast</span>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stats-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">{achievement.icon}</div>
                    <div className="stat-value">{achievement.value}</div>
                    <div className="stat-title">{achievement.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="section featured-section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="featured-grid">
            {featuredContent.map((item) => (
              <div key={item.id} className="featured-card">
                <div className="featured-image">{item.image}</div>
                <div className="featured-category">{item.category}</div>
                <h3 className="featured-title">{item.title}</h3>
                <p className="featured-description">{item.description}</p>
                <div className="featured-overlay">
                  <Link to="/skills-projects" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>
              I'm always excited to take on new challenges and collaborate on 
              interesting projects. Let's create something amazing together!
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Start a Conversation
              </Link>
              <Link to="/experiences" className="btn btn-secondary btn-large">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
