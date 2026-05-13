import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Handle form submission
    setIsSent(true)
    setTimeout(() => setIsSent(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Build Something That Matters
        </motion.h2>

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
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className={`btn-primary ${isSent ? 'success' : ''}`}
                whileHover={!isSent ? { scale: 1.05 } : {}}
                whileTap={!isSent ? { scale: 0.95 } : {}}
                disabled={isSent}
                style={isSent ? { background: '#00ff80', color: '#000', borderColor: '#00ff80' } : { padding: '16px 32px', width: '100%' }}
              >
                {isSent ? 'Message Sent! ✓' : 'Send Message'}
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
            <div className="contact-icons">
              <motion.a
                href="mailto:saimadeel894@gmail.com"
                className="contact-icon"
                whileHover={{ scale: 1.1, color: '#00ffff' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
                <span>Email</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/saim-adeel-890a67376"
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
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
                whileHover={{ scale: 1.1, color: '#ff00ff' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/deepwebvisions?igsh=eXA3Nnh1NHM1ODJp"
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#E1306C' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
                <span>Instagram</span>
              </motion.a>
              <motion.a
                href="https://wa.me/923091050789"
                className="contact-icon whatsapp-bounce"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#25D366' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </motion.a>
            </div>

            <div className="contact-message">
              <p>Ready to bring your vision to life? Let's discuss your next <strong>Web or Mobile App</strong> project and create something extraordinary together.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact