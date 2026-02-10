import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaUserTie, 
  FaBuilding, 
  FaCertificate, 
  FaWifi, 
  FaCar, 
  FaAccessibleIcon, 
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBook,
  FaCoffee,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';
import './CenterInfo.css';

const CenterInfo = () => {
  const logoPath = process.env.PUBLIC_URL + '/images/logo-essor-formation.png';
  const logoFallback = process.env.PUBLIC_URL + '/images/logo-essor.svg';

  const facilities = [
    { icon: <FaWifi />, title: "WiFi Haut Débit", description: "Connexion fibre optique" },
    { icon: "💻", title: "Salles Informatiques", description: "PCs dernière génération" },
    { icon: <FaCar />, title: "Parking", description: "Placement sécurisé gratuit" },
    { icon: <FaAccessibleIcon />, title: "Accessibilité", description: "PMR adapté" },
    { icon: <FaBook />, title: "Ressources", description: "Bibliothèque spécialisée" },
    { icon: <FaCoffee />, title: "Espace Détente", description: "Cafétéria & repos" },
    { icon: <FaChalkboardTeacher />, title: "Amphithéâtre", description: "Salle de conférence" },
    { icon: <FaUsers />, title: "Salles de travail", description: "Espaces collaboratifs" }
  ];

  const contactMethods = [
    { 
      type: "Téléphone Principal", 
      value: "73 371 170", 
      schedule: "Lun-Ven: 8h-18h | Sam: 8h-13h",
      icon: <FaPhone />,
      href: "tel:73371170"
    },
    { 
      type: "Téléphone Secondaire", 
      value: "55 691 152", 
      schedule: "Contact alternatif",
      icon: <FaPhone />,
      href: "tel:55691152"
    },
    { 
      type: "Type de Centre", 
      value: "Formation Initiale & Continue", 
      schedule: "Agréé par l'État",
      icon: "🏢"
    },
    { 
      type: "Prochaine Session", 
      value: "À définir", 
      schedule: "12 places maximum",
      icon: <FaCalendarAlt />
    }
  ];

  const agreementFeatures = [
    "Formation qualité ISO",
    "Certifications reconnues",
    "Financement possible",
    "Suivi personnalisé",
    "Évaluation continue",
    "Attestation officielle"
  ];

  return (
    <section id="center" className="center-info">
      <div className="center-container">
        {/* Header Section */}
        <div className="center-header">
          <div className="header-badge">
            <FaStar /> CENTRE AGRÉÉ PAR L'ÉTAT
          </div>
          <h1 className="center-main-title">
            L'Essor Formation
            <span className="title-sub">Centre d'Excellence Professionnelle</span>
          </h1>
          <p className="center-intro">
            Centre de formation initiale et continue agréé par l'État tunisien, 
            spécialisé dans les formations professionnelles de haute qualité avec 
            une approche pédagogique innovante.
          </p>
        </div>

        {/* Main Grid */}
        <div className="center-grid">
          {/* Left Column - Center Identity */}
          <div className="center-identity">
            {/* Logo & Basic Info */}
            <div className="identity-card">
              <div className="logo-section">
                <div className="logo-container">
                  <img 
                    src={logoPath} 
                    alt="Logo L'Essor Formation" 
                    className="center-logo"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = logoFallback;
                      if (e.target.src === logoFallback && e.target.onerror) {
                        e.target.style.display = 'none';
                        document.querySelector('.logo-fallback').style.display = 'flex';
                      }
                    }}
                  />
                  <div className="logo-fallback">
                    <FaGraduationCap className="fallback-icon" />
                    <div className="fallback-text">
                      <span className="fallback-title">L'ESSOR</span>
                      <span className="fallback-subtitle">FORMATION</span>
                    </div>
                  </div>
                </div>
                <div className="identity-info">
                  <div className="agreement-badge-large">
                    <FaCertificate />
                    <div>
                      <span className="badge-title">Agrément N°</span>
                      <span className="badge-number">51-496-19</span>
                    </div>
                  </div>
                  <div className="identity-tags">
                    <span className="identity-tag">🏛️ Établissement Public</span>
                    <span className="identity-tag">🎓 Formation Certifiante</span>
                    <span className="identity-tag">⭐ Excellence Pédagogique</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Director Section */}
            <div className="director-card">
              <div className="director-header">
                <FaUserTie className="director-icon" />
                <h3>Direction & Équipe</h3>
              </div>
              <div className="director-content">
                <div className="director-profile">
                  <div className="director-avatar">
                    <div className="avatar-circle">
                      <span className="avatar-initials">HM</span>
                    </div>
                    <div className="director-badge">👑 Directrice</div>
                  </div>
                  <div className="director-details">
                    <h4>Hanen Missaoui</h4>
                    <p className="director-title">Directrice de L'Essor Formation</p>
                    <div className="director-expertise">
                    
                      <span>📚 Expert en pédagogie</span>
                      <span>🚀 Innovation continue</span>
                    </div>
                    <blockquote className="director-quote">
                      "Notre engagement est de fournir des formations d'excellence 
                      qui transforment les compétences et accélèrent les carrières 
                      professionnelles."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="location-card">
              <div className="location-header">
                <FaMapMarkerAlt className="location-icon" />
                <h3>Localisation & Accès</h3>
              </div>
              <div className="location-content">
                <div className="address-box">
                  <div className="address-icon">📍</div>
                  <div className="address-details">
                    <h4>Hammam-Sousse, Tunisie</h4>
                    <p>Centre situé dans une zone stratégique facile d'accès</p>
                  </div>
                </div>
                <div className="access-features">
                  <div className="access-item">
                    <div className="access-icon">🚗</div>
                    <div className="access-details">
                      <strong>Accès Voiture</strong>
                      <span>Parking gratuit sécurisé</span>
                    </div>
                  </div>
                  <div className="access-item">
                    <div className="access-icon">🚍</div>
                    <div className="access-details">
                      <strong>Transports</strong>
                      <span>Arrêts de bus à proximité</span>
                    </div>
                  </div>
                  <div className="access-item">
                    <div className="access-icon">🏢</div>
                    <div className="access-details">
                      <strong>Infrastructure</strong>
                      <span>Bâtiment moderne et équipé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Facilities */}
          <div className="center-details">
            {/* Contact Section */}
            <div className="contact-card">
              <div className="contact-header">
                <FaPhone className="contact-icon" />
                <h3>Contact & Renseignements</h3>
              </div>
              <div className="contact-grid">
                {contactMethods.map((method, index) => (
                  <a 
                    key={index} 
                    href={method.href || '#'} 
                    className={`contact-method ${!method.href ? 'non-clickable' : ''}`}
                    onClick={!method.href ? (e) => e.preventDefault() : null}
                  >
                    <div className="method-icon-wrapper">
                      {method.icon}
                    </div>
                    <div className="method-content">
                      <h4>{method.type}</h4>
                      <p className="method-value">{method.value}</p>
                      <span className="method-schedule">{method.schedule}</span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="contact-footer">
                <p className="contact-notice">
                  💡 <strong>Conseil :</strong> Pour une réponse rapide, privilégiez 
                  les appels téléphoniques en heures ouvrables.
                </p>
              </div>
            </div>

            {/* Facilities Section */}
            <div className="facilities-card">
              <div className="facilities-header">
                <FaBuilding className="facilities-icon" />
                <h3>Infrastructures & Équipements</h3>
              </div>
              <div className="facilities-grid">
                {facilities.map((facility, index) => (
                  <div key={index} className="facility-item">
                    <div className="facility-icon-wrapper">
                      {facility.icon}
                    </div>
                    <div className="facility-content">
                      <h4>{facility.title}</h4>
                      <p>{facility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agreement Section */}
            <div className="agreement-card">
              <div className="agreement-header">
                <FaCertificate className="agreement-icon" />
                <h3>Garanties Officielles</h3>
              </div>
              <div className="agreement-content">
                <div className="agreement-badge-main">
                  <div className="badge-content">
                    <span className="badge-label">Agrément</span>
                    <span className="badge-number-main">N° 51-496-19</span>
                  </div>
                </div>
                <p className="agreement-description">
                  Centre de formation agréé par l'État tunisien, garantissant 
                  des formations de qualité, des certifications reconnues et 
                  l'éligibilité aux dispositifs de financement publics.
                </p>
                <div className="agreement-features">
                  {agreementFeatures.map((feature, index) => (
                    <div key={index} className="agreement-feature">
                      <FaCheckCircle className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="center-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Années d'expérience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Apprenants formés</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Formations disponibles</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterInfo;