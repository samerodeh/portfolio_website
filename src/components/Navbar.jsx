import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleResumeClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#experience')
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={handleBrandClick}>
          <span className="brand-text">Samer Odeh</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <a
            href="/#experience"
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={handleResumeClick}
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a
            href="/#experience"
            className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={handleResumeClick}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
