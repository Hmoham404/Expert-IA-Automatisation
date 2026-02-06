import React from 'react';
import './Formation.css';

const WorkflowIAFormation = () => {
  // Données principales
  const formationsData = {
    header: {
      title: "🎓 Formation Expert en Automatisation IA",
      subtitle: "Maîtrisez l'automatisation intelligente en seulement 3 jours",
      description: "Formation intensive et certifiante pour transformer vos processus métier grâce aux workflows IA"
    },

    formations: [
      {
        id: 1,
        niveau: "ESSENTIEL",
        icon: "🚀",
        titre: "Workflow IA Automation - Formation Essentielle",
        sousTitre: "Apprenez à automatiser vos processus métier en 3 jours intensifs",
        duree: "3 jours intensifs (24 heures)",
        couleur: "#2563EB",
        badgeColor: "#1D4ED8",
        resultat: "Maîtriser les fondamentaux de l'automatisation IA et créer vos premiers workflows opérationnels",
        
        // Programme 3 jours
        programme: [
          {
            jour: 1,
            titre: "Jour 1 : Fondamentaux & Premiers Workflows",
            horaire: "9h00 - 18h00 (avec pause déjeuner)",
            themes: [
              "Introduction aux workflows IA",
              "Découverte des outils no-code",
              "Création du premier automate",
              "Exercices pratiques sur cas réels"
            ]
          },
          {
            jour: 2,
            titre: "Jour 2 : Automatisations Avancées",
            horaire: "9h00 - 18h00 (avec pause déjeuner)",
            themes: [
              "Automatisation multi-plateformes",
              "Intégration API de base",
              "Gestion des erreurs et logs",
              "Cas client : automatisation complète"
            ]
          },
          {
            jour: 3,
            titre: "Jour 3 : Industrialisation & Certification",
            horaire: "9h00 - 18h00 (avec pause déjeuner)",
            themes: [
              "Optimisation des performances",
              "Documentation des workflows",
              "Projet final supervisé",
              "Préparation certification"
            ]
          }
        ],

        objectifs: [
          "Créer des workflows IA fonctionnels en 3 jours",
          "Maîtriser les outils d'automatisation essentiels",
          "Automatiser des processus métier concrets",
          "Obtenir la certification officielle"
        ],

        prerequis: [
          "Ordinateur portable avec connexion internet",
          "Connaissance basique de l'informatique",
          "Aucune expérience en programmation requise",
          "Motivation pour apprendre rapidement"
        ],

        resultats: [
          {
            icon: "🤖",
            titre: "Workflows opérationnels",
            description: "3 workflows IA prêts à l'emploi"
          },
          {
            icon: "📋",
            titre: "Certification",
            description: "Certificat de compétences validé"
          },
          {
            icon: "⚡",
            titre: "Productivité",
            description: "Gain de temps garanti dès J+1"
          },
          {
            icon: "🎯",
            titre: "Expertise",
            description: "Compétences immédiatement applicables"
          }
        ],

        outils: ["Make", "Zapier", "Airtable", "ChatGPT", "Google Sheets"]
      },

      {
        id: 2,
        niveau: "EXPERT",
        icon: "⚡",
        titre: "Super Agents IA - Formation Expert",
        sousTitre: "Devenez expert en agents IA autonomes en 3 jours intensifs",
        duree: "3 jours intensifs (24 heures)",
        couleur: "#4F46E5",
        badgeColor: "#4338CA",
        resultat: "Développer et déployer des Super Agents IA autonomes pour votre entreprise",
        
        // Programme 3 jours
        programme: [
          {
            jour: 1,
            titre: "Jour 1 : Architecture des Super Agents",
            horaire: "9h00 - 18h00 (avec pause déjeuner)",
            themes: [
              "Concepts avancés des agents IA",
              "Architecture modulaire",
              "Configuration N8n avancée",
              "Premier agent fonctionnel"
            ]
          },
          {
            jour: 2,
            titre: "Jour 2 : Développement & Intégration",
            horaire: "9h00 - 18h00 (avec pause déjeuner)",
            themes: [
              "Développement d'agents spécialisés",
              "Intégrations API complexes",
              "Gestion de la mémoire des agents",
              "Tests et optimisation"
            ]
          },
          {
            jour: 3,
            titre: "Jour 3 : Déploiement & Industrialisation",
            horaire: "9h00 - 18h00 (avec pause déjeuner)",
            themes: [
              "Hébergement et déploiement",
              "Monitoring et supervision",
              "Projet final : agent complet",
              "Certification expert"
            ]
          }
        ],

        objectifs: [
          "Architecturer des Super Agents IA modulaires",
          "Maîtriser N8n pour l'orchestration avancée",
          "Déployer des agents en production",
          "Obtenir la certification Expert IA"
        ],

        prerequis: [
          "Expérience en automatisation (Make/Zapier)",
          "Connaissances en workflows",
          "Ordinateur performant",
          "Notions d'APIs recommandées"
        ],

        resultats: [
          {
            icon: "🏗️",
            titre: "Architecture maîtrisée",
            description: "Design d'agents scalables"
          },
          {
            icon: "🔧",
            titre: "Expertise N8n",
            description: "Maîtrise complète de la plateforme"
          },
          {
            icon: "☁️",
            titre: "Déploiement cloud",
            description: "Agents hébergés et opérationnels"
          },
          {
            icon: "📊",
            titre: "Projets complexes",
            description: "Automatisation de processus avancés"
          }
        ],

        outils: ["N8n", "LangChain", "Docker", "FastAPI", "OpenAI"]
      }
    ],

    avantages: [
      {
        icon: "⏱️",
        title: "3 jours intensifs",
        description: "Apprentissage accéléré et résultats immédiats"
      },
      {
        icon: "👨‍🏫",
        title: "Expert senior",
        description: "Formateur avec 10+ ans d'expérience en IA"
      },
      {
        icon: "📈",
        title: "ROI immédiat",
        description: "Applications concrètes dès le lendemain"
      },
      {
        icon: "🔄",
        title: "Support post-formation",
        description: "3 mois d'accompagnement inclus"
      }
    ],

    admission: {
      titre: "📝 Admission & Financement",
      steps: [
        {
          number: "01",
          title: "Audit personnalisé",
          description: "Analyse de vos besoins et objectifs"
        },
        {
          number: "02",
          title: "Plan de formation",
          description: "Programme adapté à votre niveau"
        },
        {
          number: "03",
          title: "Financement",
          description: "Solutions CPF, OPCO et entreprise"
        }
      ]
    },

    statistiques: {
      satisfaction: "98%",
      certification: "95%",
      emploi: "89%"
    }
  };

  return (
    <div className="workflow-formation">
      {/* Header Hero Section */}
      <header className="formation-hero">
        <div className="hero-content">
          <div className="hero-badge">🏆 FORMATION INTENSIVE 3 JOURS</div>
          <h1 className="hero-title">{formationsData.header.title}</h1>
          <p className="hero-subtitle">{formationsData.header.subtitle}</p>
          <p className="hero-description">{formationsData.header.description}</p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">24h</div>
              <div className="stat-label">sur 3 jours</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">{formationsData.statistiques.satisfaction}</div>
              <div className="stat-label">de satisfaction</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">{formationsData.statistiques.certification}</div>
              <div className="stat-label">certification réussie</div>
            </div>
          </div>
        </div>
      </header>

      {/* Avantages Section */}
      <section className="avantages-section">
        <div className="section-header">
          <h2>✨ Formation Intensive - Résultats Garantis</h2>
          <p>Une méthode unique pour maîtriser l'automatisation IA en seulement 3 jours</p>
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
            <div 
              className="formation-badge" 
              data-formation={formation.id}
              style={{ backgroundColor: formation.badgeColor }}
            >
              {formation.icon} {formation.niveau}
            </div>
            <h2 className="formation-title">{formation.titre}</h2>
            <p className="formation-subtitle">{formation.sousTitre}</p>
            
            <div className="formation-meta">
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <span><strong>Durée:</strong> {formation.duree}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🎯</span>
                <span><strong>Résultat:</strong> {formation.resultat}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">💰</span>
                <span><strong>Financement:</strong> CPF, OPCO, Entreprise</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">👥</span>
                <span><strong>Format:</strong> Présentiel/Distanciel</span>
              </div>
            </div>
          </div>

          {/* Programme 3 jours */}
          <div className="programme-section">
            <div className="section-subheader">
              <h3>📅 Programme détaillé - 3 jours intensifs</h3>
              <p>Un parcours progressif conçu pour des résultats immédiats</p>
            </div>
            
            <div className="programme-jours">
              {formation.programme.map((jour) => (
                <div 
                  key={jour.jour} 
                  className="jour-card"
                  data-formation={formation.id}
                >
                  <div className="jour-header" data-formation={formation.id}>
                    <div className="jour-number">J{jour.jour}</div>
                    <h4 className="jour-title">{jour.titre}</h4>
                  </div>
                  <div className="jour-content">
                    <div className="jour-horaire">
                      <span className="horaire-icon">🕒</span>
                      <span>{jour.horaire}</span>
                    </div>
                    <div className="jour-themes">
                      {jour.themes.map((theme, index) => (
                        <div key={index} className="theme-item">
                          <div className="theme-marker"></div>
                          <span>{theme}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="formation-content">
            {/* Objectifs et Prérequis */}
            <div className="objectifs-prerequis">
              <div className="objectifs-card">
                <div className="card-header">
                  <span className="card-icon">🎯</span>
                  <h3>Objectifs de la formation</h3>
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
                  <h3>Prérequis & Public visé</h3>
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

            {/* Résultats et Outils */}
            <div className="resultats-outils">
              <div className="resultats-card">
                <div className="card-header">
                  <span className="card-icon">✅</span>
                  <h3>À l'issue de la formation</h3>
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
                  <h3>Technologies maîtrisées</h3>
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
          <p>Un parcours simplifié pour accéder rapidement à la formation</p>
        </div>
        <div className="admission-steps">
          {formationsData.admission.steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="admission-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
              {index < formationsData.admission.steps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-badge">🚀 PROCHAINES SESSIONS</div>
          <h2>Prêt à maîtriser l'IA en 3 jours ?</h2>
          <p>Sessions limitées à 8 participants pour un accompagnement optimal</p>
          
          <div className="cta-stats">
            <div className="cta-stat">
              <div className="cta-stat-number">{formationsData.statistiques.emploi}</div>
              <div className="cta-stat-label">d'augmentation de productivité</div>
            </div>
          </div>

          <div className="cta-buttons">
            <button className="btn-primary">
              <span className="btn-icon">📞</span>
              Réserver un entretien
            </button>
            <button className="btn-secondary">
              <span className="btn-icon">📄</span>
              Télécharger le programme détaillé
            </button>
          </div>

          <div className="cta-note">
            <span className="note-icon">💡</span>
            <span>Financement CPF et OPCO 100% pris en charge pour les éligibles</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkflowIAFormation;