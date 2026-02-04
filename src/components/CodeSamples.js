import React, { useState, useRef } from 'react';
import './CodeSamples.css';

const CodeSamples = () => {
  const [activeTab, setActiveTab] = useState('email-agent');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const tabContent = {
    'email-agent': {
      title: "🎯 Démo : Agent IA pour Emails",
      description: "Voyez comment l'IA traite et répond automatiquement à vos emails",
      hasVideo: true,
      videoFile: "v1.mp4",
      duration: "2:30",
      steps: [
        "Configuration de l'agent IA dans n8n",
        "Connexion à votre compte email",
        "Définition des règles de traitement",
        "Test avec des emails réels",
        "Déploiement en production"
      ],
      benefits: [
        "Traitement automatique 24/7",
        "Réponses personnalisées",
        "Tri intelligent des priorités",
        "Gain de temps significatif"
      ],
      technologies: ["n8n", "OpenAI GPT-4", "Gmail API", "JavaScript", "Webhooks"]
    },
    'crm-automation': {
      title: "🤖 Automatisation CRM",
      description: "Workflow complet de qualification des leads sans codage",
      hasVideo: false,
      duration: "Configuration : 1 heure",
      steps: [
        "Capture automatique des leads depuis votre site web",
        "Analyse et scoring par IA en temps réel",
        "Intégration avec votre CRM (HubSpot, Salesforce, etc.)",
        "Notifications automatiques à l'équipe commerciale",
        "Suivi et reporting automatisés"
      ],
      benefits: [
        "Réponse immédiate aux leads (< 5 minutes)",
        "Qualification précise grâce à l'IA",
        "Élimination des doublons automatique",
        "Augmentation du taux de conversion",
        "ROI mesurable dès le premier mois"
      ],
      technologies: ["Make.com", "Zapier", "HubSpot API", "ChatGPT", "Slack"]
    },
    'data-analysis': {
      title: "📊 Analyse de Données IA",
      description: "Transformez vos données brutes en insights actionnables",
      hasVideo: false,
      duration: "Setup : 45 minutes",
      steps: [
        "Import automatique des données (Excel, CSV, Google Sheets)",
        "Nettoyage et préparation par IA",
        "Analyse prédictive et détection d'anomalies",
        "Visualisation interactive des résultats",
        "Génération automatique de rapports"
      ],
      benefits: [
        "Analyse de données en quelques secondes",
        "Détection automatique des tendances",
        "Prédictions précises avec machine learning",
        "Alertes sur anomalies détectées",
        "Décisions éclairées basées sur les données"
      ],
      technologies: ["Python", "OpenAI API", "Google Sheets", "Tableau", "Power BI"]
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="code-samples">
      <h2 className="section-title">🎥 Démonstrations & Solutions</h2>
      <p className="section-subtitle">
        Découvrez nos solutions d'automatisation IA pour votre entreprise
      </p>
      
      {/* Navigation */}
      <div className="tabs">
        {Object.keys(tabContent).map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab === 'email-agent' && '📧 Agent Email'}
            {tab === 'crm-automation' && '🤖 CRM Automatisé'}
            {tab === 'data-analysis' && '📊 Analyse IA'}
          </button>
        ))}
      </div>
      
      {/* Conteneur principal */}
      <div className="solution-container">
        <div className="solution-header">
          <div className="solution-title-section">
            <h3>{currentContent.title}</h3>
            <p className="solution-description">{currentContent.description}</p>
            <div className="solution-meta">
              <span className="meta-item">⏱️ {currentContent.duration}</span>
              <span className="meta-item">🚀 Solution Clé en Main</span>
              <span className="meta-item">🎯 Résultats Garantis</span>
            </div>
          </div>
        </div>
        
        {/* Section vidéo uniquement pour l'onglet email-agent */}
        {currentContent.hasVideo ? (
          <div className="video-section">
            <div className="video-player-section">
              <div className="video-wrapper">
                <video
                  ref={videoRef}
                  controls
                  className="local-video-player"
                  poster="/video-poster.jpg"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source 
                    src={`/${currentContent.videoFile}`} 
                    type="video/mp4" 
                  />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
              
              <div className="custom-controls">
                <button 
                  onClick={handlePlayPause} 
                  className="control-btn play-btn"
                >
                  {isPlaying ? '⏸️ Pause' : '▶️ Lecture'}
                </button>
                <button 
                  onClick={handleRestart} 
                  className="control-btn restart-btn"
                >
                  🔄 Redémarrer
                </button>
                <div className="video-info">
                  <span className="video-title">
                    Démonstration en direct
                  </span>
                  <span className="video-source">
                    Tutoriel pas à pas
                  </span>
                </div>
              </div>
            </div>
            
            <div className="video-side-info">
              <h4>🎯 Ce que vous verrez :</h4>
              <ul className="video-highlights">
                <li>Interface n8n en action</li>
                <li>Configuration des workflows</li>
                <li>Intégration OpenAI</li>
                <li>Tests réels avec emails</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="solution-presentation">
            <div className="solution-icon">
              {activeTab === 'crm-automation' ? '🤖' : '📊'}
            </div>
            <h4>✨ Solution Professionnelle</h4>
            <p className="presentation-text">
              {activeTab === 'crm-automation' 
                ? "Notre solution d'automatisation CRM combine les meilleures plateformes no-code avec l'intelligence artificielle pour transformer votre processus de vente. Sans aucune ligne de code, vous pouvez automatiser la qualification, le suivi et la conversion de vos leads."
                : "Notre plateforme d'analyse de données utilise l'IA avancée pour transformer vos données brutes en insights actionnables. Obtenez des analyses prédictives, des visualisations interactives et des rapports automatisés sans compétences techniques."
              }
            </p>
          </div>
        )}
        
        {/* Informations communes à tous les onglets */}
        <div className="solution-details">
          <div className="details-column">
            <h4>📋 Processus étape par étape :</h4>
            <ul className="process-list">
              {currentContent.steps.map((step, index) => (
                <li key={index} className="process-item">
                  <span className="step-number">{index + 1}</span>
                  <span className="step-text">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="details-column">
            <h4>✅ Avantages concrets :</h4>
            <div className="benefits-grid">
              {currentContent.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-content">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Technologies */}
        <div className="technologies-section">
          <h4>🛠️ Technologies utilisées :</h4>
          <div className="tech-tags">
            {currentContent.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        {/* ROI et Statistiques */}
        <div className="roi-section">
          <h4>📈 Impact et ROI :</h4>
          <div className="roi-grid">
            {activeTab === 'email-agent' && (
              <>
                <div className="roi-item">
                  <div className="roi-value">48%</div>
                  <div className="roi-label">Temps gagné sur emails</div>
                </div>
                <div className="roi-item">
                  <div className="roi-value">24/7</div>
                  <div className="roi-label">Disponibilité</div>
                </div>
                <div className="roi-item">
                  <div className="roi-value">1h/jour</div>
                  <div className="roi-label">Économisé par employé</div>
                </div>
                <div className="roi-item">
                  <div className="roi-value">98%</div>
                  <div className="roi-label">Précision des réponses</div>
                </div>
              </>
            )}
            {activeTab === 'crm-automation' && (
              <>
                <div className="roi-item">
                  <div className="roi-value">5 min</div>
                  <div className="roi-label">Temps de réponse aux leads</div>
                </div>
                <div className="roi-item">
                  <div className="roi-value">35%</div>
                  <div className="roi-label">Conversion augmentée</div>
                </div>
                <div className="roi-item">
                  <div className="roi-value">3x</div>
                  <div className="roi-label">Productivité équipe vente</div>
                </div>
                <div className="roi-item">
                  <div className="roi-value">90%</div>
                  <div className="roi-label">Réduction erreurs manuelles</div>
                </div>
              </>
            )}
            {activeTab === 'data-analysis' && (
              <>
                <div className="roi-item">
                  <div className="roi-value">95%</div>
                  <div className="roi-label">Temps d'analyse réduit</div>
                </div>
                <div className="roi-item">
                  <div className="roi-value">30%</div>
                  <div className="roi-label">Décisions améliorées</div>
                </div>
                <div className="roi-item">
                  <div className="roi-value">99%</div>
                  <div className="roi-label">Précision des prédictions</div>
                </div>
                <div className="roi-item">
                  <div className="roi-value">2x</div>
                  <div className="roi-label">ROI en 6 mois</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="solution-cta">
        <div className="cta-content">
          <h4>🚀 Prêt à transformer votre entreprise ?</h4>
          <p>
            Nous vous accompagnons dans l'implémentation de cette solution, 
            avec formation, support et garantie de résultats.
          </p>
        </div>
        <button className="cta-button">
          Demander une démonstration personnalisée
          <span className="cta-arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default CodeSamples;