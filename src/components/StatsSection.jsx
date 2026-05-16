import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { number: "5+",   label: "Years Experience" },
    { number: "100+", label: "Projects Shipped" },
    { number: "15+",  label: "International Clients" },
    { number: "4",    label: "Countries Served" },
  ];

  return (
    <section className="stats-section-wrapper animate-section">
      <div className="stats-section">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
