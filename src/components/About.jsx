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
              <FaMapMarkerAlt /> <span>Lahore, Pakistan · Available for Global Remote (US/EU Timezones)</span>
            </div>

            <h3>Senior Full-Stack &amp; Systems Engineer</h3>
            <p className="about-lead">
              Specialized in <strong>AI Model Evaluation</strong>, <strong>SWE-bench Task Creation</strong>, and high-performance full-stack architectures.
            </p>
            
            <p>
              With over <strong>5+ years of production engineering</strong> experience, I bridge the gap between complex systems architecture and frontier AI evaluation. I construct deterministic Docker execution sandboxes, comprehensive automated test suites (pytest/unittest), and ground-truth benchmark harnesses that rigorously stress-test state-of-the-art coding models.
            </p>

            <p>
              My standard for engineering rigor is backed by having conducted <strong>600+ production Pull Request code reviews</strong>, enforcing zero-regression principles, clean architectural boundaries, and low-latency performance.
            </p>

            <div className="honors-callout-card">
              <div className="honors-callout-badge">
                <FaAward className="gold-icon" />
                <span>Premier Achievement</span>
              </div>
              <h4>🏆 1st Place Gold Medalist</h4>
              <p>International Computer Science Olympiad (2026) — Proven mastery in competitive algorithms, computational complexity, and systems reasoning under extreme time pressure.</p>
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
              <img src="/profile.jpg" alt="Muhammad Saim Adeel - Senior Full-Stack & Systems Engineer" className="profile-image" />
              <div className="profile-glow"></div>
            </div>

            <div className="glass-panel">
              <div className="strength-icon">
                <div className="icon-circle icon-gold">
                  <FaAward />
                </div>
                <div className="strength-text">
                  <h4>ICSO Gold Medalist</h4>
                  <p>1st Place worldwide · Algorithms &amp; Complexity</p>
                </div>
              </div>

              <div className="strength-icon">
                <div className="icon-circle icon-ai">
                  <FaRobot />
                </div>
                <div className="strength-text">
                  <h4>AI &amp; SWE-bench Evaluation</h4>
                  <p>Docker sandboxes, ground truth vetting, pytest</p>
                </div>
              </div>

              <div className="strength-icon">
                <div className="icon-circle icon-sys">
                  <FaServer />
                </div>
                <div className="strength-text">
                  <h4>Production Full-Stack &amp; 3D</h4>
                  <p>React, Next.js, Three.js, FastAPI, Node, Go</p>
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