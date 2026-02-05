import React, { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaUser, 
  FaGraduationCap, 
  FaRocket, 
  FaBuilding, 
  FaCode, 
  FaEnvelope,
  FaBars,
  FaTimes,
  FaWhatsapp
} from 'react-icons/fa';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection, sections }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when window resizes to desktop
    const handleResize = () => {
      if (window.innerWidth > 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const getIcon = (sectionId) => {
    switch(sectionId) {
      case 'home': return <FaHome />;
      case 'presentation': return <FaUser />;
      case 'formation': return <FaGraduationCap />;
      case 'avantages': return <FaRocket />;
      case 'center': return <FaBuilding />;
      case 'demos': return <FaCode />;
      case 'contact': return <FaEnvelope />;
      default: return <FaHome />;
    }
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+21623513870";
    const message = "Bonjour, je suis intéressé(e) par la formation IA & Automatisation. Je souhaite réserver ma place. Pouvez-vous m'envoyer plus d'informations ?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-brand" onClick={handleLogoClick}>
            <div className="brand-logo">
              <div className="logo-icon">
                <span>🤖</span>
              </div>
              <div className="logo-text">
                <h1 className="logo-title">IA Formation</h1>
                <p className="logo-subtitle">Expertise • Innovation • Excellence</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="nav-desktop">
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
                  {activeSection === section.id && (
                    <span className="active-indicator"></span>
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              className="nav-cta"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp className="cta-icon" />
              <span className="cta-text">Réserver</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="mobile-logo" onClick={handleLogoClick}>
                <div className="mobile-logo-icon">🤖</div>
                <div className="mobile-logo-text">
                  <h3>IA Formation</h3>
                  <p>Formation Expert IA</p>
                </div>
              </div>
              <button 
                className="mobile-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mobile-nav-items">
              {sections.map(section => (
                <button
                  key={section.id}
                  className={`mobile-nav-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(section.id)}
                >
                  <span className="mobile-nav-icon">{getIcon(section.id)}</span>
                  <span className="mobile-nav-label">{section.label}</span>
                  {activeSection === section.id && (
                    <span className="mobile-active-indicator"></span>
                  )}
                </button>
              ))}

              {/* WhatsApp CTA in Mobile */}
              <button 
                className="mobile-nav-item mobile-cta"
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp className="mobile-nav-icon" />
                <span className="mobile-nav-label">Réserver via WhatsApp</span>
                <span className="mobile-cta-badge">🚀</span>
              </button>
            </div>

            <div className="mobile-contact-info">
              <p className="mobile-contact-title">📞 Contact direct</p>
              <div className="mobile-contact-numbers">
                <a href="tel:73371170" className="mobile-contact-number">
                  <span className="contact-icon">📱</span>
                  <span>73 371 170</span>
                </a>
                <a href="tel:55691152" className="mobile-contact-number">
                  <span className="contact-icon">📱</span>
                  <span>55 691 152</span>
                </a>
              </div>
              <p className="mobile-contact-hours">
                <span className="contact-icon">⏰</span>
                Lun-Ven: 8h-18h • Sam: 8h-13h
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed WhatsApp Button for Mobile */}
      <button 
        className="whatsapp-fixed"
        onClick={handleWhatsAppClick}
        aria-label="Contacter sur WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">WhatsApp</span>
        <span className="whatsapp-badge">💬</span>
      </button>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress" 
          style={{ 
            width: `${((activeSectionIndex(sections, activeSection) + 1) / sections.length) * 100}%` 
          }}
        ></div>
      </div>
    </>
  );
};

// Helper function to get active section index
const activeSectionIndex = (sections, activeSection) => {
  return sections.findIndex(section => section.id === activeSection);
};

export default Navigation;