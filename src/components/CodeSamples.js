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
  FaChartLine,
  FaCogs,
  FaSync,
  FaUsers,
  FaFileExcel,
  FaGraduationCap,
  FaLaptop,
  FaBook,
  FaUserGraduate,
  FaCertificate,
  FaHandsHelping,
  FaProjectDiagram,
  FaBrain,
  FaCode,
  FaNetworkWired
} from 'react-icons/fa';
import './CodeSamples.css';

const CodeSamples = () => {
  const [activeTab, setActiveTab] = useState('excel-ia');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const solutions = {
    'excel-ia': {
      title: "Excel & IA : Automatisation Avancée",
      icon: <FaFileExcel />,
      subtitle: "Maîtrisez Excel avec l'IA pour automatiser vos tâches quotidiennes",
      duration: "Formation: 20 heures",
      color: "#059669",
      hasVideo: true,
      videoFile: "excel-ia-demo.mp4",
      
      process: [
        "Découverte des outils d'automatisation Excel",
        "Maîtrise des fonctions avancées (Power Query, Power Pivot)",
        "Intégration d'IA avec Excel via Python/API",
        "Automatisation de rapports et dashboards",
        "Projet final : Système automatisé de reporting"
      ],
      
      benefits: [
        { icon: <FaClock />, text: "Gain de temps quotidien significatif" },
        { icon: <FaCogs />, text: "Automatisation de tâches répétitives" },
        { icon: <FaChartLine />, text: "Analyses de données optimisées" },
        { icon: <FaBrain />, text: "Intégration IA dans vos workflows" }
      ],
      
      technologies: [
        { name: "Excel Avancé", category: "Outil" },
        { name: "Power Query", category: "Transformation" },
        { name: "Power Pivot", category: "Analyse" },
        { name: "Python", category: "IA" },
        { name: "API REST", category: "Intégration" }
      ],
      
      roi: [
        { value: "70%", label: "Temps de traitement réduit" },
        { value: "100%", label: "Automatisation des rapports" },
        { value: "3x", label: "Productivité augmentée" },
        { value: "Expert", label: "Niveau atteint" }
      ]
    },
    
    'crm-automation': {
      title: "Automatisation CRM & Marketing",
      icon: <FaRobot />,
      subtitle: "Automatisez vos processus commerciaux et marketing",
      duration: "Formation: 25 heures",
      color: "#7C3AED",
      hasVideo: false,
      
      process: [
        "Audit de vos processus actuels",
        "Configuration des outils no-code",
        "Automatisation des workflows marketing",
        "Intégration multi-plateformes",
        "Analyse et optimisation continue"
      ],
      
      benefits: [
        { icon: <FaRocket />, text: "Processus 100% automatisés" },
        { icon: <FaUsers />, text: "Expérience client améliorée" },
        { icon: <FaSync />, text: "Synchronisation temps réel" },
        { icon: <FaChartBar />, text: "ROI marketing mesurable" }
      ],
      
      technologies: [
        { name: "Make.com", category: "Automation" },
        { name: "HubSpot", category: "CRM" },
        { name: "Zapier", category: "Intégration" },
        { name: "Google Sheets", category: "Données" },
        { name: "Slack/Discord", category: "Communication" }
      ],
      
      roi: [
        { value: "40%", label: "Temps commercial gagné" },
        { value: "35%", label: "Conversion augmentée" },
        { value: "24/7", label: "Opérationnel" },
        { value: "90%", label: "Erreurs réduites" }
      ]
    },
    
    'web-development': {
      title: "Développement Web Moderne",
      icon: <FaCode />,
      subtitle: "Apprenez à créer des sites web et applications performantes",
      duration: "Formation: 40 heures",
      color: "#2563EB",
      hasVideo: false,
      
      process: [
        "Fondamentaux du HTML/CSS/JavaScript",
        "Frameworks modernes (React, Vue.js)",
        "Backend avec Node.js et bases de données",
        "Déploiement et hébergement",
        "Projet réel de A à Z"
      ],
      
      benefits: [
        { icon: <FaLaptop />, text: "Création de sites web complets" },
        { icon: <FaNetworkWired />, text: "Développement full-stack" },
        { icon: <FaProjectDiagram />, text: "Gestion de projets réels" },
        { icon: <FaCertificate />, text: "Certification reconnue" }
      ],
      
      technologies: [
        { name: "HTML5/CSS3", category: "Frontend" },
        { name: "JavaScript ES6+", category: "Langage" },
        { name: "React.js", category: "Framework" },
        { name: "Node.js", category: "Backend" },
        { name: "MongoDB", category: "Base de données" }
      ],
      
      roi: [
        { value: "100%", label: "Sites web créés" },
        { value: "Pro", label: "Niveau développeur" },
        { value: "Portfolio", label: "Projets concrets" },
        { value: "Emploi", label: "Opportunités créées" }
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
          <FaGraduationCap /> DÉMONSTRATIONS DE FORMATIONS
        </div>
        <h1 className="solutions-title">
          Formations Professionnelles
          <span className="title-sub">Prêtes à Déployer</span>
        </h1>
        <p className="solutions-intro">
          Découvrez nos formations pratiques et concrètes, conçues pour 
          vous donner des compétences immédiatement applicables en entreprise.
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
              {tab === 'excel-ia' && 'Excel & IA'}
              {tab === 'crm-automation' && 'CRM Automatisé'}
              {tab === 'web-development' && 'Développement Web'}
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
                  <FaUserGraduate />
                  <span>Formation Pratique</span>
                </div>
                <div className="meta-tag">
                  <FaCertificate />
                  <span>Certification Incluse</span>
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
                    <span>Démonstration de Formation</span>
                  </div>
                  <div className="video-description">
                    Extrait de notre formation Excel & IA
                  </div>
                </div>
              </div>
            </div>

            <div className="video-highlights">
              <h3>🎯 Ce que vous apprendrez</h3>
              <div className="highlight-list">
                <div className="highlight-item">
                  <div className="highlight-icon">📊</div>
                  <div className="highlight-content">
                    <h4>Excel Avancé</h4>
                    <p>Formules complexes, tableaux croisés dynamiques</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🤖</div>
                  <div className="highlight-content">
                    <h4>Intégration IA</h4>
                    <p>Connecter Excel à des modèles d'intelligence artificielle</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-content">
                    <h4>Automatisation</h4>
                    <p>Macros et scripts pour automatiser vos tâches</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📈</div>
                  <div className="highlight-content">
                    <h4>Reporting</h4>
                    <p>Création de dashboards interactifs et automatiques</p>
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
              <h3>✨ Formation Professionnelle</h3>
            </div>
            <p className="presentation-description">
              {activeTab === 'crm-automation' 
                ? "Maîtrisez l'automatisation de vos processus commerciaux et marketing. Apprenez à connecter vos outils, automatiser les workflows, et analyser les performances pour optimiser votre ROI."
                : "Devenez développeur web full-stack en maîtrisant les technologies modernes. Créez des applications web complètes, de la conception frontend au backend, avec des projets concrets."
              }
            </p>
            <div className="presentation-features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h4>Pratique</h4>
                  <p>Exercices et projets réels</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">👨‍🏫</div>
                <div className="feature-content">
                  <h4>Accompagnement</h4>
                  <p>Formateurs experts disponibles</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">📚</div>
                <div className="feature-content">
                  <h4>Ressources</h4>
                  <p>Documentation complète fournie</p>
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
                Programme de Formation
              </h3>
              <p>Un apprentissage structuré pour des résultats garantis</p>
            </div>
            <div className="process-steps">
              {currentSolution.process.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number" style={{ backgroundColor: currentSolution.color }}>
                    {index + 1}
                  </div>
                  <div className="step-content">
                    <h4>{step}</h4>
                    <p>Exercices pratiques et évaluations</p>
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
                Compétences Acquises
              </h3>
              <p>Des compétences immédiatement applicables en entreprise</p>
            </div>
            <div className="benefits-grid">
              {currentSolution.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon" style={{ color: currentSolution.color }}>
                    {benefit.icon}
                  </div>
                  <div className="benefit-content">
                    <h4>{benefit.text}</h4>
                    <p>Application directe dans votre travail</p>
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
              <FaBook className="header-icon" />
              Technologies Maîtrisées
            </h3>
            <p>Stack technique complète enseignée pendant la formation</p>
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
              Résultats Attendus
            </h3>
            <p>Les bénéfices concrets de cette formation</p>
          </div>
          <div className="roi-grid">
            {currentSolution.roi.map((item, index) => (
              <div key={index} className="roi-card">
                <div className="roi-value" style={{ color: currentSolution.color }}>
                  {item.value}
                </div>
                <div className="roi-label">{item.label}</div>
                <div className="roi-description">
                  Compétence maîtrisée et applicable
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
            <h2>🚀 Prêt à développer vos compétences ?</h2>
            <p>
              Nous vous formons aux technologies les plus demandées du marché, 
              avec un accompagnement personnalisé et des projets concrets.
            </p>
          </div>
          <div className="cta-benefits">
            <div className="cta-benefit">
              <FaCheckCircle className="benefit-icon" />
              <span>Formation pratique et concrète</span>
            </div>
            <div className="cta-benefit">
              <FaCheckCircle className="benefit-icon" />
              <span>Certification reconnue</span>
            </div>
            <div className="cta-benefit">
              <FaCheckCircle className="benefit-icon" />
              <span>Support post-formation</span>
            </div>
          </div>
        </div>
        <div className="cta-actions">
          <button className="cta-btn primary-cta">
            Demander le programme complet
            <span className="cta-arrow">→</span>
          </button>
          <button className="cta-btn secondary-cta">
            <FaHandsHelping />
            Contactez un conseiller
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodeSamples;