import React from 'react';
import { Shield, Zap, Moon, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  0: <Zap size={28} />,
  1: <Shield size={28} />,
  2: <Activity size={28} />,
  3: <Moon size={28} />
};

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="features-section py-24 bg-black-20" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">{t.features.title}</h2>
          <p className="section-subtitle">{t.features.subtitle}</p>
        </div>

        <div className="features-grid">
          {t.features.items.map((feature, idx) => (
            <div key={idx} className="glass-panel feature-item-card">
              <div className="feature-item-icon">
                {iconMap[idx]}
              </div>
              <div className="feature-item-text">
                <h3 className="card-title text-white mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
