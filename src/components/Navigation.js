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

  const handleNavClick = (sectionId, e) => {
    // Empêcher le comportement par défaut si c'est un événement
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
    
    // Mettre à jour l'URL sans recharger la page
    if (window.history && window.history.pushState) {
      const newUrl = `${window.location.pathname}#${sectionId}`;
      window.history.pushState({ section: sectionId }, '', newUrl);
    }
  };

  const handleWhatsAppClick = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const phoneNumber = "+21623513870";
    const message = "Bonjour, je suis intéressé(e) par la formation IA & Automatisation. Je souhaite réserver ma place. Pouvez-vous m'envoyer plus d'informations ?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLogoClick = (e) => {
    // Empêcher le comportement par défaut
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
    
    // Mettre à jour l'URL
    window.history.pushState({}, '', window.location.pathname);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <button 
            className="nav-brand" 
            onClick={handleLogoClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <div className="brand-logo">
              <div className="logo-icon">
                <span>🤖</span>
              </div>
              <div className="logo-text">
                <h1 className="logo-title">IA Formation</h1>
                <p className="logo-subtitle">Expertise • Innovation • Excellence</p>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <div className="nav-desktop">
            <div className="nav-menu">
              {sections.map(section => (
                <button
                  key={section.id}
                  className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(section.id, e)}
                  aria-label={`Aller à ${section.label}`}
                  title={section.label}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
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
              style={{ cursor: 'pointer' }}
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
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <button 
                className="mobile-logo" 
                onClick={handleLogoClick}
                style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
              >
                <div className="mobile-logo-icon">🤖</div>
                <div className="mobile-logo-text">
                  <h3>IA Formation</h3>
                  <p>Formation Expert IA</p>
                </div>
              </button>
              <button 
                className="mobile-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <FaTimes />
              </button>
            </div>

            <div className="mobile-nav-items">
              {sections.map(section => (
                <button
                  key={section.id}
                  className={`mobile-nav-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(section.id, e)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%' }}
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
                style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%' }}
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
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
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