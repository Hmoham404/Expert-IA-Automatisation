import React from 'react';
import './Formation.css';

const ExpertFormation = () => {
  const modules = [
    {
      id: 1,
      title: "IA GÉNÉRALE & AUTOMATISATION MÉTIER",
      subtitle: "Pour tous les profils",
      duration: "6h",
      objectives: [
        "Comprendre l'IA sans théorie compliquée",
        "Utiliser l'IA au travail dès le premier jour",
        "Créer des agents IA personnalisés"
      ],
      content: [
        "IA générative (ChatGPT, Gemini, Claude)",
        "Custom GPT / Agents internes",
        "Prompt Engineering métier",
        "No-Code Automation : Email, Réseaux sociaux, CRM, RH, Support client"
      ],
      practicalCases: [
        "📧 Agent IA qui répond aux emails clients",
        "📱 Agent IA qui publie automatiquement sur Facebook/Instagram/LinkedIn",
        "🏭 Agent qualité qui détecte des erreurs dans des rapports"
      ],
      icon: "🤖"
    },
    {
      id: 2,
      title: "IA LÉGALE & CONFORMITÉ",
      subtitle: "Loi Tunisienne",
      duration: "4h",
      objectives: [
        "Utiliser l'IA en toute légalité",
        "Protéger les données de l'entreprise",
        "Éviter les risques juridiques"
      ],
      content: [
        "Protection des données (RGPD / loi tunisienne)",
        "Données sensibles & IA",
        "IA et contrats",
        "Responsabilité légale de l'entreprise",
        "IA éthique et contrôlée"
      ],
      practicalCases: [
        "📄 Agent IA pour analyser les contrats",
        "🔍 Vérifier la conformité à la loi tunisienne",
        "🛑 Ce qu'il ne faut JAMAIS donner à une IA"
      ],
      icon: "⚖️"
    },
    {
      id: 3,
      title: "IA FINANCE & ANALYSE DES RISQUES",
      subtitle: "Analyse prédictive",
      duration: "4h",
      objectives: [
        "Analyser les données financières",
        "Comprendre les risques",
        "Aider la prise de décision"
      ],
      content: [
        "IA pour analyse financière",
        "Prévision et détection de risques",
        "Lecture intelligente des données Excel/CSV",
        "Scénarios financiers"
      ],
      practicalCases: [
        "💰 Analyse des coûts et bénéfices",
        "📊 Agent IA qui détecte les pertes",
        "⚠️ Prévision de risques financiers"
      ],
      icon: "💰"
    },
    {
      id: 4,
      title: "IA SOW / AGENT D'ANALYSE DE MARCHÉ",
      subtitle: "Marché tunisien & international",
      duration: "4h",
      objectives: [
        "Comprendre le marché",
        "Prendre de meilleures décisions stratégiques"
      ],
      content: [
        "Agent IA d'analyse de marché",
        "Étude concurrentielle",
        "Analyse clients",
        "Tendances locales (Tunisie) & internationales"
      ],
      practicalCases: [
        "📈 Analyse du marché tunisien",
        "🌍 Comparaison avec marchés étrangers",
        "🧠 Aide à la décision stratégique"
      ],
      icon: "🌐"
    }
  ];

  const targetAudience = [
    { role: "👥 Ouvriers & employés", desc: "Utilisation pratique, simplifiée" },
    { role: "👨‍💼 Cadres & staff", desc: "Analyse, décision, automatisation avancée" },
    { role: "🏢 RH – Finance – Marketing", desc: "Départements clés" },
    { role: "👑 Direction – Qualité", desc: "Pilotage stratégique" }
  ];

  const concreteResults = [
    {
      department: "RH",
      result: "Agent IA qui filtre 500 CV et sort les 10 meilleurs",
      benefits: ["Gain de temps énorme", "Réduction des erreurs"]
    },
    {
      department: "Finance",
      result: "Analyse automatique des dépenses",
      benefits: ["Détection des anomalies", "Meilleure rentabilité"]
    },
    {
      department: "Marketing",
      result: "Publications automatiques & Emails intelligents",
      benefits: ["Meilleur engagement client", "Personnalisation"]
    },
    {
      department: "Direction",
      result: "Tableaux de bord IA",
      benefits: ["Décisions plus rapides", "Vision claire"]
    }
  ];

  const advantages = [
    {
      category: "Gain de temps radical",
      icon: "⏱️",
      items: [
        { title: "Intelligence des Flux", desc: "Automatisation intelligente des processus" },
        { title: "Reporting Instantané", desc: "Rapports générés en temps réel" },
        { title: "Synchronisation de Données", desc: "Harmonisation automatique des systèmes" }
      ]
    },
    {
      category: "ROI immédiat",
      icon: "💰",
      items: [
        { title: "Optimisation Logicielle", desc: "Réduction des coûts IT" },
        { title: "Capital Humain", desc: "Focus sur les tâches à valeur ajoutée" },
        { title: "Zéro Hallucination", desc: "Résultats fiables et vérifiés" }
      ]
    },
    {
      category: "Innovation accessible",
      icon: "🚀",
      items: [
        { title: "Architecture No-Code", desc: "Pas de compétences techniques requises" },
        { title: "Bibliothèque d'Agents", desc: "Templates prêts à l'emploi" },
        { title: "Accompagnement Expert", desc: "Support personnalisé continu" }
      ]
    },
    {
      category: "Décision éclairée",
      icon: "📊",
      items: [
        { title: "Analyses Prédictives", desc: "Anticipation des tendances" },
        { title: "Aide à la Décision IA", desc: "Recommandations data-driven" },
        { title: "Smart Dashboards", desc: "Visualisation intuitive des données" }
      ]
    },
    {
      category: "Avantage concurrentiel",
      icon: "🏆",
      items: [
        { title: "Barrière Technologique", desc: "Différenciation durable" },
        { title: "Expérience Client Auto-Responsive", desc: "Adaptation automatique" },
        { title: "Culture de l'Agilité", desc: "Adaptation rapide au marché" }
      ]
    }
  ];

  return (
    <section className="expert-formation">
      {/* Header */}
      <div className="formation-header">
        <h1 className="main-title">
          🎓 Programme de Formation Expert
          <span className="highlight">Intelligence Artificielle & Automatisation No-Code</span>
        </h1>
        <div className="duration-badge">
          ⏱️ 18h à 24h (3-4 jours) • 📅 Suivi après 1 mois • 📄 Rapport final
        </div>
      </div>

      {/* Global Objective */}
      <div className="global-objective">
        <h2>🎯 Objectif Global de la Formation</h2>
        <p className="objective-text">
          Permettre à chaque entreprise de devenir <strong>technologiquement autonome</strong> en créant ses propres agents IA, 
          automatisant les processus internes, et respectant la loi tunisienne — pour un gain immédiat de temps, d'argent et de fiabilité.
        </p>
      </div>

      {/* Architecture Visualization */}
      <div className="architecture-section">
        <h3>🔐 Architecture de Workflow & Sécurité</h3>
        <div className="workflow-diagram">
          <div className="workflow-step">
            <div className="step-icon">🔒</div>
            <div className="step-title">Données internes</div>
            <div className="step-desc">Sources sécurisées</div>
          </div>
          <div className="workflow-arrow">↓</div>
          <div className="workflow-step">
            <div className="step-icon">🤖</div>
            <div className="step-title">Agent IA sécurisé</div>
            <div className="step-desc">Traitement local/cloud</div>
          </div>
          <div className="workflow-arrow">↓</div>
          <div className="workflow-step">
            <div className="step-icon">⚡</div>
            <div className="step-title">No-Code Automation</div>
            <div className="step-desc">Intégration métier</div>
          </div>
          <div className="workflow-arrow">↓</div>
          <div className="workflow-step">
            <div className="step-icon">✅</div>
            <div className="step-title">Résultat métier</div>
            <div className="step-desc">Valeur mesurable</div>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="modules-section">
        <h2>🧩 Structure Globale du Programme</h2>
        <div className="modules-grid">
          {modules.map(module => (
            <div key={module.id} className="module-card">
              <div className="module-header">
                <span className="module-icon">{module.icon}</span>
                <div>
                  <h3>{module.title}</h3>
                  <div className="module-subtitle">{module.subtitle} • {module.duration}</div>
                </div>
              </div>
              
              <div className="module-objectives">
                <h4>🎯 Objectifs</h4>
                <ul>
                  {module.objectives.map((obj, idx) => (
                    <li key={idx}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div className="module-content">
                <h4>📚 Contenu</h4>
                <ul>
                  {module.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="module-cases">
                <h4>🔧 Cas pratiques</h4>
                <ul>
                  {module.practicalCases.map((cas, idx) => (
                    <li key={idx}>{cas}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages Section */}
      <div className="advantages-section">
        <h2>💼 Avantages Business Concrets</h2>
        <div className="advantages-grid">
          {advantages.map((advantage, idx) => (
            <div key={idx} className="advantage-category">
              <div className="category-header">
                <span className="category-icon">{advantage.icon}</span>
                <h3>{advantage.category}</h3>
              </div>
              <div className="category-items">
                {advantage.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="advantage-item">
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audience */}
      <div className="audience-section">
        <h2>👥 Public Cible Personnalisé</h2>
        <div className="audience-grid">
          {targetAudience.map((audience, idx) => (
            <div key={idx} className="audience-card">
              <div className="audience-role">{audience.role}</div>
              <div className="audience-desc">{audience.desc}</div>
              <div className="personalization-badge">➡️ Formation personnalisée selon le métier</div>
            </div>
          ))}
        </div>
      </div>

      {/* Concrete Results */}
      <div className="results-section">
        <h2>🎯 Résultats Concrets Par Département</h2>
        <div className="results-grid">
          {concreteResults.map((result, idx) => (
            <div key={idx} className="result-card">
              <div className="result-department">{result.department}</div>
              <div className="result-achievement">{result.result}</div>
              <div className="result-benefits">
                {result.benefits.map((benefit, bIdx) => (
                  <span key={bIdx} className="benefit-tag">✓ {benefit}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Positioning */}
      <div className="positioning-section">
        <h2>🧠 Positionnement Final</h2>
        <div className="positioning-grid">
          <div className="positioning-item positioning-law">
            <div className="positioning-icon">✅</div>
            <div className="positioning-title">Loi Tunisienne</div>
            <div className="positioning-desc">Conformité garantie</div>
          </div>
          <div className="positioning-item positioning-finance">
            <div className="positioning-icon">✅</div>
            <div className="positioning-title">Finance</div>
            <div className="positioning-desc">ROI mesurable</div>
          </div>
          <div className="positioning-item positioning-security">
            <div className="positioning-icon">✅</div>
            <div className="positioning-title">Sécurité</div>
            <div className="positioning-desc">Données protégées</div>
          </div>
          <div className="positioning-item positioning-results">
            <div className="positioning-icon">✅</div>
            <div className="positioning-title">Résultats réels</div>
            <div className="positioning-desc">Impact immédiat</div>
          </div>
        </div>
        <div className="positioning-statement">
          <strong>👉 IA = Compétitivité + Conformité + Croissance</strong>
        </div>
      </div>

      {/* Post-Formation */}
      <div className="post-formation">
        <h2>📄 Après la Formation</h2>
        <div className="post-grid">
          <div className="post-item">
            <div className="post-icon">📅</div>
            <h4>Suivi après 1 mois</h4>
            <p>Accompagnement continu</p>
          </div>
          <div className="post-item">
            <div className="post-icon">📊</div>
            <h4>Rapport détaillé</h4>
            <p>Ce qui a été mis en place + résultats</p>
          </div>
          <div className="post-item">
            <div className="post-icon">🔄</div>
            <h4>Amélioration continue</h4>
            <p>Optimisation permanente</p>
          </div>
          <div className="post-item">
            <div className="post-icon">🎯</div>
            <h4>Autonomie totale</h4>
            <p>Entreprise technologiquement indépendante</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertFormation;