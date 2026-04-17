import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import spectrumImg from '../assets/spectrum.jpg';

export default function Specs() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-bg-dark" id="specs">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            {t.specs.titlePrefix}<span className="text-gradient-green">{t.specs.titleSuffix}</span>
          </h2>
          <p className="section-subtitle">{t.specs.subtitle}</p>
        </div>

        <div className="features-grid" style={{ alignItems: 'center' }}>
          {/* Tech Data Table */}
          <div className="glass-panel p-6">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">{t.specs.tableTitle}</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }} className="text-white">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '15px', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>{t.specs.headers.type}</th>
                  <th style={{ padding: '15px', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>{t.specs.headers.blue}</th>
                  <th style={{ padding: '15px', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>{t.specs.headers.reading}</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '15px' }}>{t.specs.types.cool}</td>
                  <td style={{ padding: '15px' }}>{t.specs.values.high}</td>
                  <td style={{ padding: '15px', color: '#ff4d4d' }}>{t.specs.values.poor}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '15px' }}>{t.specs.types.warm}</td>
                  <td style={{ padding: '15px' }}>{t.specs.values.medium}</td>
                  <td style={{ padding: '15px', color: '#ffcc00' }}>{t.specs.values.fair}</td>
                </tr>
                <tr style={{ background: 'rgba(0,255,136,0.1)' }}>
                  <td style={{ padding: '15px', fontWeight: 'bold', color: '#00ff88' }}>{t.specs.types.eye}</td>
                  <td style={{ padding: '15px', fontWeight: 'bold', color: '#00ff88' }}>{t.specs.values.low}</td>
                  <td style={{ padding: '15px', fontWeight: 'bold', color: '#00ff88' }}>{t.specs.values.excellent}</td>
                </tr>
              </tbody>
            </table>
            <p className="text-center text-muted mt-4 text-sm">
              {t.specs.footer}
            </p>
          </div>

          {/* Spectrum Image */}
          <div className="relative">
            <div className="glass-panel p-4" style={{ background: 'rgba(0,0,0,0.5)' }}>
              <img 
                src={spectrumImg} 
                alt="Measured EyeHealthy Light Spectrum" 
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
              />
            </div>
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-green-400 blur-3xl opacity-20 -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
