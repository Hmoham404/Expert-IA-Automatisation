import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Formation from './components/Formation';
import IAAdvantages from './components/IAAdvantages';
import CenterInfo from './components/CenterInfo';
import Contact from './components/Contact';
import CodeSamples from './components/CodeSamples';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  // Sections disponibles
  const sections = [
    { id: 'hero', label: 'Accueil', component: <Hero /> },
    { id: 'presentation', label: 'Expert', component: <Presentation /> },
    { id: 'formation', label: 'Formation', component: <Formation /> },
    { id: 'ia-advantages', label: 'Avantages', component: <IAAdvantages /> },
    { id: 'center', label: 'Centre', component: <CenterInfo /> },
    { id: 'codes', label: 'Codes', component: <CodeSamples /> },
    { id: 'contact', label: 'Contact', component: <Contact /> }
  ];

  // Gestion du chargement initial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Gestion du clic sur les liens de navigation
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Rendre la fonction disponible globalement
  useEffect(() => {
    window.setActiveSection = handleNavClick;
    
    return () => {
      delete window.setActiveSection;
    };
  }, []);

  // Trouver le composant actif
  const ActiveComponent = sections.find(section => section.id === activeSection)?.component || <Hero />;

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-circle"></div>
          <p>Chargement du Portfolio Expert IA...</p>
          <div className="loading-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={handleNavClick}
        sections={sections}
      />
      
      <main className="main-content">
        <div className="section-container">
          {ActiveComponent}
        </div>
      </main>
      
      {/* Bouton retour en haut */}
      <ScrollToTopButton />
    </div>
  );
};

// Composant bouton retour en haut simplifié
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      ↑
    </button>
  );
};

export default App;