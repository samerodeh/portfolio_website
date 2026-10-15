import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const links = [['Work', '#projects'], ['Experience', '#experience'], ['About', '#about']]

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
      <a className="nav-logo" href="/#top" aria-label="Samer Odeh, back to top"><span className="logo-mark">SO</span><span>Samer Odeh<span className="logo-period">.</span></span></a>
      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="mailto:samerodeh.dev@gmail.com" onClick={() => setMenuOpen(false)}>Let's talk <span aria-hidden="true">↗</span></a>
      </nav>
      <motion.button className="nav-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} whileTap={{ scale: 0.94 }}>
        <span /><span />
      </motion.button>
    </div>
  </header>
}
