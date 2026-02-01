import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaRocket, FaBuilding, FaCode, FaEnvelope } from 'react-icons/fa';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection, sections }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo à gauche */}
        <div className="nav-brand">
          <div className="brand-logo" onClick={() => handleNavClick('hero')}>
            <span className="logo-icon">🤖</span>
            <div className="logo-text">
              <h1>Mohamed Lakhal</h1>
              <p>Expert IA & Automatisation</p>
            </div>
          </div>
        </div>

        {/* Navigation horizontale à droite */}
        <div className="nav-menu">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => handleNavClick(section.id)}
              aria-label={`Aller à ${section.label}`}
              title={section.label}
            >
              <span className="nav-icon">{getIcon(section.id)}</span>
              <span className="nav-label">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;