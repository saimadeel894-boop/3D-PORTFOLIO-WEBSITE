import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let's Build Something That Matters
        </motion.h2>

        <div ref={ref} className="contact-content">
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
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
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
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
                href="https://github.com"
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
                href="https://linkedin.com"
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#ffff00' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </motion.a>
            </div>
            
            <div className="contact-message">
              <p>Ready to bring your vision to life? Let's discuss your next project and create something extraordinary together.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact