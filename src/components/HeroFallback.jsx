import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const HeroFallback = () => {
  return (
    <section id="home" className="hero-immersive">
      {/* Lightweight Hero content without 3D canvas */}
      <div className="hero-overlay">
        <motion.div 
          className="hero-content-immersive"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="tag-icon">⚡</span>
            <span>Full Stack Engineer</span>
          </motion.div>

          <motion.h1
            className="hero-title-immersive"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build high-performance
            <br />
            <span className="gradient-text">web & AI-powered</span>
            <br />
            applications
          </motion.h1>
          
          <motion.p
            className="hero-subtitle-immersive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Transforming complex problems into elegant, scalable solutions.
            <br />
            Based in Lahore, building for the world.
          </motion.p>
          
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a 
              href="#projects" 
              className="cta-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
              <span className="cta-icon">→</span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="cta-secondary"
              whileHover={{ scale: 1.05, borderColor: "#00ffff" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Me</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-prompt"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="scroll-icon"></div>
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default HeroFallback