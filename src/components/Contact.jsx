import React, { useState } from 'react';
import { Send, Mail, User, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t, lang } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="contact-section py-24" id="contact">
      <div className="glow-bg-blue" style={{ bottom: '0', right: '20%' }}></div>
      <div className="container max-w-4xl">
        <div className="glass-panel contact-panel relative">
          <div className="card-top-gradient"></div>
          
          <div className="text-center mb-10">
            <h2 className="section-title text-white mb-4">{t.contact.title}</h2>
            <p className="section-subtitle">{t.contact.subtitle}</p>
          </div>

          {isSubmitted ? (
            <div className="success-message text-center animate-fade-in py-16">
              <div className="success-icon mb-6">
                <Send size={40} className="text-green" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{t.contact.successTitle}</h3>
              <p className="section-subtitle">{t.contact.successDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="input-group">
                  <div className={`input-icon ${lang === 'ar' ? 'right-4' : 'left-4'}`} style={{ [lang === 'ar' ? 'right' : 'left']: '1rem' }}>
                    <User size={20} />
                  </div>
                  <input 
                    required 
                    type="text" 
                    placeholder={t.contact.name} 
                    className="form-input" 
                    style={{ [lang === 'ar' ? 'paddingRight' : 'paddingLeft']: '3rem' }}
                  />
                </div>
                
                <div className="input-group">
                  <div className={`input-icon ${lang === 'ar' ? 'right-4' : 'left-4'}`} style={{ [lang === 'ar' ? 'right' : 'left']: '1rem' }}>
                    <Phone size={20} />
                  </div>
                  <input 
                    required 
                    type="tel" 
                    placeholder={t.contact.phone} 
                    className="form-input" 
                    style={{ [lang === 'ar' ? 'paddingRight' : 'paddingLeft']: '3rem' }}
                  />
                </div>
              </div>

              <div className="input-group">
                <div className={`input-icon ${lang === 'ar' ? 'right-4' : 'left-4'}`} style={{ [lang === 'ar' ? 'right' : 'left']: '1rem' }}>
                  <Mail size={20} />
                </div>
                <input 
                  required 
                  type="email" 
                  placeholder={t.contact.email} 
                  className="form-input" 
                  style={{ [lang === 'ar' ? 'paddingRight' : 'paddingLeft']: '3rem' }}
                />
              </div>

              <div className="input-group">
                <textarea 
                  required 
                  rows="4" 
                  placeholder={t.contact.message} 
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">
                {t.contact.submit} <Send size={24} className={lang === 'ar' ? 'rotate-180' : ''} />
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
