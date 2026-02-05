import React from 'react';
import { 
  FaCalendarAlt, 
  FaUsers, 
  FaCertificate, 
  FaArrowRight, 
  FaDownload, 
  FaDatabase, 
  FaRobot, 
  FaSyncAlt, 
  FaChartLine, 
  FaArrowDown, 
  FaShieldAlt, 
  FaCloud, 
  FaCogs, 
  FaCheckCircle,
  FaRocket,
  FaGraduationCap,
  FaBuilding,
  FaPhone,
  FaWhatsapp
} from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-mohamed-lakhal.pdf';
    link.download = 'CV_Mohamed_Lakhal_Expert_IA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewProgram = () => {
    if (window.setActiveSection) {
      window.setActiveSection('formation');
    } else {
      window.location.href = '/#formation';
    }
  };

  const handleContactCenter = () => {
    window.location.href = '/#center';
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          {/* Header Badge */}
          <div className="hero-header">
            <div className="header-badge">
              <FaRocket /> FORMATION EXPERT
            </div>
            <div className="header-sub-badge">
              <FaGraduationCap /> L'Essor Formation • Agréé N° 51-496-19
            </div>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Formez-vous à l'
            <span className="highlight-text">Intelligence Artificielle</span>
            & à l'
            <span className="highlight-text">Automatisation No-Code</span>
          </h1>
          
          <p className="hero-trainer">
            Formation dispensée par <span className="trainer-name">Mohamed Lakhal</span>
            <span className="trainer-title"> • Expert Certifié IA & Automatisation</span>
          </p>
          
          {/* Subtitle */}
          <h2 className="hero-subtitle">
            Transformez vos processus métier avec des solutions IA concrètes
            <span className="subtitle-tag">Formation intensive • 2-3 jours • Résultats garantis</span>
          </h2>
          
          {/* Description */}
          <div className="hero-description">
            <p className="description-main">
              Maîtrisez les technologies d'IA générative (GPT-4, Gemini, Claude) 
              et les outils d'automatisation no-code (Make.com, Zapier) pour 
              automatiser vos tâches, analyser vos données et optimiser vos 
              processus métier.
            </p>
            
            <div className="description-features">
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Formation 100% pratique sur vos cas réels</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Certification officielle délivrée</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Support post-formation pendant 3 mois</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Maximum 12 participants pour un accompagnement personnalisé</span>
              </div>
            </div>
            
            <div className="location-badge" onClick={handleContactCenter}>
              <FaBuilding className="location-icon" />
              <div className="location-details">
                <strong>📍 L'Essor Formation - Hammam Sousse</strong>
                <small>Centre agréé par l'État • Infrastructures modernes</small>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon-container">
                <FaCalendarAlt className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-number">2-3 Jours</div>
                <div className="stat-label">Formation intensive</div>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon-container">
                <FaUsers className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-number">12 max</div>
                <div className="stat-label">Participants par session</div>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon-container">
                <FaCertificate className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-number">Certifiée</div>
                <div className="stat-label">Attestation reconnue</div>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon-container">
                <FaChartLine className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="hero-actions">
            <a 
              href="https://wa.me/21623513870?text=Bonjour%20Hanen%2C%20je%20suis%20intéressé%20par%20votre%20formation%20IA%20%26%20Automatisation%20à%20L'Essor%20Formation.%20Pouvez-vous%20me%20renseigner%20%3F" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaWhatsapp className="btn-icon" />
              <span>Réserver ma place via WhatsApp</span>
            </a>
            
            <button 
              className="btn-secondary"
              onClick={handleViewProgram}
            >
              <span>📚 Voir le programme détaillé</span>
              <FaArrowRight className="btn-arrow" />
            </button>
            
            <button 
              className="btn-outline"
              onClick={handleDownloadCV}
            >
              <FaDownload className="btn-icon" />
              <span>Télécharger le CV de l'expert</span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="hero-contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div className="contact-details">
                <strong>Contact direct</strong>
                <div className="contact-numbers">
                  <a href="tel:73371170">73 371 170</a>
                  <span className="separator">|</span>
                  <a href="tel:55691152">55 691 152</a>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <FaBuilding className="contact-icon" />
              <div className="contact-details">
                <strong>Centre de formation</strong>
                <span>L'Essor Formation • Agrément N° 51-496-19</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="hero-visual">
          {/* Trainer Profile */}
          <div className="trainer-profile">
            <div className="profile-header">
              <div className="trainer-avatar">
                <div className="avatar-circle">
                  <span className="avatar-initials">ML</span>
                  <div className="avatar-badge">👑 Expert</div>
                </div>
                <div className="trainer-info">
                  <h3 className="trainer-name">Mohamed Lakhal</h3>
                  <p className="trainer-title">Expert IA & Automatisation No-Code</p>
                </div>
              </div>
            </div>
            
            <div className="profile-expertise">
              <div className="expertise-tag">
                <span className="expertise-icon">🤖</span>
                <span>LLMs Expert (GPT-4, Gemini, Claude)</span>
              </div>
              <div className="expertise-tag">
                <span className="expertise-icon">⚡</span>
                <span>No-Code Automation Specialist</span>
              </div>
              <div className="expertise-tag">
                <span className="expertise-icon">🏢</span>
                <span>+50 entreprises accompagnées</span>
              </div>
              <div className="expertise-tag">
                <span className="expertise-icon">🎯</span>
                <span>Formateur certifié</span>
              </div>
            </div>
          </div>

          {/* Workflow Diagram */}
          <div className="workflow-section">
            <div className="section-header">
              <FaCogs className="section-icon" />
              <h3>Workflow IA Professionnel</h3>
              <p>Processus complet de transformation digitale</p>
            </div>
            
            <div className="workflow-diagram">
              {/* Level 1: Data Collection */}
              <div className="workflow-level">
                <div className="level-header" style={{ backgroundColor: '#3B82F6' }}>
                  <FaDatabase className="level-icon" />
                  <h4>Données Sources</h4>
                </div>
                <div className="level-items">
                  <div className="workflow-item" style={{ borderColor: '#3B82F6' }}>
                    <div className="item-icon" style={{ backgroundColor: '#3B82F6' }}>
                      <FaDatabase />
                    </div>
                    <div className="item-content">
                      <h5>CRM & Bases de données</h5>
                      <p>HubSpot, Salesforce, Airtable</p>
                    </div>
                  </div>
                  <div className="workflow-item" style={{ borderColor: '#3B82F6' }}>
                    <div className="item-icon" style={{ backgroundColor: '#3B82F6' }}>
                      📧
                    </div>
                    <div className="item-content">
                      <h5>Communication</h5>
                      <p>Emails, Messageries</p>
                    </div>
                  </div>
                  <div className="workflow-item" style={{ borderColor: '#3B82F6' }}>
                    <div className="item-icon" style={{ backgroundColor: '#3B82F6' }}>
                      📊
                    </div>
                    <div className="item-content">
                      <h5>Documents & Fichiers</h5>
                      <p>PDF, Excel, Google Sheets</p>
                    </div>
                  </div>
                </div>
                <div className="level-arrow">
                  <FaArrowDown />
                </div>
              </div>

              {/* Level 2: AI Processing */}
              <div className="workflow-level">
                <div className="level-header" style={{ backgroundColor: '#8B5CF6' }}>
                  <FaRobot className="level-icon" />
                  <h4>Traitement IA</h4>
                </div>
                <div className="level-items">
                  <div className="workflow-item" style={{ borderColor: '#8B5CF6' }}>
                    <div className="item-icon" style={{ backgroundColor: '#8B5CF6' }}>
                      <FaRobot />
                    </div>
                    <div className="item-content">
                      <h5>Analyse Intelligente</h5>
                      <p>GPT-4, Claude, Gemini</p>
                    </div>
                  </div>
                  <div className="workflow-item" style={{ borderColor: '#8B5CF6' }}>
                    <div className="item-icon" style={{ backgroundColor: '#8B5CF6' }}>
                      <FaShieldAlt />
                    </div>
                    <div className="item-content">
                      <h5>Sécurité & Conformité</h5>
                      <p>RGPD, Loi Tunisienne</p>
                    </div>
                  </div>
                </div>
                <div className="level-arrow">
                  <FaArrowDown />
                </div>
              </div>

              {/* Level 3: Automation */}
              <div className="workflow-level">
                <div className="level-header" style={{ backgroundColor: '#10B981' }}>
                  <FaSyncAlt className="level-icon" />
                  <h4>Automatisation</h4>
                </div>
                <div className="level-items">
                  <div className="workflow-item" style={{ borderColor: '#10B981' }}>
                    <div className="item-icon" style={{ backgroundColor: '#10B981' }}>
                      <FaSyncAlt />
                    </div>
                    <div className="item-content">
                      <h5>Workflows No-Code</h5>
                      <p>Make.com, Zapier, n8n</p>
                    </div>
                  </div>
                  <div className="workflow-item" style={{ borderColor: '#10B981' }}>
                    <div className="item-icon" style={{ backgroundColor: '#10B981' }}>
                      <FaCloud />
                    </div>
                    <div className="item-content">
                      <h5>Intégration Cloud</h5>
                      <p>API, Webhooks, Connecteurs</p>
                    </div>
                  </div>
                </div>
                <div className="level-arrow">
                  <FaArrowDown />
                </div>
              </div>

              {/* Level 4: Results */}
              <div className="workflow-level">
                <div className="level-header" style={{ backgroundColor: '#F59E0B' }}>
                  <FaChartLine className="level-icon" />
                  <h4>Résultats Business</h4>
                </div>
                <div className="level-items">
                  <div className="workflow-item" style={{ borderColor: '#F59E0B' }}>
                    <div className="item-icon" style={{ backgroundColor: '#F59E0B' }}>
                      <FaChartLine />
                    </div>
                    <div className="item-content">
                      <h5>ROI Mesurable</h5>
                      <p>Dès le premier mois</p>
                    </div>
                  </div>
                  <div className="workflow-item" style={{ borderColor: '#F59E0B' }}>
                    <div className="item-icon" style={{ backgroundColor: '#F59E0B' }}>
                      <FaCheckCircle />
                    </div>
                    <div className="item-content">
                      <h5>Productivité ×3</h5>
                      <p>Gain de temps 48%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="workflow-legend">
              <div className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: '#3B82F6' }}></div>
                <span>Données</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: '#8B5CF6' }}></div>
                <span>IA</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: '#10B981' }}></div>
                <span>Automatisation</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ backgroundColor: '#F59E0B' }}></div>
                <span>Résultats</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack">
            <div className="section-header">
              <h4>🏆 Technologies Maîtrisées</h4>
            </div>
            <div className="tech-grid">
              <div className="tech-category">
                <h5>IA Générative</h5>
                <div className="tech-tags">
                  <span className="tech-tag" style={{ backgroundColor: '#10A37F' }}>OpenAI GPT-4</span>
                  <span className="tech-tag" style={{ backgroundColor: '#4285F4' }}>Google Gemini</span>
                  <span className="tech-tag" style={{ backgroundColor: '#D4A017' }}>Anthropic Claude</span>
                </div>
              </div>
              <div className="tech-category">
                <h5>No-Code</h5>
                <div className="tech-tags">
                  <span className="tech-tag" style={{ backgroundColor: '#FF6B35' }}>Make.com</span>
                  <span className="tech-tag" style={{ backgroundColor: '#FF4A00' }}>Zapier</span>
                  <span className="tech-tag" style={{ backgroundColor: '#1E40AF' }}>n8n</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;