import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Location",
      value: "San Francisco, CA",
      link: null
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile"
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/yourusername",
      color: "#333"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/yourusername",
      color: "#1DA1F2"
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "https://instagram.com/yourusername",
      color: "#E4405F"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/yourprofile",
      color: "#0077B5"
    }
  ]

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Ready to collaborate? Let's discuss opportunities and create something amazing together
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2 className="form-title">Send me a message</h2>
                <p className="form-subtitle">
                  I'm always excited to hear about new opportunities and interesting projects
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span>→</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <span className="success-icon">✅</span>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="contact-info-section">
              {/* Contact Information */}
              <div className="contact-info">
                <h3 className="info-title">Contact Information</h3>
                <div className="info-list">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="info-item">
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

              {/* Social Links */}
              <div className="social-section">
                <h3 className="social-title">Follow Me</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="availability">
                <div className="status-indicator">
                  <div className="status-dot available"></div>
                  <span className="status-text">Available for opportunities</span>
                </div>
                <p className="availability-note">
                  Currently looking for internship opportunities and interesting projects to work on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
