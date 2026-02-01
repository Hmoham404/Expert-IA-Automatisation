import React from 'react';
import { FaCalendarAlt, FaUsers, FaCertificate, FaArrowRight, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const handleDownloadCV = () => {
    // Simulation de téléchargement - à remplacer par votre vrai CV
    const link = document.createElement('a');
    link.href = '/cv-mohamed-lakhal.pdf'; // Chemin vers votre CV
    link.download = 'CV_Mohamed_Lakhal_Expert_IA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero fade-in">
      <div className="hero-container">
        <div className="hero-content">
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
            {/* BOUTON "RÉSERVER MA PLACE" avec lien WhatsApp */}
            <a 
              href="https://wa.me/21623513870?text=Bonjour%20Hanen%2C%20je%20suis%20intéressé%20par%20votre%20formation%20IA%20%26%20Automatisation%20à%20L'Essor%20Formation.%20Pouvez-vous%20me%20renseigner%20%3F" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaArrowRight /> Réserver ma place
            </a>
            
            {/* BOUTON "VOIR LE PROGRAMME" avec lien vers section Formation */}
            <button 
              className="btn-secondary"
              onClick={() => {
                // Pour la navigation interne, utilisez l'approche de votre App.js
                // Si vous utilisez le système de sections :
                if (window.setActiveSection) {
                  window.setActiveSection('formation');
                } else {
                  // Fallback : redirection vers une URL avec hash
                  window.location.href = '/#formation';
                }
              }}
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
          <div className="trainer-avatar">
            <div className="avatar-circle">ML</div>
            <div className="trainer-info">
              <h4>Mohamed Lakhal</h4>
              <p>Expert IA & Automatisation</p>
            </div>
          </div>
          
          <div className="ai-animation">
            <div className="pulse-ring"></div>
            <div className="pulse-ring delay-1"></div>
            <div className="pulse-ring delay-2"></div>
            <div className="ai-core">🤖</div>
          </div>
          
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