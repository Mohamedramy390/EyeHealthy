import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import heroLamp from '../assets/hero-lamp.png';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-section" id="hero">
      <div className="glow-bg" style={{ top: '20%', right: '10%' }}></div>
      <div className="glow-bg-blue" style={{ bottom: '10%', left: '5%' }}></div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge badge-green mb-4">
            <ShieldCheck size={18} /> {t.hero.patent}
          </div>
          <h1 className="hero-title mb-4">
            {t.hero.titlePrefix}<span className="text-gradient-green">{t.hero.titleSuffix}</span>
          </h1>
          <p className="hero-subtitle mb-8">
            {t.hero.subtitle}
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              {t.hero.cta} <Zap size={20} />
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-container">
             <img src={heroLamp} alt="EyeHealthy LED Lamp" className="hero-image" />
             <div className="hero-image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
