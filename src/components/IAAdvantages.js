import React, { useState } from 'react';
import { 
  FaClock, 
  FaMoneyBillWave, 
  FaPuzzlePiece, 
  FaChartBar, 
  FaTrophy,
  FaBolt,
  FaBrain,
  FaRobot,
  FaCheckCircle,
  FaWhatsapp,
  FaPhone,
  FaCalendarAlt,
  FaUsers,
  FaChartLine,
  FaArrowRight,
  FaCaretDown,
  FaCaretUp,
  FaFileAlt,
  FaBuilding
} from 'react-icons/fa';
import './IAAdvantages.css';

const IAAdvantages = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [activeAdvantage, setActiveAdvantage] = useState(null);

  const advantages = [
    {
      id: 1,
      icon: <FaClock />,
      title: "Gain de temps radical",
      description: "Automatisez jusqu'à 48% de vos tâches répétitives",
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)",
      stats: {
        percentage: "48%",
        label: "Temps gagné"
      },
      keyPoints: [
        {
          title: "Intelligence des flux",
          description: "Automatisation complète des processus métier",
          icon: "🔄"
        },
        {
          title: "Reporting instantané",
          description: "Données disponibles en temps réel",
          icon: "📊"
        },
        {
          title: "Synchronisation intelligente",
          description: "Des données entre outils et services",
          icon: "🔗"
        }
      ],
      outcome: "Jusqu'à 48% de temps gagné sur les tâches répétitives"
    },
    {
      id: 2,
      icon: <FaMoneyBillWave />,
      title: "ROI immédiat et mesurable",
      description: "Retour sur investissement dès le premier mois",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #34D399)",
      stats: {
        percentage: "1 mois",
        label: "ROI"
      },
      keyPoints: [
        {
          title: "Optimisation logicielle",
          description: "Moins d'outils, plus d'efficacité",
          icon: "🛠️"
        },
        {
          title: "Valorisation du capital humain",
          description: "Les équipes se concentrent sur les tâches à forte valeur",
          icon: "👥"
        },
        {
          title: "Agents IA contrôlés",
          description: "Fiables et vérifiables",
          icon: "✅"
        }
      ],
      outcome: "Retour sur investissement dès le premier mois"
    },
    {
      id: 3,
      icon: <FaPuzzlePiece />,
      title: "Innovation accessible à tous",
      description: "L'IA devient simple, utilisable et maîtrisée",
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
      stats: {
        percentage: "0 code",
        label: "No-Code"
      },
      keyPoints: [
        {
          title: "Architecture No-Code",
          description: "Aucune compétence technique requise",
          icon: "🚫💻"
        },
        {
          title: "Bibliothèque d'agents IA métier",
          description: "RH, Finance, Marketing, Qualité…",
          icon: "📚"
        },
        {
          title: "Accompagnement expert",
          description: "Avant, pendant et après la formation",
          icon: "👨‍🏫"
        }
      ],
      outcome: "L'IA devient simple, utilisable et maîtrisée"
    },
    {
      id: 4,
      icon: <FaChartBar />,
      title: "Décision éclairée et stratégique",
      description: "Des décisions rapides, fiables et justifiées",
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)",
      stats: {
        percentage: "100% data",
        label: "Data-Driven"
      },
      keyPoints: [
        {
          title: "Analyses prédictives",
          description: "Basées sur les données réelles de l'entreprise",
          icon: "🔮"
        },
        {
          title: "Aide à la décision par IA",
          description: "Scénarios, risques, opportunités",
          icon: "🎯"
        },
        {
          title: "Smart Dashboards",
          description: "Clairs et personnalisés",
          icon: "📈"
        }
      ],
      outcome: "Des décisions rapides, fiables et justifiées"
    },
    {
      id: 5,
      icon: <FaTrophy />,
      title: "Avantage concurrentiel durable",
      description: "L'entreprise prend une longueur d'avance sur son marché",
      color: "#EF4444",
      gradient: "linear-gradient(135deg, #EF4444, #F87171)",
      stats: {
        percentage: "Leader",
        label: "Position"
      },
      keyPoints: [
        {
          title: "Barrière technologique",
          description: "Difficile à copier",
          icon: "🛡️"
        },
        {
          title: "Expérience client auto-responsive",
          description: "Réponses rapides, personnalisées, 24/7",
          icon: "⚡"
        },
        {
          title: "Culture de l'agilité",
          description: "Et de l'innovation continue",
          icon: "🚀"
        }
      ],
      outcome: "L'entreprise prend une longueur d'avance sur son marché"
    }
  ];

  const finalResults = [
    { icon: <FaBolt />, title: "Entreprise plus rapide", description: "Processus optimisés" },
    { icon: <FaMoneyBillWave />, title: "Plus rentable", description: "ROI amélioré" },
    { icon: <FaBrain />, title: "Plus intelligente", description: "Décisions data-driven" },
    { icon: <FaRobot />, title: "Plus autonome", description: "Technologiquement indépendante" }
  ];

  const impactStats = [
    { value: "48%", label: "Temps gagné", description: "Sur tâches répétitives", icon: <FaClock /> },
    { value: "1 mois", label: "ROI", description: "Dès le premier mois", icon: <FaMoneyBillWave /> },
    { value: "100%", label: "Autonomie", description: "Participants opérationnels", icon: <FaUsers /> },
    { value: "3x", label: "Productivité", description: "Augmentée en moyenne", icon: <FaChartLine /> }
  ];

  const handleWhatsAppClick = (messageType = 'default') => {
    const phoneNumber = "+21623513870";
    
    const messages = {
      default: "Bonjour, je suis intéressé(e) par la formation IA & Automatisation. Je souhaite réserver ma place. Pouvez-vous m'envoyer plus d'informations ?",
      info: "Bonjour, je souhaite avoir plus d'informations sur la formation IA & Automatisation (programme, dates, tarifs). Merci !",
      reservation: "Bonjour, je souhaite réserver ma place pour la prochaine session de formation IA & Automatisation.",
      entreprise: "Bonjour, nous sommes une entreprise intéressée par la formation IA & Automatisation pour plusieurs employés. Pouvez-vous nous contacter ?",
      callback: "Bonjour, je souhaite être rappelé(e) pour discuter de la formation IA & Automatisation."
    };

    const selectedMessage = messages[messageType] || messages.default;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(selectedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleAdvantage = (id) => {
    setActiveAdvantage(activeAdvantage === id ? null : id);
  };

  return (
    <section id="avantages" className="ia-advantages">
      {/* Header Section */}
      <div className="advantages-header">
        <div className="header-content">
          <div className="header-badge">
            <FaChartLine /> AVANTAGES STRATÉGIQUES
          </div>
          <h1 className="main-title">
            Transformez l'IA en levier de performance réelle
          </h1>
          <p className="header-subtitle">
            Notre formation ne vous apprend pas seulement à utiliser l'IA, 
            mais à la transformer en avantage concurrentiel durable pour votre entreprise.
          </p>
        </div>
      </div>

      {/* Advantages Grid */}
      <div className="advantages-grid">
        {advantages.map((advantage) => (
          <div 
            key={advantage.id} 
            className={`advantage-card ${activeAdvantage === advantage.id ? 'expanded' : ''}`}
            onClick={() => toggleAdvantage(advantage.id)}
          >
            {/* Card Header */}
            <div className="card-header">
              <div className="advantage-icon-container" style={{ background: advantage.gradient }}>
                {advantage.icon}
              </div>
              <div className="advantage-title-section">
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
              <div className="stats-badge" style={{ borderColor: advantage.color }}>
                <div className="stats-value">{advantage.stats.percentage}</div>
                <div className="stats-label">{advantage.stats.label}</div>
              </div>
            </div>

            {/* Expanded Content */}
            {activeAdvantage === advantage.id && (
              <div className="card-content">
                {/* Key Points */}
                <div className="key-points-section">
                  <h4 className="section-title">
                    <FaCheckCircle className="section-icon" />
                    Points clés
                  </h4>
                  <div className="key-points-grid">
                    {advantage.keyPoints.map((point, index) => (
                      <div key={index} className="key-point-card">
                        <div className="point-icon">{point.icon}</div>
                        <div className="point-content">
                          <h5>{point.title}</h5>
                          <p>{point.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="outcome-section" style={{ borderLeftColor: advantage.color }}>
                  <div className="outcome-icon">
                    <FaArrowRight />
                  </div>
                  <div className="outcome-content">
                    <h5>Résultat concret</h5>
                    <p>{advantage.outcome}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Expand/Collapse Indicator */}
            <div className="expand-indicator">
              {activeAdvantage === advantage.id ? <FaCaretUp /> : <FaCaretDown />}
            </div>
          </div>
        ))}
      </div>

      {/* Impact Stats */}
      <div className="impact-section">
        <div className="section-header">
          <h2>
            <FaChartLine className="section-icon" />
            Impact mesurable garanti
          </h2>
          <p>Des résultats concrets que nous nous engageons à atteindre</p>
        </div>
        <div className="stats-grid">
          {impactStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ color: advantages[index].color }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Results */}
      <div className="results-section">
        <div className="section-header">
          <h2>
            <FaTrophy className="section-icon" />
            Résultat final de la formation
          </h2>
          <p>Votre entreprise après la formation</p>
        </div>
        <div className="results-grid">
          {finalResults.map((result, index) => (
            <div key={index} className="result-card">
              <div className="result-icon" style={{ color: advantages[index].color }}>
                {result.icon}
              </div>
              <div className="result-content">
                <h4>{result.title}</h4>
                <p>{result.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="final-statement">
          <div className="statement-icon">🎯</div>
          <div className="statement-content">
            <h3>La formation transforme l'IA en levier de performance réelle, pas en gadget.</h3>
            <p>Une approche concrète pour des résultats mesurables</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <div className="cta-badge">
              <FaWhatsapp /> CONTACT DIRECT
            </div>
            <h2>Prêt à transformer votre entreprise ?</h2>
            <p>
              Contactez-nous directement sur WhatsApp pour réserver votre place 
              ou obtenir plus d'informations.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <strong>+216 23 513 870</strong>
                  <small>Disponible 7j/7 de 9h à 20h</small>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaCalendarAlt />
                </div>
                <div className="contact-details">
                  <strong>Prochaine session</strong>
                  <small>12 places disponibles</small>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-actions">
            {/* Primary CTA */}
            <button 
              className="cta-btn primary-cta"
              onClick={() => handleWhatsAppClick('reservation')}
            >
              <FaWhatsapp className="cta-icon" />
              <div className="cta-text">
                <span className="cta-title">Réserver ma place</span>
                <span className="cta-subtitle">WhatsApp direct</span>
              </div>
              <FaArrowRight className="cta-arrow" />
            </button>

            {/* Toggle Contact Options */}
            <button 
              className="cta-btn secondary-cta"
              onClick={() => setShowContactOptions(!showContactOptions)}
            >
              <div className="cta-icon">💬</div>
              <div className="cta-text">
                <span className="cta-title">Autres options de contact</span>
              </div>
              {showContactOptions ? <FaCaretUp /> : <FaCaretDown />}
            </button>

            {/* Contact Options */}
            {showContactOptions && (
              <div className="contact-options">
                <button 
                  className="contact-option"
                  onClick={() => handleWhatsAppClick('info')}
                >
                  <FaFileAlt className="option-icon" />
                  <div className="option-content">
                    <span>Demander le programme détaillé</span>
                    <small>PDF complet avec modules</small>
                  </div>
                </button>
                
                <button 
                  className="contact-option"
                  onClick={() => handleWhatsAppClick('entreprise')}
                >
                  <FaBuilding className="option-icon" />
                  <div className="option-content">
                    <span>Demande entreprise</span>
                    <small>Plusieurs places, devis groupé</small>
                  </div>
                </button>
                
                <button 
                  className="contact-option"
                  onClick={() => handleWhatsAppClick('callback')}
                >
                  <FaPhone className="option-icon" />
                  <div className="option-content">
                    <span>Être rappelé</span>
                    <small>Par un consultant spécialisé</small>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IAAdvantages;