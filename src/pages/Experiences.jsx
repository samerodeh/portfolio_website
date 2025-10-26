import React from 'react'
import './Experiences.css'

const Experiences = () => {
  const experiences = [
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
    },
    {
      id: 2,
      title: "Software Developer & Electrical Engineer",
      company: "Space Concordia - Robotics Division",
      location: "Montreal, QC, Canada",
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
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Montreal, QC, Canada",
      period: "2022 - Present",
      description: "Working on various web development projects and personal applications to build experience and skills.",
      achievements: [
        "Developed multiple web applications using React",
        "Worked on full-stack projects and API development",
        "Gained experience with modern web technologies"
      ],
      skills: ["React", "MongoDB", "JavaScript", "HTML/CSS"],
      status: "current"
    }
  ]

  return (
    <div className="experiences">
      {/* Hero Section */}
      <section className="experiences-hero">
        <div className="container">
          <h1 className="page-title">Experience</h1>
          <p className="page-subtitle">
            My journey in computer engineering and software development
          </p>
        </div>
      </section>

      {/* Experiences List */}
      <section className="section">
        <div className="container">
          <div className="experiences-list">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="experience-item">
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
    </div>
  )
}

export default Experiences