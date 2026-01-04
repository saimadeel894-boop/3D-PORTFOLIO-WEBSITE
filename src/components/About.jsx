import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Problem Solver & Performance Driver</h3>
            <p>
              I'm a frontend and full-stack engineer who builds products that matter.
              My approach combines technical excellence with business-focused thinking,
              ensuring every line of code contributes to real-world impact.
            </p>
            <p>
              With expertise in modern web technologies and AI integration,
              I create experiences that not only look stunning but drive results.
            </p>
            <p>
              I specialize in performance-driven development, turning complex requirements
              into elegant, scalable solutions that stand the test of time.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>5+ Years</h4>
                <p>Professional Experience</p>
              </div>
              <div className="stat">
                <h4>50+ Projects</h4>
                <p>Successfully Delivered</p>
              </div>
              <div className="stat">
                <h4>100% Client</h4>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-3d-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-panel">
              <div className="strength-icon">
                <div className="icon-circle">
                  <span className="icon">⚡</span>
                </div>
                <h4>Frontend Engineering</h4>
                <p>Modern React, performance optimization</p>
              </div>
              <div className="strength-icon">
                <div className="icon-circle">
                  <span className="icon">🤖</span>
                </div>
                <h4>AI Integration</h4>
                <p>Smart systems and automation</p>
              </div>
              <div className="strength-icon">
                <div className="icon-circle">
                  <span className="icon">🎨</span>
                </div>
                <h4>UI Excellence</h4>
                <p>Cutting-edge design systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About