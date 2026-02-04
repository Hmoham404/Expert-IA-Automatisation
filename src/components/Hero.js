import React from 'react';
import { FaCalendarAlt, FaUsers, FaCertificate, FaArrowRight, FaDownload, FaDatabase, FaRobot, FaSyncAlt, FaChartLine, FaArrowDown, FaShieldAlt, FaCloud, FaCogs, FaCheckCircle } from 'react-icons/fa';
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

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* ... (votre contenu existant reste identique) ... */}
          <div className="hero-badge">
            <span>🚀 Formation Exclusive IA</span>
          </div>
          
          <h1 className="hero-title">
            Maîtrisez l'<span className="highlight">IA & l'Automatisation</span><br />
            avec <span className="trainer-name">Mohamed Lakhal</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Formation Intensive • 2-3 Jours • Résultats Immédiats
          </h2>
          
          <p className="hero-description">
            Expert certifié en LLMs avancés (OpenAI, Gemini, Claude) et automatisation no-code (Make.com, Zapier). 
            Je vous forme à transformer vos processus métier avec des solutions IA concrètes et opérationnelles.
            <br /><br />
            <strong>📍 Formation dispensée à L'Essor Formation - Hammam Sousse</strong>
          </p>
          
          <div className="hero-stats">
            <div className="stat-card">
              <FaCalendarAlt className="stat-icon" />
              <div>
                <h3>2-3 Jours</h3>
                <p>Formation intensive</p>
              </div>
            </div>
            
            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <div>
                <h3>12 max</h3>
                <p>Participants par session</p>
              </div>
            </div>
            
            <div className="stat-card">
              <FaCertificate className="stat-icon" />
              <div>
                <h3>Certifiée</h3>
                <p>Attestation reconnue</p>
              </div>
            </div>
          </div>
          
          <div className="hero-actions">
            <a 
              href="https://wa.me/21623513870?text=Bonjour%20Hanen%2C%20je%20suis%20intéressé%20par%20votre%20formation%20IA%20%26%20Automatisation%20à%20L'Essor%20Formation.%20Pouvez-vous%20me%20renseigner%20%3F" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaArrowRight /> Réserver ma place
            </a>
            
            <button 
              className="btn-secondary"
              onClick={handleViewProgram}
            >
              Voir le programme
            </button>
            
            <button 
              className="btn-outline"
              onClick={handleDownloadCV}
            >
              <FaDownload /> Télécharger mon CV
            </button>
          </div>
          
          <div className="hero-contact-info">
            <p>📞 Contact direct : <strong>73 371 170</strong> | <strong>55 691 152</strong></p>
            <p>🏢 <strong>L'Essor Formation</strong> - Hammam Sousse • Agrément N° 51-496-19</p>
          </div>
        </div>
        
        <div className="hero-visual">
          {/* Avatar Formateur */}
          <div className="trainer-avatar">
            <div className="avatar-circle">ML</div>
            <div className="trainer-info">
              <h4>Mohamed Lakhal</h4>
              <p>Expert IA & Automatisation</p>
              <div className="expert-tags">
                <span className="expert-tag">🤖 LLMs Expert</span>
                <span className="expert-tag">⚡ No-Code Pro</span>
              </div>
            </div>
          </div>
          
          {/* DIAGRAMME DE WORKFLOW IA PROFESSIONNEL */}
          <div className="workflow-diagram-container">
            <h3 className="diagram-title">
              <FaCogs /> Workflow IA Professionnel
            </h3>
            
            <div className="workflow-diagram">
              
              {/* Niveau 1: Données Sources */}
              <div className="workflow-level">
                <div className="level-label">📥 DONNÉES SOURCES</div>
                <div className="level-items">
                  <div className="workflow-item data-source">
                    <FaDatabase className="item-icon" />
                    <div className="item-content">
                      <h5>CRM</h5>
                      <p>HubSpot, Salesforce</p>
                    </div>
                  </div>
                  <div className="workflow-item data-source">
                    <FaDatabase className="item-icon" />
                    <div className="item-content">
                      <h5>Emails</h5>
                      <p>Gmail, Outlook</p>
                    </div>
                  </div>
                  <div className="workflow-item data-source">
                    <FaDatabase className="item-icon" />
                    <div className="item-content">
                      <h5>Documents</h5>
                      <p>PDF, Word, Excel</p>
                    </div>
                  </div>
                </div>
                <FaArrowDown className="level-arrow" />
              </div>
              
              {/* Niveau 2: Traitement IA */}
              <div className="workflow-level">
                <div className="level-label">🧠 TRAITEMENT IA</div>
                <div className="level-items">
                  <div className="workflow-item ai-processing">
                    <FaRobot className="item-icon" />
                    <div className="item-content">
                      <h5>Analyse Intelligente</h5>
                      <p>GPT-4, Claude, Gemini</p>
                    </div>
                  </div>
                  <div className="workflow-item ai-processing">
                    <FaShieldAlt className="item-icon" />
                    <div className="item-content">
                      <h5>Sécurité & Conformité</h5>
                      <p>RGPD Tunisie</p>
                    </div>
                  </div>
                </div>
                <FaArrowDown className="level-arrow" />
              </div>
              
              {/* Niveau 3: Automatisation */}
              <div className="workflow-level">
                <div className="level-label">⚡ AUTOMATISATION</div>
                <div className="level-items">
                  <div className="workflow-item automation">
                    <FaSyncAlt className="item-icon" />
                    <div className="item-content">
                      <h5>Workflows No-Code</h5>
                      <p>Make.com, Zapier</p>
                    </div>
                  </div>
                  <div className="workflow-item automation">
                    <FaCloud className="item-icon" />
                    <div className="item-content">
                      <h5>Intégration Cloud</h5>
                      <p>API, Webhooks</p>
                    </div>
                  </div>
                </div>
                <FaArrowDown className="level-arrow" />
              </div>
              
              {/* Niveau 4: Résultats */}
              <div className="workflow-level">
                <div className="level-label">🎯 RÉSULTATS BUSINESS</div>
                <div className="level-items">
                  <div className="workflow-item results">
                    <FaChartLine className="item-icon" />
                    <div className="item-content">
                      <h5>ROI Mesurable</h5>
                      <p>Dès le 1er mois</p>
                    </div>
                  </div>
                  <div className="workflow-item results">
                    <FaCheckCircle className="item-icon" />
                    <div className="item-content">
                      <h5>Productivité ×3</h5>
                      <p>Gain de temps 48%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Légende */}
            <div className="workflow-legend">
              <div className="legend-item">
                <div className="legend-dot data-dot"></div>
                <span>Données</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot ai-dot"></div>
                <span>IA</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot automation-dot"></div>
                <span>Automatisation</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot results-dot"></div>
                <span>Résultats</span>
              </div>
            </div>
          </div>
          
          {/* Stack Technique */}
          <div className="tech-stack">
            <div className="tech-badge openai">OpenAI GPT-4</div>
            <div className="tech-badge gemini">Google Gemini</div>
            <div className="tech-badge claude">Anthropic Claude</div>
            <div className="tech-badge make">Make.com</div>
            <div className="tech-badge zapier">Zapier</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;