import React from 'react';
import { Sun, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function UseCases() {
  const { t } = useLanguage();

  return (
    <section className="use-cases-section py-24 bg-gray-900/30" id="use-cases">
      <div className="container">
        <h2 className="section-title text-center text-white mb-12">{t.useCases.title}</h2>
        
        <div className="features-grid">
          
          <div className="usecase-card blue-usecase">
            <div className="usecase-icon-wrapper blue-icon-bg mb-6">
              <Sun className="text-blue" size={40} />
            </div>
            <h3 className="usecase-title text-blue mb-6">{t.useCases.blue.title}</h3>
            <ul className="usecase-list">
              {t.useCases.blue.items.map((item, idx) => (
                <li key={idx}>
                  <span className="emoji-large">{idx === 0 ? '📱' : '🖥️'}</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="usecase-card green-usecase">
            <div className="usecase-icon-wrapper green-icon-bg mb-6 relative">
              <div className="icon-glow"></div>
              <BookOpen className="text-green relative z-10" size={40} />
            </div>
            <h3 className="usecase-title text-green mb-6">{t.useCases.green.title}</h3>
            <ul className="usecase-list">
              {t.useCases.green.items.map((item, idx) => (
                <li key={idx}>
                  <span className="emoji-large">{idx === 0 ? '📖' : idx === 1 ? '🧘‍♂️' : '🏡'}</span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
