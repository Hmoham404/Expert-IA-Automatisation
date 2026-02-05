import React from 'react';
import { 
  FaUserGraduate, 
  FaTools, 
  FaChartLine, 
  FaUsers, 
  FaLightbulb, 
  FaRocket,
  FaDownload,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaRobot,
  FaCheckCircle
} from 'react-icons/fa';
import './Presentation.css';

const Presentation = () => {
  const skills = [
    {
      icon: <FaRobot />,
      title: "Expertise LLMs Avancés",
      description: "Maîtrise d'OpenAI GPT-4, Google Gemini et Anthropic Claude",
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)"
    },
    {
      icon: <FaTools />,
      title: "Automatisation No-Code",
      description: "Spécialiste Make.com, Zapier et n8n pour l'intégration d'IA",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #34D399)"
    },
    {
      icon: <FaChartLine />,
      title: "Optimisation Business",
      description: "Transformation des processus métiers avec ROI mesurable",
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)"
    },
    {
      icon: <FaUsers />,
      title: "Pédagogie Résultats",
      description: "Formation pratique adaptée aux non-techniciens",
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Continue",
      description: "Veille technologique et solutions avant-gardistes",
      color: "#EF4444",
      gradient: "linear-gradient(135deg, #EF4444, #F87171)"
    },
    {
      icon: <FaRocket />,
      title: "Déploiement Rapide",
      description: "Implémentation de solutions IA en temps record",
      color: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #22D3EE)"
    }
  ];

  const technicalExpertise = [
    {
      category: "IA & Machine Learning",
      items: ["OpenAI GPT-4", "Google Gemini", "Anthropic Claude", "LangChain", "LLMs Fine-tuning"]
    },
    {
      category: "Automatisation No-Code",
      items: ["Make.com", "Zapier", "n8n", "Airtable", "Notion"]
    },
    {
      category: "Développement Web",
      items: ["Laravel (PHP)", "Django (Python)", "React", "API REST", "Web Scraping"]
    },
    {
      category: "Bases de Données",
      items: ["MySQL", "SQLite", "PostgreSQL", "MongoDB", "Google Sheets"]
    }
  ];

  const experiences = [
    {
      year: "2023 – Présent",
      role: "Développeur Full-Stack & Expert IA",
      company: "Freelance & Formateur Certifié",
      description: "Développement d'applications web avancées avec intégration d'IA, création de plateformes e-commerce intelligentes, automatisation de workflows métier avec solutions no-code, et formation en IA opérationnelle pour entreprises.",
      highlights: [
        "Intégration d'IA générative dans des applications web",
        "Automatisation de processus métier avec Make.com/Zapier",
        "Formation et consulting en IA pour PME"
      ],
      color: "#3B82F6"
    },
    {
      year: "2022 – 2023",
      role: "Ingénieur Systèmes Embarqués",
      company: "Projets Industriels",
      description: "Conception et développement de systèmes embarqués avec intégration d'intelligence artificielle pour l'automatisation industrielle et l'IoT.",
      highlights: [
        "Développement de solutions IoT avec IA",
        "Automatisation de systèmes industriels",
        "Intégration de capteurs et traitement de données"
      ],
      color: "#10B981"
    },
    {
      year: "2020 – 2022",
      role: "Formateur en Technologie",
      company: "Centres de Formation",
      description: "Formation en développement web, automatisation et outils numériques pour entreprises et particuliers, avec spécialisation progressive en IA.",
      highlights: [
        "Formation de +100 professionnels",
        "Création de programmes pédagogiques",
        "Accompagnement à la transformation digitale"
      ],
      color: "#8B5CF6"
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-mohamed-lakhal.pdf';
    link.download = 'CV_Mohamed_Lakhal_Expert_IA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = (type) => {
    switch(type) {
      case 'email':
        window.location.href = 'mailto:Lakhalm300@gmail.com';
        break;
      case 'phone':
        window.location.href = 'tel:+21628809961';
        break;
      case 'whatsapp':
        const message = "Bonjour Mohamed, je suis intéressé(e) par vos compétences en IA et automatisation. Pouvez-vous me contacter ?";
        window.open(`https://wa.me/21628809961?text=${encodeURIComponent(message)}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <section id="presentation" className="presentation-section">
      {/* Header Section */}
      <div className="presentation-header">
        <div className="header-badge">
          <FaUserGraduate /> EXPERT FORMATEUR
        </div>
        <h1 className="presentation-title">
          Mohamed Lakhal
          <span className="title-sub">Spécialiste en IA Opérationnelle & Automatisation</span>
        </h1>
        <p className="presentation-intro">
          Ingénieur en systèmes embarqués & Développeur Web | Formateur certifié en Intelligence 
          Artificielle & Automatisation | +3 ans d'expérience en intégration d'IA pour entreprises
        </p>
      </div>

      <div className="presentation-container">
        {/* Profile Card */}
        <div className="profile-section">
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar-container">
                <div className="avatar-circle">
                  <span className="avatar-initials">ML</span>
                  <div className="avatar-badge">
                    <FaCertificate /> Expert
                  </div>
                </div>
                <div className="profile-info">
                  <h2 className="profile-name">Mohamed Lakhal</h2>
                  <p className="profile-title">Expert IA & Automatisation</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-section">
              <div className="contact-item" onClick={() => handleContactClick('email')}>
                <div className="contact-icon email">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <strong>Email Professionnel</strong>
                  <span>Lakhalm300@gmail.com</span>
                </div>
              </div>

              <div className="contact-item" onClick={() => handleContactClick('phone')}>
                <div className="contact-icon phone">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <strong>Téléphone</strong>
                  <span>+216 28 80 99 61</span>
                </div>
              </div>

              <div className="contact-item" onClick={() => handleContactClick('whatsapp')}>
                <div className="contact-icon whatsapp">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <strong>WhatsApp</strong>
                  <span>Disponible pour consultation</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon location">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <strong>Localisation</strong>
                  <span>Tunisie, Sousse • Remote disponible</span>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <button 
              className="download-btn"
              onClick={handleDownloadCV}
            >
              <FaDownload className="btn-icon" />
              <span>Télécharger mon CV complet</span>
            </button>
          </div>

          {/* Technical Expertise */}
          <div className="expertise-card">
            <div className="expertise-header">
              <h3>
                <FaCode />
                Stack Technique Complète
              </h3>
              <p>Technologies maîtrisées pour vos projets</p>
            </div>
            <div className="expertise-grid">
              {technicalExpertise.map((category, index) => (
                <div key={index} className="expertise-category">
                  <h4>{category.category}</h4>
                  <div className="expertise-tags">
                    {category.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="expertise-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="content-section">
          {/* Skills Section */}
          <div className="skills-section">
            <div className="section-header">
              <h2>
                <FaTools className="section-icon" />
                Mes Compétences Clés
              </h2>
              <p>Expertises qui font la différence dans votre formation</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-card"
                  style={{ borderTopColor: skill.color }}
                >
                  <div className="skill-icon-container" style={{ background: skill.gradient }}>
                    {skill.icon}
                  </div>
                  <div className="skill-content">
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                    <div className="skill-highlight" style={{ backgroundColor: skill.color }}>
                      <FaCheckCircle /> Expertise confirmée
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="experience-section">
            <div className="section-header">
              <h2>
                <FaBriefcase className="section-icon" />
                Parcours Professionnel
              </h2>
              <p>Une expérience diversifiée au service de votre formation</p>
            </div>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="timeline-item"
                  style={{ borderLeftColor: exp.color }}
                >
                  <div className="timeline-marker" style={{ backgroundColor: exp.color }}>
                    <div className="marker-year">{exp.year}</div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{exp.role}</h3>
                      <div className="timeline-company">{exp.company}</div>
                    </div>
                    <p className="timeline-description">{exp.description}</p>
                    <div className="timeline-highlights">
                      {exp.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="highlight-item">
                          <FaCheckCircle className="highlight-icon" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="philosophy-section">
            <div className="philosophy-card">
              <div className="philosophy-header">
                <h2>
                  <FaUserGraduate className="section-icon" />
                  Ma Philosophie de Formation
                </h2>
              </div>
              <div className="philosophy-content">
                <div className="quote-icon">"</div>
                <blockquote className="philosophy-quote">
                  Je ne me contente pas d'enseigner des outils. Je vous montre comment 
                  <strong> transformer vos défis métiers en opportunités d'automatisation</strong>, 
                  avec des résultats concrets dès la première journée de formation.
                </blockquote>
                <div className="philosophy-points">
                  <div className="philosophy-point">
                    <div className="point-icon">🎯</div>
                    <div className="point-content">
                      <h4>Approche pratique</h4>
                      <p>100% orientée sur vos cas concrets</p>
                    </div>
                  </div>
                  <div className="philosophy-point">
                    <div className="point-icon">🚀</div>
                    <div className="point-content">
                      <h4>Résultats rapides</h4>
                      <p>Premières automatisations en quelques heures</p>
                    </div>
                  </div>
                  <div className="philosophy-point">
                    <div className="point-icon">🤝</div>
                    <div className="point-content">
                      <h4>Accompagnement continu</h4>
                      <p>Support pendant et après la formation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;