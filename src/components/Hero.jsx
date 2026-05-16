import React, { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
const Globe3D = React.lazy(() => import('./Globe3D'))
import './Hero.css'

const HeroSubtitle = () => {
  return (
    <div className="hero-subtitle">
      React Developer · Next.js · Mobile Apps · AI SaaS · Full Stack
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
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span>⚡ High-Value Developer</span>
          </motion.div>

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{ borderColor: 'rgba(52, 211, 153, 0.3)', background: 'rgba(52, 211, 153, 0.06)' }}
          >
            <span className="availability-dot"></span>
            <span>Available for remote work</span>
          </motion.div>

          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hey, I'm <span className="name-highlight">Saim</span>. I build Web & App products that <span className="action-highlight">work in production.</span>
          </motion.h1>

          <HeroSubtitle />

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work →</span>
            </motion.a>
            <motion.a
              href="/Saim_Adeel_CV.pdf"
              download="Saim_Adeel_CV.pdf"
              target="_blank"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download CV ↓</span>
            </motion.a>
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
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="scroll-icon"></div>
        </motion.div>
        <span>Explore the experience</span>
      </motion.div>
    </section>
  )
}

export default Hero
