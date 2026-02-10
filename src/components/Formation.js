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
        niveau: "PROGRAMME COMPLET",
        icon: "🚀",
        titre: "Formation IA & Automatisation - 3 Jours Intensifs",
        sousTitre: "Parcours complet : Développeur IA → Agents → Workflows",
        duree: "3 jours intensifs (24 heures)",
        couleur: "#2563EB",
        badgeColor: "#1D4ED8",
        resultat: "Maîtriser tout le cycle de développement IA et créer des workflows professionnels",
        
        // Programme 3 jours unique
        programme: [
          {
            jour: 1,
            titre: "Jour 1 : Développeur IA - Applications & Travail",
            sousTitre: "Fondamentaux de l'IA appliquée au travail",
            horaire: "9h00 - 18h00 (avec pause déjeuner)",
            themes: [
              "Introduction aux modèles IA modernes",
              "Prompt engineering pour le travail quotidien",
              "Développement d'assistants IA spécialisés",
              "Applications pratiques en contexte professionnel",
              "Fin de journée : Application & Prompt Engineering"
            ]
          },
          {
            jour: 2,
            titre: "Jour 2 : Agents IA & Applications Industrielles",
            sousTitre: "Création d'agents autonomes pour l'industrie",
            horaire: "9h00 - 18h00 (avec pause déjeuner)",
            themes: [
              "Architecture des agents IA avancés",
              "Création d'agents multi-tâches",
              "Applications industrielles de l'IA",
              "Intégration avec systèmes existants",
              "Déploiement d'agents en production"
            ]
          },
          {
            jour: 3,
            titre: "Jour 3 : Workflows IA & Automatisation",
            sousTitre: "Création de workflows professionnels complets",
            horaire: "9h00 - 18h00 (avec pause déjeuner)",
            themes: [
              "Design de workflows IA industriels",
              "Automatisation end-to-end de processus",
              "Intégration cross-plateformes",
              "Optimisation des performances",
              "Création et déploiement de workflows"
            ]
          }
        ],

        objectifs: [
          "Devenir développeur IA compétent en 3 jours",
          "Créer des agents IA autonomes pour l'industrie",
          "Développer des workflows professionnels complets",
          "Maîtriser l'automatisation intelligente",
          "Obtenir la certification Expert IA"
        ],

        prerequis: [
          "Ordinateur portable avec connexion internet",
          "Connaissance basique de l'informatique",
          "Aucune expérience en programmation requise",
          "Motivation pour apprendre rapidement"
        ],

        resultats: [
          {
            icon: "🧠",
            titre: "Développeur IA",
            description: "Expert en prompts et applications IA"
          },
          {
            icon: "🤖",
            titre: "Agents Autonomes",
            description: "Création d'agents IA industriels"
          },
          {
            icon: "⚡",
            titre: "Workflows Professionnels",
            description: "Automatisation de processus complexes"
          },
          {
            icon: "🎯",
            titre: "Certification",
            description: "Certificat Expert IA validé"
          }
        ],

        outils: ["OpenAI", "LangChain", "Make", "Zapier", "N8n", "Airtable", "Google Sheets", "FastAPI"]
      }
    ],

    avantages: [
      {
        icon: "⏱️",
        title: "3 jours intensifs",
        description: "Parcours complet de débutant à expert"
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

      {/* Formation Section - Un seul programme */}
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
                    <div className="jour-titles">
                      <h4 className="jour-title">{jour.titre}</h4>
                      <p className="jour-subtitle">{jour.sousTitre}</p>
                    </div>
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