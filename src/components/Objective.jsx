import React from 'react';
import { Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Objective() {
  const { t } = useLanguage();

  return (
    <section className="objective-section py-24 bg-bg-dark" id="objective">
      <div className="container text-center max-w-4xl" style={{ margin: '0 auto', maxWidth: '56rem' }}>
        <div className="objective-icon-wrapper mb-6 mx-auto">
          <Target size={32} />
        </div>
        <h2 className="section-title mb-6 text-white">
          {t.objective.titlePrefix}<span className="text-gradient-green">{t.objective.titleSuffix}</span>
        </h2>
        <p className="section-subtitle" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
          {t.objective.content}
        </p>
      </div>
    </section>
  );
}
