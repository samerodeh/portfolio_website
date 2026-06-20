import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TiltCard from '../components/TiltCard'
import './Contact.css'

const EASE = [0.22, 1, 0.36, 1]
const up = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.6, ease: EASE } },
}
const container = (stagger = 0.22, delay = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
})
const VP = { once: true, amount: 0.15 }

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
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
  }

  const contactInfo = [
    { icon: "📧", title: "Email", value: "samer.odeh592@outlook.com", link: "mailto:samer.odeh592@outlook.com" },
    { icon: "📱", title: "Phone", value: "+1 (514) 246-4894", link: "tel:+15142464894" },
    { icon: "📍", title: "Location", value: "Montreal, QC, Canada", link: null },
    { icon: "💼", title: "LinkedIn", value: "linkedin.com/in/samer-odeh-1265b1343/", link: "https://www.linkedin.com/in/samer-odeh-1265b1343/" }
  ]

  return (
    <div className="contact">
      {/* Hero Section */}
      <motion.section
        className="contact-hero"
        initial="hidden"
        animate="show"
        variants={container(0.22, 0.08)}
      >
        <div className="container">
          <motion.h1 className="page-title" variants={up}>Get In Touch</motion.h1>
          <motion.p className="page-subtitle" variants={up}>
            Ready to collaborate? Let's discuss opportunities and create something amazing together
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <motion.div
            className="contact-content"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={container(0.22, 0.08)}
          >
            {/* Contact Form */}
            <TiltCard className="contact-form-section" variants={up}>
              <div className="form-header">
                <h2 className="form-title">Drop me a line</h2>
                <p className="form-subtitle">
                  Got a cool project idea or just want to chat? I'd love to hear from you.
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
                      placeholder="samer.odeh592@outlook.com"
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
                  />
                </div>

                <button
                  type="submit"
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner" />
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
            </TiltCard>

            {/* Contact Info */}
            <TiltCard className="contact-info-section" variants={up}>
              <div className="contact-info">
                <h3 className="info-title">Contact Information</h3>
                <div className="info-list">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="info-item">
                      <span className="info-icon">{info.icon}</span>
                      <div className="info-content">
                        <span className="info-label">{info.title}</span>
                        {info.link ? (
                          <a href={info.link} className="info-value link">{info.value}</a>
                        ) : (
                          <span className="info-value">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
