import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objective from './components/Objective';
import Features from './components/Features';
import Specs from './components/Specs';
import Comparison from './components/Comparison';
import UseCases from './components/UseCases';
import Contact from './components/Contact';

function AppContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-bg-dark">
      <Navbar />
      <Hero />
      <Objective />
      <Features />
      <Specs />
      <Comparison />
      <UseCases />
      <Contact />
      
      <footer className="py-8 text-center border-t mt-12 bg-black-20">
        <div className="container text-muted">
          <p>© {new Date().getFullYear()} EyeHealthy. {t.footer.rights}</p>
          <p className="text-sm mt-2">{t.footer.patent}</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
