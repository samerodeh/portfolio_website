import React from 'react'
import './Experiences.css'

const Experiences = () => {
  const experiences = [
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
    },
    {
      id: 2,
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
      id: 3,
      title: "Robotics Team Member",
      company: "Space Concordia – Robotics Division",
      location: "Montreal, QC, Canada",
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
      id: 4,
      title: "Team Member – Formula Student Competition",
      company: "IEEE Concordia",
      location: "Montreal, QC, Canada",
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

  return (
    <div className="experiences">
      {/* Hero Section */}
      <section className="experiences-hero">
        <div className="container">
          <h1 className="page-title">Experience</h1>
          <p className="page-subtitle">
            My journey in software engineering, embedded systems, and computer engineering
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
