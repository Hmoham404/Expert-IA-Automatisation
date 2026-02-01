import React from 'react';
import { FaUserGraduate, FaTools, FaChartLine, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import './Presentation.css';

const Presentation = () => {
  const skills = [
    {
      icon: <FaUserGraduate />,
      title: "Expertise LLMs Avancés",
      description: "Maîtrise approfondie d'OpenAI GPT-4, Google Gemini et Anthropic Claude"
    },
    {
      icon: <FaTools />,
      title: "Automatisation No-Code",
      description: "Spécialiste Make.com et Zapier pour l'intégration d'IA"
    },
    {
      icon: <FaChartLine />,
      title: "Optimisation Business",
      description: "Transformation des processus métiers avec ROI mesurable"
    },
    {
      icon: <FaUsers />,
      title: "Pédagogie Résultats",
      description: "Formation pratique adaptée aux non-techniciens"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Continue",
      description: "Veille technologique et solutions avant-gardistes"
    },
    {
      icon: <FaRocket />,
      title: "Déploiement Rapide",
      description: "Implémentation de solutions IA en temps record"
    }
  ];

 const experiences = [
  {
    year: "2023 – Présent",
    role: "Développeur Web Full-Stack",
    description: "Développement d’applications web avec Laravel (PHP) et Django (Python), création de plateformes e-commerce, traitement et analyse de données Excel/CSV, web scraping et intégration de bases de données MySQL et SQLite."
  },
 
];


  return (
    <section id="presentation" className="presentation fade-in">
      <div className="section-header">
        <h2>👨‍💻 Votre Expert Formateur</h2>
        <p>Mohamed Lakhal - Spécialiste en IA Opérationnelle & Automatisation</p>
      </div>
      
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-initials">ML</div>
          </div>
          <h3 className="profile-name">Mohamed Lakhal</h3>
          <p className="profile-title">Ingénieur en systèmes embarqués & Développeur Web | Formateur certifié en Intelligence Artificielle & Automatisation</p>
          
          <div className="profile-contact">
            <div className="contact-item">
              <span className="contact-label">📍</span>
              <span>Tunisie, Sousse</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">📧</span>
              <span>Lakhalm300@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">📱</span>
              <span>+216 28 80 99 61</span>
            </div>
          </div>
          
          <button 
            className="cv-download-btn"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/cv-mohamed-lakhal.pdf';
              link.download = 'CV_Mohamed_Lakhal_Expert_IA.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            📥 Télécharger mon CV
          </button>
        </div>
        
        <div className="profile-content">
          <div className="expertise-section">
            <h3>🛠️ Mon Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="experience-section">
            <h3>📈 Parcours Professionnel</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{exp.year}</div>
                  <div className="timeline-content">
                    <h4>{exp.role}</h4>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="philosophy-section">
            <h3>🎯 Ma Philosophie de Formation</h3>
            <div className="philosophy-card">
              <p>
                "Je ne me contente pas d'enseigner des outils. Je vous montre comment 
                <strong> transformer vos défis métiers en opportunités d'automatisation</strong>, 
                avec des résultats concrets dès la première journée de formation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;