import React, { useState, useEffect, useCallback } from 'react';
import { 
  FaSpinner, 
  FaArrowUp,
  FaHome,
  FaUser,
  FaGraduationCap,
  FaRocket,
  FaBuilding,
  FaCode,
  FaEnvelope
} from 'react-icons/fa';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import WorkflowIAFormation from './components/Formation';
import IAAdvantages from './components/IAAdvantages';
import CenterInfo from './components/CenterInfo';
import Contact from './components/Contact';
import CodeSamples from './components/CodeSamples';

// Section constants
const SECTIONS = [
  { id: 'home', label: 'Accueil', icon: <FaHome />, component: <Hero /> },
  { id: 'presentation', label: 'Expert', icon: <FaUser />, component: <Presentation /> },
  { id: 'formation', label: 'Formations', icon: <FaGraduationCap />, component: <WorkflowIAFormation /> },
  { id: 'avantages', label: 'Avantages', icon: <FaRocket />, component: <IAAdvantages /> },
  { id: 'center', label: 'Centre', icon: <FaBuilding />, component: <CenterInfo /> },
  { id: 'demos', label: 'Démonstrations', icon: <FaCode />, component: <CodeSamples /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope />, component: <Contact /> }
];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Gestion du chargement initial avec progression
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 300);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Gestion du scroll pour détecter la section active
  useEffect(() => {
    if (isLoading) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          if (activeSection !== SECTIONS[i].id) {
            setActiveSection(SECTIONS[i].id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, activeSection]);

  // Gestion du clic sur les liens de navigation
  const handleNavClick = useCallback((sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Rendre la fonction disponible globalement
  useEffect(() => {
    window.setActiveSection = handleNavClick;
    
    return () => {
      delete window.setActiveSection;
    };
  }, [handleNavClick]);

  // Préchargement des images critiques
  useEffect(() => {
    const preloadImages = [
      '/images/logo-essor-formation.png',
      '/images/logo-essor.svg',
      '/video-poster.jpg'
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Loading screen
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader-container">
          <div className="loader-content">
            <div className="loader-logo">
              <div className="logo-spin">
                <FaSpinner className="spinner-icon" />
              </div>
              <h1 className="loader-title">Expert IA Formation</h1>
              <p className="loader-subtitle">Chargement du portfolio...</p>
            </div>
            
            <div className="loader-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              <div className="progress-text">{loadingProgress}%</div>
            </div>
            
            <div className="loader-features">
              <div className="feature">
                <div className="feature-icon">🤖</div>
                <span>IA Générative</span>
              </div>
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <span>Automatisation No-Code</span>
              </div>
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <span>Formation Expert</span>
              </div>
            </div>
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
        sections={SECTIONS}
      />
      
      <main className="main-content">
        {/* Render all sections for scrolling */}
        {SECTIONS.map(section => (
          <section 
            key={section.id}
            id={section.id}
            className={`content-section ${activeSection === section.id ? 'active' : ''}`}
          >
            <div className="section-content">
              {section.component}
            </div>
          </section>
        ))}
      </main>
      
      <ScrollToTopButton />
      
      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">🤖</div>
            <div className="footer-text">
              <h3>Expert IA Formation</h3>
              <p>Formation certifiée en Intelligence Artificielle & Automatisation</p>
            </div>
          </div>
          
          <div className="footer-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <strong>L'Essor Formation</strong>
                <span>Hammam-Sousse, Tunisie</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <strong>Contact</strong>
                <span>73 371 170 • 55 691 152</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <strong>Email</strong>
                <span>centre.tft@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="footer-legal">
            <p>© {new Date().getFullYear()} Expert IA Formation. Tous droits réservés.</p>
            <p>Centre agréé par l'État N° 51-496-19</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Scroll to top button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
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

  if (!isVisible) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Retour en haut de la page"
    >
      <FaArrowUp className="scroll-icon" />
      <span className="scroll-text">Haut</span>
    </button>
  );
};

export default App;