import React, { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
const Globe3D = React.lazy(() => import('./Globe3D'))
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaAward, FaCheckCircle } from 'react-icons/fa'
import './Hero.css'

const HeroSubtitle = () => {
  return (
    <div className="hero-subtitle">
      Senior Full-Stack & Systems Engineer | AI Model Evaluation & SWE Benchmark Specialist
    </div>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-3d-scene">
        <Suspense fallback={null}>
          <Globe3D />
        </Suspense>
      </div>

      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top Honors Badge & Availability Pill */}
          <div className="hero-badges-wrapper">
            <motion.div
              className="hero-badge hero-badge-gold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              <span className="gold-medal-icon">🏆</span>
              <span className="gold-text">1st Place Gold Medalist — International Computer Science Olympiad (2026)</span>
            </motion.div>

            <motion.div
              className="hero-badge hero-badge-status"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 }}
            >
              <span className="availability-dot"></span>
              <span>Available for Elite AI Labs &amp; High-Impact Roles</span>
            </motion.div>
          </div>

          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hey, I'm <span className="name-highlight">Muhammad Saim Adeel</span>. I architect resilient systems &amp; <span className="action-highlight">evaluate frontier AI models.</span>
          </motion.h1>

          <HeroSubtitle />

          <motion.div
            className="hero-metrics-pill"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="hero-metric-item">
              <span className="metric-val">5+ Years</span>
              <span className="metric-lbl">Production Systems Architecture</span>
            </div>
            <div className="metric-separator" />
            <div className="hero-metric-item">
              <span className="metric-val">600+</span>
              <span className="metric-lbl">Production PR Code Reviews</span>
            </div>
            <div className="metric-separator" />
            <div className="hero-metric-item">
              <span className="metric-val">SWE-bench</span>
              <span className="metric-lbl">Deterministic Sandboxing &amp; Vetting</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Explore Technical Work →</span>
            </motion.a>
            <motion.a
              href="/Saim_Adeel_CV.pdf"
              download="Muhammad_Saim_Adeel_CV.pdf"
              target="_blank"
              className="btn-secondary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Download CV ↓</span>
            </motion.a>
            <motion.a
              href="https://wa.me/923090240140"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <FaWhatsapp className="btn-icon" />
              <span>Direct WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Quick social links */}
          <motion.div 
            className="hero-social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a href="https://github.com/saimadeel894-boop" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub /> <span>github.com/saimadeel894-boop</span>
            </a>
            <a href="https://linkedin.com/in/saim-adeel-890a67376" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin /> <span>linkedin.com/in/saim-adeel</span>
            </a>
            <a href="mailto:saimadeel894@gmail.com" title="Email">
              <FaEnvelope /> <span>saimadeel894@gmail.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-prompt"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="scroll-icon"></div>
        </motion.div>
        <span>Explore Technical Profile</span>
      </motion.div>
    </section>
  )
}

export default Hero
