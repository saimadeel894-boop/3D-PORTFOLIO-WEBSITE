import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    message: ''
  })
  const [isSent, setIsSent] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open user's default email client pre-filled or trigger notification
    const subject = encodeURIComponent(`Engineering Inquiries from ${formData.name || 'Collaborator'} (${formData.roleOrCompany || 'Tech Team'})`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany/Role: ${formData.roleOrCompany}\n\nMessage:\n${formData.message}`)
    window.open(`mailto:saimadeel894@gmail.com?subject=${subject}&body=${body}`, '_blank')
    
    setIsSent(true)
    setTimeout(() => setIsSent(false), 4000)
    setFormData({ name: '', email: '', roleOrCompany: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Build Resilient Systems Together
        </motion.h2>

        <p className="contact-lead-subtitle">
          Open for high-impact Web &amp; Mobile development, Full-Stack engineering, and AI Model Evaluation roles. Available for Full-Time, Contract &amp; Project-Based Work.
        </p>

        <div className="contact-content">
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name / Team"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Work Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="roleOrCompany"
                  placeholder="Company / AI Lab / Project Name"
                  value={formData.roleOrCompany}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Project scope, AI evaluation harness requirements, or architectural challenge..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className={`btn-primary ${isSent ? 'success' : ''}`}
                whileHover={!isSent ? { scale: 1.03 } : {}}
                whileTap={!isSent ? { scale: 0.97 } : {}}
                disabled={isSent}
                style={isSent ? { background: '#10b981', color: '#000', borderColor: '#10b981' } : { padding: '16px 32px', width: '100%' }}
              >
                {isSent ? 'Dispatching Inquiries... ✓' : (
                  <>
                    <FaPaperPlane style={{ marginRight: '8px' }} />
                    <span>Send Engineering Inquiry</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="contact-details-box">
              <div className="contact-detail-row">
                <div className="detail-icon"><FaMapMarkerAlt /></div>
                <div>
                  <div className="detail-title">Location</div>
                  <div className="detail-val">Global Remote (US/EU/Global Timezones)</div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon"><FaPhoneAlt /></div>
                <div>
                  <div className="detail-title">Phone &amp; WhatsApp</div>
                  <div className="detail-val">+92 309 0240140</div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon"><FaEnvelope /></div>
                <div>
                  <div className="detail-title">Direct Email</div>
                  <div className="detail-val">saimadeel894@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="contact-icons">
              <motion.a
                href="mailto:saimadeel894@gmail.com"
                className="contact-icon"
                title="Send Email"
                whileHover={{ scale: 1.1, color: '#00ffff' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
                <span>Email</span>
              </motion.a>
              <motion.a
                href="https://wa.me/923090240140"
                className="contact-icon whatsapp-bounce"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Direct"
                whileHover={{ scale: 1.1, color: '#25D366' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/saim-adeel-890a67376"
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                whileHover={{ scale: 1.1, color: '#0077b5' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/saimadeel894-boop"
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repositories"
                whileHover={{ scale: 1.1, color: '#00e5ff' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
                <span>GitHub</span>
              </motion.a>
            </div>

            <div className="contact-message">
              <p>
                Whether you need production <strong>Web &amp; Mobile applications</strong> (Next.js, React, React Native), high-throughput backend APIs, or frontier <strong>AI model evaluation suites</strong>, feel free to reach out. I respond within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
