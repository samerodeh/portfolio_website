import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  


  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="gradient-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">Samer Odeh</h1>
          <p className="hero-subtitle">
            Computer Engineering Student | Developer | Problem Solver
          </p>
          <p className="hero-description">
            Building cool stuff with code. Currently studying Computer Engineering at Concordia University 
            and always working on something interesting.
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
                Hey there! I'm Samer, a Computer Engineering student at Concordia University in Montreal. 
                I got into coding because I love solving puzzles and building things that actually work. 
                Started with some basic projects and now I'm diving deep into web development, AI, and 
                whatever catches my interest.
              </p>
              <p>
                I'm in the co-op program, so I'm always looking for opportunities to apply what I'm learning 
                in real-world projects. Whether it's building web apps, working on machine learning models, 
                or just figuring out how to make code run faster, I'm always up for a challenge.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎓</span>
                  <span>Computer Engineering Student</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💻</span>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🌟</span>
                  <span>Always Learning</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Connect!</h2>
            <p>
              Have an interesting project or just want to chat about code? 
              I'm always down to talk tech or collaborate on something cool.
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
