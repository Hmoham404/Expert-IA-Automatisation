import React, { useState } from 'react';
import './IAAdvantages.css';

const IAAdvantages = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);

  const advantages = [
    {
      icon: "⏱️",
      title: "Gain de temps radical",
      description: "Automatisez jusqu'à 48% de vos tâches répétitives",
      keyPoints: [
        {
          title: "Intelligence des flux",
          desc: "Automatisation complète des processus métier"
        },
        {
          title: "Reporting instantané",
          desc: "Données disponibles en temps réel"
        },
        {
          title: "Synchronisation intelligente",
          desc: "Des données entre outils et services"
        }
      ],
      result: "Jusqu'à 48% de temps gagné sur les tâches répétitives",
      percentage: "48%",
      color: "#3498db"
    },
    {
      icon: "💰",
      title: "ROI immédiat et mesurable",
      description: "Retour sur investissement dès le premier mois",
      keyPoints: [
        {
          title: "Optimisation logicielle",
          desc: "Moins d'outils, plus d'efficacité"
        },
        {
          title: "Valorisation du capital humain",
          desc: "Les équipes se concentrent sur les tâches à forte valeur"
        },
        {
          title: "Zéro hallucination",
          desc: "Agents IA contrôlés, fiables et vérifiables"
        }
      ],
      result: "Retour sur investissement dès le premier mois",
      percentage: "1 mois",
      color: "#27ae60"
    },
    {
      icon: "🧩",
      title: "Innovation accessible à tous",
      description: "L'IA devient simple, utilisable et maîtrisée",
      keyPoints: [
        {
          title: "Architecture No-Code",
          desc: "Aucune compétence technique requise"
        },
        {
          title: "Bibliothèque d'agents IA métier",
          desc: "RH, Finance, Marketing, Qualité…"
        },
        {
          title: "Accompagnement expert",
          desc: "Avant, pendant et après la formation"
        }
      ],
      result: "L'IA devient simple, utilisable et maîtrisée",
      percentage: "0 code",
      color: "#9b59b6"
    },
    {
      icon: "📊",
      title: "Décision éclairée et stratégique",
      description: "Des décisions rapides, fiables et justifiées",
      keyPoints: [
        {
          title: "Analyses prédictives",
          desc: "Basées sur les données réelles de l'entreprise"
        },
        {
          title: "Aide à la décision par IA",
          desc: "Scénarios, risques, opportunités"
        },
        {
          title: "Smart Dashboards",
          desc: "Clairs et personnalisés"
        }
      ],
      result: "Des décisions rapides, fiables et justifiées",
      percentage: "100% data",
      color: "#e74c3c"
    },
    {
      icon: "🏆",
      title: "Avantage concurrentiel durable",
      description: "L'entreprise prend une longueur d'avance sur son marché",
      keyPoints: [
        {
          title: "Barrière technologique",
          desc: "Difficile à copier"
        },
        {
          title: "Expérience client auto-responsive",
          desc: "Réponses rapides, personnalisées, 24/7"
        },
        {
          title: "Culture de l'agilité",
          desc: "Et de l'innovation continue"
        }
      ],
      result: "L'entreprise prend une longueur d'avance sur son marché",
      percentage: "Leader",
      color: "#f39c12"
    }
  ];

  const finalResults = [
    { icon: "⚡", text: "Entreprise plus rapide" },
    { icon: "💰", text: "Plus rentable" },
    { icon: "🧠", text: "Plus intelligente" },
    { icon: "🤖", text: "Plus autonome technologiquement" }
  ];

  const handleWhatsAppClick = (messageType = 'default') => {
    const phoneNumber = "+21623513870";
    
    const messages = {
      default: "Bonjour, je suis intéressé(e) par la formation IA & Automatisation. Je souhaite réserver ma place. Pouvez-vous m'envoyer plus d'informations ?",
      info: "Bonjour, je souhaite avoir plus d'informations sur la formation IA & Automatisation (programme, dates, tarifs). Merci !",
      reservation: "Bonjour, je souhaite réserver ma place pour la prochaine session de formation IA & Automatisation.",
      entreprise: "Bonjour, nous sommes une entreprise intéressée par la formation IA & Automatisation pour plusieurs employés. Pouvez-vous nous contacter ?",
      callback: "Bonjour, je souhaite être rappelé(e) pour discuter de la formation IA & Automatisation. Mon numéro est : "
    };

    const selectedMessage = messages[messageType] || messages.default;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(selectedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="ia-advantages">
      {/* Header avec message principal */}
      <div className="advantages-header">
        <h1 className="main-title">
          🚀 AVANTAGES CLÉS DE LA FORMATION IA & AUTOMATISATION
        </h1>
        <p className="header-subtitle">
          La formation transforme l'IA en levier de performance réelle, pas en gadget.
        </p>
      </div>

      {/* Grille des avantages */}
      <div className="advantages-container">
        {advantages.map((advantage, index) => (
          <div 
            key={index} 
            className="advantage-card"
            style={{ borderTopColor: advantage.color }}
          >
            {/* En-tête de la carte */}
            <div className="advantage-card-header">
              <div className="advantage-icon-container">
                <span className="advantage-main-icon">{advantage.icon}</span>
                <div 
                  className="percentage-badge"
                  style={{ backgroundColor: `${advantage.color}20`, color: advantage.color }}
                >
                  {advantage.percentage}
                </div>
              </div>
              <div className="advantage-title-section">
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            </div>

            {/* Points clés */}
            <div className="advantage-key-points">
              <h4 className="key-points-title">🔑 Points forts :</h4>
              <div className="key-points-grid">
                {advantage.keyPoints.map((point, pointIndex) => (
                  <div key={pointIndex} className="key-point-item">
                    <div className="key-point-header">
                      <span 
                        className="point-bullet"
                        style={{ backgroundColor: advantage.color }}
                      >
                        ✓
                      </span>
                      <strong className="point-title">{point.title}</strong>
                    </div>
                    <p className="point-description">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Résultat */}
            <div 
              className="advantage-result"
              style={{ backgroundColor: `${advantage.color}15`, borderLeftColor: advantage.color }}
            >
              <span className="result-arrow">➡️</span>
              <span className="result-text">{advantage.result}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Section des résultats finaux */}
      <div className="final-results-section">
        <h2 className="results-title">🎯 Résultat final de la formation</h2>
        <div className="results-grid">
          {finalResults.map((result, index) => (
            <div key={index} className="result-item">
              <div className="result-icon">{result.icon}</div>
              <div className="result-text">{result.text}</div>
            </div>
          ))}
        </div>
        <div className="final-message">
          <p>
            <strong>👉 La formation transforme l'IA en levier de performance réelle, pas en gadget.</strong>
          </p>
        </div>
      </div>

      {/* Statistiques d'impact - VERSION AMÉLIORÉE */}
      <div className="impact-stats">
        <h2 className="stats-title">📊 Impact mesurable garanti</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-value">48%</div>
            <div className="stat-label">Temps gagné sur tâches répétitives</div>
            <div className="stat-detail">Automatisation complète</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-value">1 mois</div>
            <div className="stat-label">ROI dès le premier mois</div>
            <div className="stat-detail">Retour sur investissement immédiat</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-value">100%</div>
            <div className="stat-label">Participants autonomes</div>
            <div className="stat-detail">Capacité à créer leurs agents IA</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-value">3x</div>
            <div className="stat-label">Productivité augmentée</div>
            <div className="stat-detail">En moyenne sur 3 mois</div>
          </div>
        </div>
      </div>

      {/* CTA avec WhatsApp */}
      <div className="advantages-cta">
        <div className="cta-content">
          <h3>🚀 Prêt à transformer votre entreprise ?</h3>
          <p>
            Contactez-nous directement sur WhatsApp pour réserver votre place
            ou obtenir plus d'informations.
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span className="contact-text">+216 23 513 870</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <span className="contact-text">Disponible 7j/7 de 9h à 20h</span>
            </div>
          </div>
        </div>
        
        <div className="cta-buttons-container">
          <button 
            className="cta-button primary"
            onClick={() => handleWhatsAppClick('reservation')}
          >
            <span className="button-icon">✅</span>
            Réserver ma place
            <span className="cta-arrow">→</span>
          </button>
          
          <button 
            className="cta-button secondary"
            onClick={() => setShowContactOptions(!showContactOptions)}
          >
            <span className="button-icon">💬</span>
            Autres options de contact
            <span className="cta-arrow">{showContactOptions ? '↑' : '↓'}</span>
          </button>
          
          {showContactOptions && (
            <div className="contact-options">
              <button 
                className="contact-option"
                onClick={() => handleWhatsAppClick('info')}
              >
                <span className="option-icon">📋</span>
                Demander le programme détaillé
              </button>
              
              <button 
                className="contact-option"
                onClick={() => handleWhatsAppClick('entreprise')}
              >
                <span className="option-icon">🏢</span>
                Demande entreprise (plusieurs places)
              </button>
              
              <button 
                className="contact-option"
                onClick={() => handleWhatsAppClick('callback')}
              >
                <span className="option-icon">📞</span>
                Être rappelé par un consultant
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IAAdvantages;