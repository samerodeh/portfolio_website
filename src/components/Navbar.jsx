import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const links = [['Work', '#projects'], ['Experience', '#experience'], ['About', '#about']]

/* Downloadable resume (PDF) served from /public → available at the site root */
const RESUME_URL = '/Samer_Odeh_Resume.pdf'
const RESUME_FILENAME = 'Samer_Odeh_Resume.pdf'

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="nav-inner">
      {/* ===== Top-left cluster: logo + resume download ===== */}
      <div className="nav-left">
        <a className="nav-logo" href="/#top"><span className="logo-mark">SO</span><span>Samer Odeh<span className="logo-period">.</span></span></a>
        <a className="nav-resume" href={RESUME_URL} download={RESUME_FILENAME} title="Download my resume (PDF)">
          <DownloadIcon />
          <span>Download Resume</span>
        </a>
      </div>
      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-resume nav-resume-mobile" href={RESUME_URL} download={RESUME_FILENAME} onClick={() => setMenuOpen(false)}>
          <span className="nav-resume-row"><DownloadIcon />Download Resume</span>
          <span aria-hidden="true">↓</span>
        </a>
        <a className="nav-contact" href="mailto:samerodeh.dev@gmail.com" onClick={() => setMenuOpen(false)}>Let's talk <span aria-hidden="true">↗</span></a>
      </nav>
      <motion.button className="nav-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} whileTap={{ scale: 0.94 }}>
        <span /><span />
      </motion.button>
    </div>
  </header>
}
