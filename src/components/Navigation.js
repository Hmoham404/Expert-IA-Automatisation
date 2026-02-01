import React, { useState } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaRocket, FaBuilding, FaCode, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection, sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getIcon = (sectionId) => {
    switch(sectionId) {
      case 'hero': return <FaHome />;
      case 'presentation': return <FaUser />;
      case 'formation': return <FaGraduationCap />;
      case 'ia-advantages': return <FaRocket />;
      case 'center': return <FaBuilding />;
      case 'codes': return <FaCode />;
      case 'contact': return <FaEnvelope />;
      default: return <FaHome />;
    }
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    // Retourner en haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-logo" onClick={() => handleNavClick('hero')}>
              <span className="logo-icon">🤖</span>
              <div className="logo-text">
                <h1>Mohamed Lakhal</h1>
                <p>Expert IA & Automatisation</p>
              </div>
            </div>
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            {sections.map(section => (
              <button
                key={section.id}
                className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => handleNavClick(section.id)}
                aria-label={`Aller à ${section.label}`}
              >
                <span className="nav-icon">{getIcon(section.id)}</span>
                <span className="nav-label">{section.label}</span>
              </button>
            ))}
          </div>

          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Overlay pour mobile */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};

export default Navigation;