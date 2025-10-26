import React from 'react'
import './SkillsProjects.css'

const SkillsProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Face Detection App",
      description: "Built a face detection app using Python and OpenCV. It can detect faces in images and videos, plus some basic recognition features.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "Jupyter Notebook"],
      features: [
        "Detects faces in photos and videos",
        "Works with webcam input",
        "Simple GUI interface",
        "Can identify multiple faces at once",
        "Built with Python and OpenCV"
      ],
      github: "https://github.com/samerodeh/face_detection_app",
      status: "completed"
    },
    {
      id: 2,
      title: "Autonomous Vacuum Robot",
      description: "Developed an autonomous vacuum cleaning robot using ROS2, SLAM, Nav2, and Gazebo simulation. The robot can navigate autonomously, map environments, and perform cleaning tasks.",
      technologies: ["ROS2", "SLAM", "Nav2", "Python", "C++", "Gazebo", "Linux", "Robotics"],
      features: [
        "Autonomous navigation using Nav2",
        "Simultaneous Localization and Mapping (SLAM)",
        "Gazebo simulation environment",
        "Real-time path planning and obstacle avoidance",
        "Modular ROS2 architecture with Python and C++ nodes"
      ],
      github: "https://github.com/samerodeh/autonomous_vacuum",
      status: "completed"
    },
    {
      id: 3,
      title: "Hank's Cafe AI Chatbot",
      description: "Built a sophisticated AI-powered coffee shop chatbot with multi-agent architecture, featuring React Native mobile app, Python backend with specialized AI agents, and advanced recommendation system.",
      technologies: ["React Native", "Python", "OpenAI", "Pinecone", "Firebase", "RunPod", "Machine Learning", "RAG", "TypeScript"],
      features: [
        "Multi-agent AI system with 5 specialized agents",
        "React Native mobile app with real-time chat",
        "RAG (Retrieval-Augmented Generation) for context-aware responses",
        "Market basket analysis recommendation engine",
        "Vector database integration with Pinecone",
        "Cloud deployment with RunPod serverless infrastructure"
      ],
      github: "https://github.com/samerodeh/hanks_cafe_chatbot",
      status: "completed"
    }
  ]

  return (
    <div className="skills-projects">
      {/* Hero Section */}
      <section className="skills-hero">
        <div className="container">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            A collection of projects showcasing my development journey
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
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
    </div>
  )
}

export default SkillsProjects