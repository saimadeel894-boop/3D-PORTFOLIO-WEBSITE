import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-heading"
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
            <h3>Senior Web & App Developer</h3>
            <p>
              I'm a senior developer with 5+ years and 100+ projects shipped for international clients across Germany, UAE, USA, and the UK. I build both web applications and cross-platform mobile apps — specializing in React Native with Expo for iOS and Android.
            </p>
            <p>
              I specialize in high-performance <strong>Web &amp; Mobile App</strong> systems — from React and Next.js on the web to React Native on mobile, and AI-powered SaaS platforms.
            </p>
            <p>
              Certified Senior Developer by <span style={{ color: '#00ff80', fontWeight: 'bold' }}>micro1</span> — the AI hiring platform trusted by OpenAI and Anthropic.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>5+ Years</h4>
                <p>Professional Experience</p>
              </div>
              <div className="stat">
                <h4>100+ Projects</h4>
                <p>Successfully Delivered</p>
              </div>
              <div className="stat">
                <h4>Global</h4>
                <p>Client Base</p>
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
            <div className="profile-image-container">
              <img src="/profile.jpg" alt="Saim Adeel - Senior Web & App Developer" className="profile-image" />
              <div className="profile-glow"></div>
            </div>

            <div className="glass-panel">
              <div className="strength-icon">
                <div className="icon-circle">
                  <span className="icon" role="img" aria-label="lightning bolt">⚡</span>
                </div>
                <h4>Web Development</h4>
                <p>React, Next.js, scalable systems</p>
              </div>
              <div className="strength-icon">
                <div className="icon-circle">
                  <span className="icon" role="img" aria-label="mobile phone">📱</span>
                </div>
                <h4>Mobile Apps</h4>
                <p>React Native · iOS &amp; Android · Expo</p>
              </div>
              <div className="strength-icon">
                <div className="icon-circle">
                  <span className="icon" role="img" aria-label="robot">🤖</span>
                </div>
                <h4>AI Integration</h4>
                <p>SaaS &amp; automation tools</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About