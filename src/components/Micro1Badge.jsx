import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './Micro1Badge.css';

const Micro1Badge = () => {
  return (
    <section id="certification" className="micro1-section">
      <div className="container">
        <motion.div 
          className="micro1-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="micro1-icon-container">
            <FaCheckCircle className="micro1-check-icon" />
          </div>
          <div className="micro1-content">
            <h3 className="micro1-title">Certified by micro1 as Senior Full Stack Web & App Developer</h3>
            <p className="micro1-subtext">micro1 works with Silicon Valley companies including OpenAI and Anthropic</p>
            <span className="micro1-date">April 7, 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Micro1Badge;
