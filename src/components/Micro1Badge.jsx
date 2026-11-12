import React from 'react';
import { FaAward, FaTrophy, FaCheckCircle } from 'react-icons/fa';
import './Micro1Badge.css';

const Micro1Badge = () => {
  return (
    <section id="certification" className="certification-section animate-section">
      <div className="container">
        <h2 className="section-heading">Honors &amp; Technical Credentials</h2>
        
        <div className="credentials-grid">
          {/* Top Honor: 1st Place Winner */}
          <div className="cert-card cert-card-olympiad">
            <div className="cert-left">
              <div className="cert-verified-badge gold-badge">
                <FaTrophy /> 1ST PLACE WINNER (2026)
              </div>
              <h3>International Computer Science Olympiad</h3>
              <p className="cert-title gold-title">1st Place Winner — Algorithms, Systems &amp; Complexity</p>
              <p className="cert-date">Awarded 2026 · Global Competition</p>
              <p className="cert-desc">
                Achieved 1st place distinction among top global competitive programmers and software engineers. Evaluated across advanced graph algorithms, dynamic programming, distributed concurrency, and sub-millisecond execution optimization.
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
                <span className="trophy-text">ICSO 2026</span>
              </div>
            </div>
          </div>

          {/* Micro1 AI-Vetted Badge */}
          <div className="cert-card cert-card-micro1">
            <div className="cert-left">
              <div className="cert-verified-badge">
                <FaCheckCircle /> ✓ AI-VETTED TALENT
              </div>
              <h3>micro1 AI-Vetted Full-Stack Candidate</h3>
              <p className="cert-title">Full-Stack Web &amp; Mobile Software Engineer</p>
              <p className="cert-date">AI-Proctored Technical Evaluation &amp; Live Code Defense</p>
              <p className="cert-desc">
                micro1 is the premier technical vetting platform trusted by OpenAI, Anthropic, and hyper-growth engineering teams. Passing their AI-proctored technical evaluations and live coding defenses places candidates in the top global percentile for production execution.
              </p>
              <div className="cert-tags">
                <span className="cert-tag">Full-Stack Web</span>
                <span className="cert-tag">React / Next.js / Mobile</span>
                <span className="cert-tag">Python &amp; Node Systems</span>
                <span className="cert-tag">AI Model Evaluation</span>
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
