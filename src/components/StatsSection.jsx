import React from 'react';
import { motion } from 'framer-motion';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { 
      number: "5+ Yrs",   
      label: "Full-Stack & Mobile", 
      detail: "Production Web, Mobile & SaaS Architectures" 
    },
    { 
      number: "50+", 
      label: "Shipped Projects", 
      detail: "Full-Stack Web, Cross-Platform Apps & APIs" 
    },
    { 
      number: "1st 🏆",  
      label: "Olympiad Winner", 
      detail: "ICSO 1st Place Winner (2026)" 
    },
    { 
      number: "600+",    
      label: "PR Code Reviews", 
      detail: "AI Model Vetting & Deterministic Sandboxes" 
    },
  ];

  return (
    <section className="stats-section-wrapper animate-section">
      <div className="stats-section">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            className="stat-card"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-detail">{stat.detail}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
