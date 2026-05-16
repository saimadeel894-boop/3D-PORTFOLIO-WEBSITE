import React from 'react';
import './Micro1Badge.css';

const Micro1Badge = () => {
  return (
    <section id="certification" className="certification-section animate-section">
      <div className="cert-card">
        <div className="cert-left">
          <div className="cert-verified-badge">
            ✓ VERIFIED
          </div>
          <h3>micro1 Certified</h3>
          <p className="cert-title">Senior Full Stack Web & App Developer</p>
          <p className="cert-date">Issued April 7, 2026</p>
          <p className="cert-desc">
            micro1 is an AI hiring platform trusted by OpenAI and Anthropic.
            Passing their AI-proctored technical interview places you in the
            top tier of global developers.
          </p>
        </div>
        <div className="cert-right">
          <img src="/micro.png" alt="Micro1 Certification" className="cert-logo" />
        </div>
      </div>
    </section>
  );
};

export default Micro1Badge;
