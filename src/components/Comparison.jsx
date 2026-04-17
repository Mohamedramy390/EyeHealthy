import React from 'react';
import { Eye, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Comparison() {
  const { t } = useLanguage();

  const iconMap = {
    blue: <Brain size={24} />,
    green: <Eye size={24} />
  };

  const emojiMap = {
    0: '🔹',
    1: '👁️',
    2: '🧠'
  };

  return (
    <section className="comparison-section" id="science">
      <div className="container">
        <div className="section-header animate-fade-in text-center mb-16">
          <h2 className="section-title mb-4">
            {t.comparison.titlePrefix}
            <span className="text-gradient-green">{t.comparison.green}</span>
            {t.comparison.and}
            <span className="text-gradient-blue">{t.comparison.blue}</span>
          </h2>
          <p className="section-subtitle">{t.comparison.subtitle}</p>
        </div>

        <div className="features-grid">
          {/* Blue Light Panel */}
          <div className="glass-panel feature-card blue-card">
            <div className="card-top-accent bg-blue"></div>
            <div className="card-header mb-6">
              <div className="icon-wrapper blue-icon">
                {iconMap.blue}
              </div>
              <h3 className="card-title text-blue">{t.comparison.bluePanel.title}</h3>
            </div>
            
            <ul className="feature-list">
              {t.comparison.bluePanel.items.map((item, idx) => (
                <li key={idx}>
                  <span className="emoji-icon">{emojiMap[idx]}</span>
                  <div className="feature-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Green Light Panel */}
          <div className="glass-panel feature-card green-card">
            <div className="card-top-accent bg-green"></div>
            <div className="card-header mb-6">
              <div className="icon-wrapper green-icon">
                {iconMap.green}
              </div>
              <h3 className="card-title text-green">{t.comparison.greenPanel.title}</h3>
            </div>
            
            <ul className="feature-list">
              {t.comparison.greenPanel.items.map((item, idx) => (
                <li key={idx}>
                  <span className="emoji-icon">{emojiMap[idx]}</span>
                  <div className="feature-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
