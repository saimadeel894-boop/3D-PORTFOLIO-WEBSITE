import { motion } from 'framer-motion'
import { FaAward, FaRobot, FaServer, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa'
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
          Engineering Profile
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-location-pill">
              <FaMapMarkerAlt /> <span>Global Remote · Available Worldwide (US/EU/Global Timezones)</span>
            </div>

            <h3>Full-Stack &amp; Systems Software Engineer</h3>
            <p className="about-lead">
              Specialized in scalable <strong>Web &amp; Mobile App Development</strong> and frontier <strong>AI Training / Model Evaluation</strong>.
            </p>
            
            <p>
              With over <strong>5+ years of production engineering experience</strong>, I specialize in building end-to-end production websites, enterprise SaaS platforms, and cross-platform mobile applications using <strong>Next.js, React, React Native, TypeScript, Node.js, Python, and PostgreSQL</strong>. From 60 FPS WebGL interfaces to high-concurrency microservices, I architect resilient, conversion-focused software built for scale.
            </p>

            <p>
              Complementing full-stack development, I specialize in <strong>AI Training &amp; Model Evaluation</strong>—including Reinforcement Learning from Human Feedback (RLHF), Supervised Fine-Tuning (SFT), automated PyTest/Jest test suites, and deterministic Docker execution sandboxes for benchmark suites like SWE-bench. My engineering rigor is proven through having conducted <strong>600+ production Pull Request code reviews</strong>, ensuring clean architectural boundaries, low latency, and uncompromising code quality.
            </p>

            <div className="honors-callout-card">
              <div className="honors-callout-badge">
                <FaAward className="gold-icon" />
                <span>Premier Achievement</span>
              </div>
              <h4>🏆 1st Place Winner</h4>
              <p>International Computer Science Olympiad (2026) — Proven mastery in competitive algorithms, computational complexity, and distributed systems reasoning under rigorous international evaluation.</p>
            </div>

            <p className="cert-note">
              Certified Senior Full-Stack Developer by <strong style={{ color: '#00ff80' }}>micro1</strong> — vetted through AI-proctored technical evaluations trusted by the OpenAI and Anthropic hiring ecosystems.
            </p>
          </motion.div>

          <motion.div
            className="about-3d-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="profile-image-container">
              <img src="/profile.jpg" alt="Muhammad Saim Adeel - Full-Stack Software Engineer" className="profile-image" />
              <div className="profile-glow"></div>
            </div>

            <div className="glass-panel">
              <div className="strength-icon">
                <div className="icon-circle icon-gold">
                  <FaAward />
                </div>
                <div className="strength-text">
                  <h4>ICSO 1st Place Winner</h4>
                  <p>1st Place worldwide · Algorithms &amp; Complexity</p>
                </div>
              </div>

              <div className="strength-icon">
                <div className="icon-circle icon-sys">
                  <FaServer />
                </div>
                <div className="strength-text">
                  <h4>Web &amp; Mobile Development</h4>
                  <p>Next.js, React, React Native, Node, Python, PostgreSQL</p>
                </div>
              </div>

              <div className="strength-icon">
                <div className="icon-circle icon-ai">
                  <FaRobot />
                </div>
                <div className="strength-text">
                  <h4>AI Training &amp; Model Evaluation</h4>
                  <p>RLHF, SFT, SWE-bench sandboxes, automated test suites</p>
                </div>
              </div>

              <div className="strength-icon">
                <div className="icon-circle icon-review">
                  <FaShieldAlt />
                </div>
                <div className="strength-text">
                  <h4>Code Quality &amp; PR Auditing</h4>
                  <p>600+ production reviews · Resilient systems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About