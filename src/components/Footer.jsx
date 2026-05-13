import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-bracket">[</span> Saim <span className="logo-bracket">]</span>
          </div>
          <p className="footer-tagline">Building the future of Web & App development.</p>
          
          <div className="footer-socials">
            <a href="https://github.com/saimadeel894-boop" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/saim-adeel-890a67376" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaLinkedin /></a>
            <a href="https://www.instagram.com/deepwebvisions?igsh=eXA3Nnh1NHM1ODJp" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaInstagram /></a>
            <a href="https://wa.me/923091050789" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaWhatsapp /></a>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Saim Adeel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
