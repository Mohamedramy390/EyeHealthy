import React, { useState, useEffect } from 'react';
import { Menu, X, Lightbulb, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.objective, href: '#objective' },
    { name: t.nav.features, href: '#features' },
    { name: t.nav.specs, href: '#specs' },
    { name: t.nav.science, href: '#science' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`navbar flex justify-between items-center ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        
        {/* Logo */}
        <a href="#hero" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
          <Lightbulb className="text-green" size={28} />
          <span>EyeHealthy</span>
        </a>

        {/* Desktop Links */}
        <div className="desktop-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="nav-link text-muted hover-text-white transition">
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="lang-toggle-btn"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              background: 'rgba(0, 255, 136, 0.1)', 
              border: '1px solid rgba(0, 255, 136, 0.2)',
              color: '#00ff88',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600',
              fontFamily: 'inherit'
            }}
          >
            <Languages size={18} />
            {t.nav.language}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="mobile-lang-btn"
            style={{ 
              display: 'none',
              background: 'none', 
              border: 'none', 
              color: '#00ff88',
              cursor: 'pointer'
            }}
          >
            <Languages size={24} />
          </button>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="mobile-nav-link text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
            className="mobile-nav-link text-green"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            {t.nav.language}
          </button>
        </div>
      )}
    </nav>
  );
}
