import React, { useState, useRef } from 'react';
import { 
  FaPlay, 
  FaPause, 
  FaRedo, 
  FaVideo, 
  FaRobot, 
  FaChartBar,
  FaCheckCircle,
  FaClock,
  FaRocket,
  FaTools,
  FaChartLine,
  FaLightbulb,
  FaCogs,
  FaServer,
  FaDatabase,
  FaSync,
  FaEnvelope,
  FaUsers,
  FaFileExcel
} from 'react-icons/fa';
import './CodeSamples.css';

const CodeSamples = () => {
  const [activeTab, setActiveTab] = useState('email-agent');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const solutions = {
    'email-agent': {
      title: "Agent IA pour Gestion d'Emails",
      icon: <FaEnvelope />,
      subtitle: "Automatisez vos communications et répondez instantanément",
      duration: "Setup: 2 heures",
      color: "#2563EB",
      hasVideo: true,
      videoFile: "v1.mp4",
      
      process: [
        "Configuration de l'agent IA dans n8n",
        "Connexion sécurisée à votre compte email",
        "Définition des règles de traitement intelligentes",
        "Test en environnement contrôlé",
        "Déploiement et monitoring continu"
      ],
      
      benefits: [
        { icon: <FaClock />, text: "Traitement 24/7 sans interruption" },
        { icon: <FaSync />, text: "Réponses personnalisées et contextuelles" },
        { icon: <FaChartBar />, text: "Tri intelligent par priorité" },
        { icon: <FaUsers />, text: "Gain de 15h/semaine par équipe" }
      ],
      
      technologies: [
        { name: "n8n", category: "Automation" },
        { name: "OpenAI GPT-4", category: "AI" },
        { name: "Gmail API", category: "Integration" },
        { name: "JavaScript", category: "Development" },
        { name: "Webhooks", category: "Real-time" }
      ],
      
      roi: [
        { value: "48%", label: "Temps email réduit" },
        { value: "24/7", label: "Disponibilité" },
        { value: "1h/jour", label: "Gain par employé" },
        { value: "98%", label: "Précision" }
      ]
    },
    
    'crm-automation': {
      title: "Automatisation CRM Intelligente",
      icon: <FaRobot />,
      subtitle: "Qualifiez et convertissez vos leads automatiquement",
      duration: "Configuration: 1 heure",
      color: "#7C3AED",
      hasVideo: false,
      
      process: [
        "Capture automatique des leads multi-canaux",
        "Analyse et scoring IA en temps réel",
        "Intégration CRM native (HubSpot, Salesforce)",
        "Notifications intelligentes aux commerciaux",
        "Suivi et optimisation automatisés"
      ],
      
      benefits: [
        { icon: <FaRocket />, text: "Réponse immédiate (< 5 min)" },
        { icon: <FaChartLine />, text: "Conversion augmentée de 35%" },
        { icon: <FaCogs />, text: "Élimination automatique des doublons" },
        { icon: <FaLightbulb />, text: "ROI mesurable dès J+30" }
      ],
      
      technologies: [
        { name: "Make.com", category: "Automation" },
        { name: "Zapier", category: "Integration" },
        { name: "HubSpot API", category: "CRM" },
        { name: "ChatGPT", category: "AI" },
        { name: "Slack", category: "Communication" }
      ],
      
      roi: [
        { value: "5 min", label: "Temps de réponse" },
        { value: "35%", label: "Conversion augmentée" },
        { value: "3x", label: "Productivité" },
        { value: "90%", label: "Erreurs réduites" }
      ]
    },
    
    'data-analysis': {
      title: "Plateforme d'Analyse IA",
      icon: <FaChartBar />,
      subtitle: "Transformez vos données en insights actionnables",
      duration: "Setup: 45 minutes",
      color: "#059669",
      hasVideo: false,
      
      process: [
        "Import automatique de données multi-sources",
        "Nettoyage et préparation IA avancée",
        "Analyse prédictive et détection d'anomalies",
        "Visualisation interactive et dashboards",
        "Génération automatique de rapports"
      ],
      
      benefits: [
        { icon: <FaDatabase />, text: "Analyse de données en secondes" },
        { icon: <FaChartLine />, text: "Détection automatique des tendances" },
        { icon: <FaServer />, text: "Prédictions avec 99% de précision" },
        { icon: <FaLightbulb />, text: "Décisions data-driven optimisées" }
      ],
      
      technologies: [
        { name: "Python", category: "Development" },
        { name: "OpenAI API", category: "AI" },
        { name: "Google Sheets", category: "Data" },
        { name: "Tableau", category: "Visualization" },
        { name: "Power BI", category: "Analytics" }
      ],
      
      roi: [
        { value: "95%", label: "Temps analyse réduit" },
        { value: "30%", label: "Décisions améliorées" },
        { value: "99%", label: "Précision prédictions" },
        { value: "2x", label: "ROI en 6 mois" }
      ]
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

  const currentSolution = solutions[activeTab];

  return (
    <section id="demos" className="code-samples">
      {/* Header Section */}
      <div className="solutions-header">
        <div className="header-badge">
          <FaVideo /> DÉMONSTRATIONS INTERACTIVES
        </div>
        <h1 className="solutions-title">
          Solutions IA Clé en Main
          <span className="title-sub">Pour votre entreprise</span>
        </h1>
        <p className="solutions-intro">
          Découvrez nos solutions d'automatisation IA prêtes à déployer, 
          conçues pour booster votre productivité dès aujourd'hui.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="solutions-tabs">
        {Object.keys(solutions).map(tab => (
          <button
            key={tab}
            className={`solution-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
            style={{
              borderColor: activeTab === tab ? solutions[tab].color : 'transparent'
            }}
          >
            <span className="tab-icon">
              {solutions[tab].icon}
            </span>
            <span className="tab-label">
              {tab === 'email-agent' && 'Agent Email IA'}
              {tab === 'crm-automation' && 'CRM Automatisé'}
              {tab === 'data-analysis' && 'Analyse Données'}
            </span>
            {activeTab === tab && (
              <span className="active-indicator" style={{ backgroundColor: solutions[tab].color }}></span>
            )}
          </button>
        ))}
      </div>

      {/* Main Solution Container */}
      <div className="solution-container">
        {/* Solution Header */}
        <div className="solution-header" style={{ borderColor: currentSolution.color }}>
          <div className="solution-title-container">
            <div className="solution-icon-large" style={{ color: currentSolution.color }}>
              {currentSolution.icon}
            </div>
            <div>
              <h2 className="solution-main-title">{currentSolution.title}</h2>
              <p className="solution-subtitle">{currentSolution.subtitle}</p>
              <div className="solution-meta">
                <div className="meta-tag">
                  <FaClock />
                  <span>{currentSolution.duration}</span>
                </div>
                <div className="meta-tag">
                  <FaCheckCircle />
                  <span>Solution Complète</span>
                </div>
                <div className="meta-tag">
                  <FaRocket />
                  <span>Déploiement Rapide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video or Presentation Section */}
        {currentSolution.hasVideo ? (
          <div className="solution-video-section">
            <div className="video-container">
              <div className="video-player">
                <video
                  ref={videoRef}
                  controls
                  className="solution-video"
                  poster="/video-poster.jpg"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source 
                    src={`/${currentSolution.videoFile}`} 
                    type="video/mp4" 
                  />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
              
              <div className="video-controls">
                <button 
                  onClick={handlePlayPause} 
                  className="control-btn primary-btn"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                  <span>{isPlaying ? 'Pause' : 'Lecture'}</span>
                </button>
                <button 
                  onClick={handleRestart} 
                  className="control-btn secondary-btn"
                >
                  <FaRedo />
                  <span>Redémarrer</span>
                </button>
                <div className="video-info">
                  <div className="video-title">
                    <FaVideo />
                    <span>Démonstration Complète</span>
                  </div>
                  <div className="video-description">
                    Tutoriel pas à pas de configuration
                  </div>
                </div>
              </div>
            </div>

            <div className="video-highlights">
              <h3>🎯 Points clés de la démonstration</h3>
              <div className="highlight-list">
                <div className="highlight-item">
                  <div className="highlight-icon">🔧</div>
                  <div className="highlight-content">
                    <h4>Configuration n8n</h4>
                    <p>Interface intuitive et workflow builder</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🤖</div>
                  <div className="highlight-content">
                    <h4>Intégration OpenAI</h4>
                    <p>Modèles IA avancés pour le traitement</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🧪</div>
                  <div className="highlight-content">
                    <h4>Tests réels</h4>
                    <p>Validation avec données réelles</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📊</div>
                  <div className="highlight-content">
                    <h4>Monitoring</h4>
                    <p>Tableaux de bord de performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="solution-presentation">
            <div className="presentation-header">
              <div className="presentation-icon" style={{ backgroundColor: `${currentSolution.color}20` }}>
                {currentSolution.icon}
              </div>
              <h3>✨ Solution Professionnelle</h3>
            </div>
            <p className="presentation-description">
              {activeTab === 'crm-automation' 
                ? "Notre plateforme combine les meilleurs outils no-code avec l'intelligence artificielle pour automatiser votre processus de vente de A à Z. Sans code, sans complexité, avec des résultats mesurables dès la première semaine."
                : "Transformez vos données en actif stratégique grâce à notre plateforme d'analyse IA. Obtenez des insights actionnables, des prédictions précises et des visualisations professionnelles sans aucune expertise technique."
              }
            </p>
            <div className="presentation-features">
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <div className="feature-content">
                  <h4>Déploiement Rapide</h4>
                  <p>Opérationnel en quelques heures</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🔒</div>
                <div className="feature-content">
                  <h4>Sécurité Maximale</h4>
                  <p>Données protégées et conformes RGPD</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🔄</div>
                <div className="feature-content">
                  <h4>Maintenance Incluse</h4>
                  <p>Support et mises à jour continues</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process and Benefits Grid */}
        <div className="solution-grid">
          {/* Process Section */}
          <div className="process-section">
            <div className="section-header">
              <h3>
                <span className="header-icon">📋</span>
                Processus étape par étape
              </h3>
              <p>Un déploiement structuré pour des résultats garantis</p>
            </div>
            <div className="process-steps">
              {currentSolution.process.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number" style={{ backgroundColor: currentSolution.color }}>
                    {index + 1}
                  </div>
                  <div className="step-content">
                    <h4>{step}</h4>
                    <p>Validation et test inclus à chaque étape</p>
                  </div>
                  {index < currentSolution.process.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <div className="section-header">
              <h3>
                <span className="header-icon">✅</span>
                Avantages Concrets
              </h3>
              <p>Des résultats mesurables dès les premières semaines</p>
            </div>
            <div className="benefits-grid">
              {currentSolution.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon" style={{ color: currentSolution.color }}>
                    {benefit.icon}
                  </div>
                  <div className="benefit-content">
                    <h4>{benefit.text}</h4>
                    <p>Impact direct sur vos indicateurs clés</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="technologies-section">
          <div className="section-header">
            <h3>
              <FaTools className="header-icon" />
              Technologies Utilisées
            </h3>
            <p>Stack technique de pointe pour des performances optimales</p>
          </div>
          <div className="tech-categories">
            {Object.values(currentSolution.technologies.reduce((acc, tech) => {
              if (!acc[tech.category]) {
                acc[tech.category] = { category: tech.category, technologies: [] };
              }
              acc[tech.category].technologies.push(tech.name);
              return acc;
            }, {})).map((category, index) => (
              <div key={index} className="tech-category">
                <h4 style={{ color: currentSolution.color }}>{category.category}</h4>
                <div className="tech-tags">
                  {category.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag" style={{ borderColor: currentSolution.color }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="roi-section">
          <div className="section-header">
            <h3>
              <FaChartLine className="header-icon" />
              Impact & Retour sur Investissement
            </h3>
            <p>Des résultats mesurés sur nos clients actuels</p>
          </div>
          <div className="roi-grid">
            {currentSolution.roi.map((item, index) => (
              <div key={index} className="roi-card">
                <div className="roi-value" style={{ color: currentSolution.color }}>
                  {item.value}
                </div>
                <div className="roi-label">{item.label}</div>
                <div className="roi-description">
                  Amélioration mesurable dès le premier mois
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="solution-cta">
        <div className="cta-content">
          <div className="cta-header">
            <h2>🚀 Prêt à transformer votre entreprise ?</h2>
            <p>
              Nous vous accompagnons de l'audit à l'implémentation, 
              avec formation, support et garantie de résultats.
            </p>
          </div>
          <div className="cta-benefits">
            <div className="cta-benefit">
              <FaCheckCircle className="benefit-icon" />
              <span>Audit personnalisé gratuit</span>
            </div>
            <div className="cta-benefit">
              <FaCheckCircle className="benefit-icon" />
              <span>Démo sur vos données</span>
            </div>
            <div className="cta-benefit">
              <FaCheckCircle className="benefit-icon" />
              <span>Garantie satisfaction</span>
            </div>
          </div>
        </div>
        <div className="cta-actions">
          <button className="cta-btn primary-cta">
            Demander une démonstration personnalisée
            <span className="cta-arrow">→</span>
          </button>
          <button className="cta-btn secondary-cta">
            <FaFileExcel />
            Télécharger notre documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodeSamples;