import React from 'react';
import './Formation.css';

const WorkflowIAFormation = () => {
  // Données principales
  const formationsData = {
    header: {
      title: "🎓 Formations Expert en Automatisation IA",
      subtitle: "De l'automatisation basique aux Super Agents IA avancés",
      description: "Formations certifiantes pour transformer vos processus métier grâce à l'IA"
    },

    formations: [
      {
        id: 1,
        niveau: "DÉBUTANT",
        icon: "🚀",
        titre: "Workflow IA Automation - Niveau Débutant",
        sousTitre: "Automatisez et simplifiez vos tâches et boostez votre productivité en entreprise",
        duree: "24 heures",
        couleur: "#2563EB", // Bleu roi
        badgeColor: "#1D4ED8",
        resultat: "Faire gagner du temps à vos équipes dans des tâches répétitives et économiser votre budget de production",
        
        objectifs: [
          "Comprendre les bases de l'automatisation de tâches grâce à l'IA",
          "Être capable de créer des automatisations simples et efficaces",
          "Avoir une méthodologie pour repérer et automatiser les tâches répétitives",
          "Gagner en productivité et en fiabilité au quotidien"
        ],

        prerequis: [
          "Disposer d'une bonne connexion Internet",
          "Avoir un ordinateur portable (Windows, Mac, Linux)",
          "Aucun prérequis technique en programmation nécessaire",
          "Être à l'aise avec l'utilisation de base d'un ordinateur"
        ],

        modules: [
          {
            id: 1,
            titre: "Module 1 | Les fondamentaux des workflows IA",
            icon: "📚",
            points: [
              "Qu'est-ce qu'un workflow d'automatisation ?",
              "Pourquoi et comment automatiser ses tâches ?",
              "Comprendre les outils no-code et low-code",
              "Identifier les processus internes automatisables"
            ]
          },
          {
            id: 2,
            titre: "Module 2 | Cas pratiques d'automatisation",
            icon: "🔧",
            points: [
              "Automatiser la gestion de tâches et la prise de rendez-vous",
              "Automatiser la synchronisation entre bases de données et formulaires",
              "Créer des séquences automatiques de communication",
              "Concevoir et tester ses premiers workflows"
            ]
          },
          {
            id: 3,
            titre: "Module 3 | Mise en place de workflows personnalisés",
            icon: "⚙️",
            points: [
              "Choisir les bons outils selon son activité",
              "Créer des workflows simples avec des outils no-code",
              "Automatiser des tâches récurrentes : emails, documents",
              "Optimiser ses flux de travail"
            ]
          },
          {
            id: 4,
            titre: "Module 4 | Aller plus loin",
            icon: "🚀",
            points: [
              "Introduction aux API pour les débutants",
              "Construire une logique d'optimisation continue",
              "Développer une culture de l'optimisation par l'IA",
              "Identifier les tâches à haute valeur d'automatisation"
            ]
          }
        ],

        resultats: [
          {
            icon: "🤖",
            titre: "Créer des automatisations",
            description: "Des workflows simples et efficaces"
          },
          {
            icon: "🔍",
            titre: "Identifier les tâches",
            description: "Repérer les processus automatisables"
          },
          {
            icon: "⚡",
            titre: "Gagner en productivité",
            description: "Jusqu'à 10h par semaine"
          },
          {
            icon: "🔄",
            titre: "Automatiser les routines",
            description: "Tâches récurrentes automatisées"
          }
        ],

        outils: ["Make", "Zapier", "Airtable", "Notion", "ChatGPT"]
      },

      {
        id: 2,
        niveau: "AVANCÉ",
        icon: "⚡",
        titre: "Workflow IA Automation - Niveau Avancé",
        sousTitre: "Dominez l'automatisation IA : créez vos Super Agents et boostez votre activité",
        duree: "24 heures",
        couleur: "#4F46E5", // Violet bleu
        badgeColor: "#4338CA",
        resultat: "Être capable de concevoir, déployer et superviser un Super Agent IA opérationnel, adapté à son métier",
        
        objectifs: [
          "Comprendre les Super Agents IA et leur valeur business",
          "Concevoir un Super Agent IA modulaire et scalable",
          "Maîtriser N8n pour centraliser et déclencher les actions",
          "Être capable d'héberger ses propres agents IA",
          "Déployer un agent IA opérationnel adapté à son métier"
        ],

        prerequis: [
          "Bonne compréhension des workflows d'automatisation",
          "Expérience avec Make, Zapier ou N8n",
          "Connaissance des bases de l'IA",
          "Ordinateur portable avec bonnes performances"
        ],

        modules: [
          {
            id: 1,
            titre: "Module 1 | Super Agent IA – Concepts & Structure",
            icon: "🏗️",
            points: [
              "Différence entre automatisation classique et intelligence distribuée",
              "Nouveaux paradigmes d'outillage (LLMs, API, graphes d'agents)",
              "Architecture type d'un agent (inputs, mémoire, outputs)",
              "Comprendre la logique de 'Super Agent' : tâches, rôles, délégation"
            ]
          },
          {
            id: 2,
            titre: "Module 2 | Créer et configurer les sous-agents IA",
            icon: "🤖",
            points: [
              "Définir les rôles (recherche, synthèse, action, supervision...)",
              "Concevoir des prompts spécifiques et chaînables",
              "Scénariser les interactions agent ↔ utilisateur ↔ API",
              "Paramétrer et orchestrer des sous-agents spécialisés"
            ]
          },
          {
            id: 3,
            titre: "Module 3 | Tester, intégrer et publier votre Super Agent",
            icon: "🧪",
            points: [
              "Cas pratique : intégration dans une stack métier réelle",
              "Tester les chemins critiques et les retours utilisateur",
              "Versionner et documenter votre agent",
              "Dashboard de supervision & logs dans N8n"
            ]
          },
          {
            id: 4,
            titre: "Module 4 | Héberger vos agents IA",
            icon: "☁️",
            points: [
              "Pourquoi héberger ses agents ? (confidentialité, personnalisation, coût)",
              "Présentation des options : Ollama, LangChain + FastAPI",
              "Dockerisation et déploiement (local, cloud, VPS)",
              "Bonnes pratiques pour industrialiser"
            ]
          },
          {
            id: 5,
            titre: "Module 5 | Stratégie d'implémentation",
            icon: "🎯",
            points: [
              "Identifier d'autres cas à automatiser dans l'entreprise",
              "Méthodologie d'audit de processus",
              "Plan d'implémentation progressive",
              "Introduction à l'orchestration multi-agents"
            ]
          }
        ],

        resultats: [
          {
            icon: "🏗️",
            titre: "Architecture scalable",
            description: "Concevoir des Super Agents modulaires"
          },
          {
            icon: "🔧",
            titre: "Maîtriser N8n",
            description: "Centraliser et déclencher les actions"
          },
          {
            icon: "☁️",
            titre: "Héberger ses agents",
            description: "Solutions locales et cloud"
          },
          {
            icon: "📊",
            titre: "Automatiser des processus complexes",
            description: "À forte valeur ajoutée"
          }
        ],

        outils: ["N8n", "LangChain", "Ollama", "Docker", "FastAPI"]
      }
    ],

    admission: {
      titre: "📝 Procédure d'admission",
      steps: [
        {
          number: "01",
          title: "Évaluation initiale",
          description: "Analyse des besoins et de l'environnement du participant"
        },
        {
          number: "02",
          title: "Test de positionnement",
          description: "Validation de l'adéquation avec la formation choisie"
        },
        {
          number: "03",
          title: "Personnalisation",
          description: "Adaptation du contenu aux besoins spécifiques"
        }
      ]
    },

    avantages: [
      {
        icon: "🎯",
        title: "Formation pratique",
        description: "100% orientée sur des cas concrets métier"
      },
      {
        icon: "👨‍🏫",
        title: "Expert certifié",
        description: "Formateur avec 10+ ans d'expérience en IA"
      },
      {
        icon: "📈",
        title: "ROI garanti",
        description: "Retour sur investissement mesurable dès 1 mois"
      },
      {
        icon: "🔄",
        title: "Suivi post-formation",
        description: "Accompagnement pendant 3 mois après la formation"
      }
    ]
  };

  return (
    <div className="workflow-formation">
      {/* Header Hero Section */}
      <header className="formation-hero">
        <div className="hero-content">
          <div className="hero-badge">🎓 FORMATIONS CERTIFIANTES</div>
          <h1 className="hero-title">{formationsData.header.title}</h1>
          <p className="hero-subtitle">{formationsData.header.subtitle}</p>
          <p className="hero-description">{formationsData.header.description}</p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">48h</div>
              <div className="stat-label">de formation totale</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">pratique</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">2</div>
              <div className="stat-label">niveaux certifiants</div>
            </div>
          </div>
        </div>
      </header>

      {/* Avantages Section */}
      <section className="avantages-section">
        <div className="section-header">
          <h2>✨ Pourquoi choisir nos formations ?</h2>
          <p>Des formations conçues pour des résultats immédiats et durables</p>
        </div>
        <div className="avantages-grid">
          {formationsData.avantages.map((avantage, index) => (
            <div key={index} className="avantage-card">
              <div className="avantage-icon">{avantage.icon}</div>
              <h3>{avantage.title}</h3>
              <p>{avantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formations Section */}
      {formationsData.formations.map((formation) => (
        <section key={formation.id} className="formation-section">
          <div className="formation-header">
            <div className="formation-badge" style={{ backgroundColor: formation.badgeColor }}>
              {formation.icon} NIVEAU {formation.niveau}
            </div>
            <h2 className="formation-title">{formation.titre}</h2>
            <p className="formation-subtitle">{formation.sousTitre}</p>
            
            <div className="formation-meta">
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <span>{formation.duree}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🎯</span>
                <span>Résultat: {formation.resultat}</span>
              </div>
            </div>
          </div>

          <div className="formation-content">
            {/* Objectifs et Prérequis */}
            <div className="objectifs-prerequis">
              <div className="objectifs-card">
                <div className="card-header">
                  <span className="card-icon">🎯</span>
                  <h3>Objectifs pédagogiques</h3>
                </div>
                <div className="card-content">
                  {formation.objectifs.map((objectif, index) => (
                    <div key={index} className="objectif-item">
                      <div className="objectif-check">✓</div>
                      <span>{objectif}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="prerequis-card">
                <div className="card-header">
                  <span className="card-icon">📋</span>
                  <h3>Prérequis</h3>
                </div>
                <div className="card-content">
                  {formation.prerequis.map((prerequis, index) => (
                    <div key={index} className="prerequis-item">
                      <div className="prerequis-dot"></div>
                      <span>{prerequis}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modules de formation */}
            <div className="modules-section">
              <div className="section-header">
                <h3>📚 Programme détaillé de la formation</h3>
                <p>Un parcours progressif pour maîtriser chaque compétence</p>
              </div>
              <div className="modules-grid">
                {formation.modules.map((module) => (
                  <div key={module.id} className="module-card">
                    <div className="module-header">
                      <span className="module-icon">{module.icon}</span>
                      <h4>{module.titre}</h4>
                    </div>
                    <div className="module-content">
                      {module.points.map((point, index) => (
                        <div key={index} className="module-point">
                          <div className="point-marker"></div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="module-footer">
                      <span className="duration-badge">Durée: ~{formation.duree / formation.modules.length}h</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Résultats et Outils */}
            <div className="resultats-outils">
              <div className="resultats-card">
                <div className="card-header">
                  <span className="card-icon">✅</span>
                  <h3>Résultats attendus</h3>
                </div>
                <div className="resultats-grid">
                  {formation.resultats.map((resultat, index) => (
                    <div key={index} className="resultat-item">
                      <div className="resultat-icon">{resultat.icon}</div>
                      <div className="resultat-content">
                        <h4>{resultat.titre}</h4>
                        <p>{resultat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="outils-card">
                <div className="card-header">
                  <span className="card-icon">🛠️</span>
                  <h3>Outils utilisés</h3>
                </div>
                <div className="outils-grid">
                  {formation.outils.map((outil, index) => (
                    <div key={index} className="outil-item">
                      <div className="outil-name">{outil}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Procédure d'admission */}
      <section className="admission-section">
        <div className="section-header">
          <h2>{formationsData.admission.titre}</h2>
          <p>Un processus simple pour garantir la qualité et la pertinence de la formation</p>
        </div>
        <div className="admission-steps">
          {formationsData.admission.steps.map((step, index) => (
            <div key={index} className="admission-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < formationsData.admission.steps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à transformer vos processus avec l'IA ?</h2>
          <p>Contactez-nous pour une évaluation gratuite de vos besoins</p>
          <div className="cta-buttons">
            <button className="btn-primary">📞 Demander un devis</button>
            <button className="btn-secondary">📅 Réserver un audit gratuit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkflowIAFormation;