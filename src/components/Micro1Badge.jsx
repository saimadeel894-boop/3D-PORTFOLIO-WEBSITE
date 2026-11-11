import React from 'react';
import { FaAward, FaTrophy, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import './Micro1Badge.css';

const Micro1Badge = () => {
  return (
    <section id="certification" className="certification-section animate-section">
      <div className="container">
        <h2 className="section-heading">Honors &amp; Technical Credentials</h2>
        
        <div className="credentials-grid">
          {/* Top Honor: 1st Place Gold Medalist */}
          <div className="cert-card cert-card-olympiad">
            <div className="cert-left">
              <div className="cert-verified-badge gold-badge">
                <FaTrophy /> 1ST PLACE GOLD MEDALIST (2026)
              </div>
              <h3>International Computer Science Olympiad</h3>
              <p className="cert-title gold-title">World Champion — Algorithms, Systems &amp; Complexity</p>
              <p className="cert-date">Awarded 2026 · Global Competition</p>
              <p className="cert-desc">
                Achieved 1st place gold distinction among top global competitive programmers and systems architects. Evaluated across advanced graph algorithms, dynamic programming, distributed concurrency, and sub-millisecond execution optimization.
              </p>
              <div className="cert-tags">
                <span className="cert-tag">Algorithms</span>
                <span className="cert-tag">System Architecture</span>
                <span className="cert-tag">Complexity Analysis</span>
                <span className="cert-tag">Low-Latency Optimization</span>
              </div>
            </div>
            <div className="cert-right">
              <div className="gold-trophy-display">
                <div className="trophy-glow"></div>
                <span className="trophy-emoji">🏆</span>
                <span className="trophy-text">GOLD 2026</span>
              </div>
            </div>
          </div>

          {/* Micro1 Verified Badge */}
          <div className="cert-card cert-card-micro1">
            <div className="cert-left">
              <div className="cert-verified-badge">
                <FaCheckCircle /> ✓ VERIFIED SENIOR ENGINEER
              </div>
              <h3>micro1 Certified Senior Full-Stack</h3>
              <p className="cert-title">Senior Full Stack Web &amp; Systems Engineer</p>
              <p className="cert-date">Issued April 7, 2026 · Credential ID: M1-SR-7092</p>
              <p className="cert-desc">
                micro1 is the premier technical vetting platform trusted by OpenAI, Anthropic, and hyper-growth Silicon Valley startups. Passing their AI-proctored technical evaluations and live architecture defenses places candidates in the top global percentile.
              </p>
              <div className="cert-tags">
                <span className="cert-tag">Production Architecture</span>
                <span className="cert-tag">React / Next.js</span>
                <span className="cert-tag">Python &amp; Node Systems</span>
                <span className="cert-tag">600+ PR Audits</span>
              </div>
            </div>
            <div className="cert-right">
              <img src="/micro.png" alt="Micro1 Certification" className="cert-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Micro1Badge;
