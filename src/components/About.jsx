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
              I specialize in <strong>clean, scalable frontend architecture</strong> and <strong>performance-driven development</strong>.
            </p>
            <p>
              My approach combines technical excellence with a problem-solving mindset, ensuring every application is built for speed, stability, and growth.
            </p>
            <p>
              Whether it's complex AI integrations or pixel-perfect UI/UX, I deliver solutions that drive real business value.
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
                  <span className="icon" role="img" aria-label="lightning bolt">⚡</span>
                </div>
                <h4>Frontend Engineering</h4>
                <p>React, scalable systems</p>
              </div>
              <div className="strength-icon">
                <div className="icon-circle">
                  <span className="icon" role="img" aria-label="robot">🤖</span>
                </div>
                <h4>AI Integration</h4>
                <p>SaaS & Automation tools</p>
              </div>
              <div className="strength-icon">
                <div className="icon-circle">
                  <span className="icon" role="img" aria-label="palette">🎨</span>
                </div>
                <h4>UI Design</h4>
                <p>Modern, immersive interfaces</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About