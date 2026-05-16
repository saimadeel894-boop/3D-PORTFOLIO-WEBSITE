import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">SAIM<span>.</span></div>
      <p className="footer-tagline">Senior Full-Stack & Mobile Developer</p>
      <div className="footer-links">
        <a href="https://github.com/saimadeel894-boop" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/saim-adeel-890a67376" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://wa.me/923091050789" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="mailto:saimadeel894@gmail.com">Email</a>
      </div>
      <p className="footer-copy">© 2026 Saim Adeel. All rights reserved.</p>
    </footer>
  )
}

export default Footer
