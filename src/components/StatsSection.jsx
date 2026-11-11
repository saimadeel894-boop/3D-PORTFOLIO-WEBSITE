import React from 'react';
import { motion } from 'framer-motion';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { 
      number: "5+ Yrs",   
      label: "Production Systems", 
      detail: "Full-Stack Architecture & 60 FPS WebGL Systems" 
    },
    { 
      number: "600+", 
      label: "Code Reviews", 
      detail: "Production Pull Request Code Reviews Conducted" 
    },
    { 
      number: "1st 🏆",  
      label: "Olympiad Gold", 
      detail: "Intl Computer Science Olympiad (2026)" 
    },
    { 
      number: "SWE-bench",    
      label: "AI Evaluation", 
      detail: "Deterministic Sandboxes & Model Vetting" 
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
