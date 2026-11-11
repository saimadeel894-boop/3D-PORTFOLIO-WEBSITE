import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaAward } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">MUHAMMAD SAIM ADEEL<span>.</span></div>
      <p className="footer-tagline">Senior Full-Stack &amp; Systems Engineer | AI Model Evaluation &amp; SWE Benchmark Specialist</p>
      
      <div className="footer-honor-pill">
        <FaAward /> 1st Place Gold Medalist — International Computer Science Olympiad (2026)
      </div>

      <div className="footer-links">
        <a href="https://github.com/saimadeel894-boop" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/saim-adeel-890a67376" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://wa.me/923090240140" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> WhatsApp (+92 309 0240140)
        </a>
        <a href="mailto:saimadeel894@gmail.com">
          <FaEnvelope /> Email
        </a>
      </div>

      <p className="footer-copy">© 2026 Muhammad Saim Adeel. Lahore, Pakistan · High-Impact Systems Architecture.</p>
    </footer>
  )
}

export default Footer
