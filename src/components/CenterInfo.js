// CenterInfo.jsx - Version finale complète
import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaUserTie, 
  FaBuilding, 
  FaCertificate, 
  FaWifi, 
  FaGraduationCap,
  FaLaptop,
  FaCalendarAlt,
  FaCheckCircle,
  FaStar,
  FaCoffee
} from 'react-icons/fa';
import './CenterInfo.css';

const CenterInfo = () => {
  const logoPath = process.env.PUBLIC_URL + '/images/logo-essor-formation.png';
  const logoFallback = process.env.PUBLIC_URL + '/images/logo-essor.svg';

  // Installations - SEULEMENT 3
  const facilities = [
    { icon: <FaWifi />, title: "WiFi Haut Débit", description: "Connexion internet rapide et stable" },
    { icon: <FaLaptop />, title: "Salle Informatique", description: "Équipements neufs et performants" },
    { icon: <FaCoffee />, title: "Espace Détente", description: "Zone de pause et cafétéria" }
  ];

  const contactMethods = [
    { 
      type: "Téléphone Principal", 
      value: "73 371 170", 
      schedule: "Lun-Ven: 8h-18h",
      icon: <FaPhone />,
      href: "tel:73371170"
    },
    { 
      type: "Téléphone Secondaire", 
      value: "23 513 870", 
      schedule: "Contact alternatif",
      icon: <FaPhone />,
      href: "tel:23513870"
    },
    { 
      type: "Type de Centre", 
      value: "Formation Professionnelle", 
      schedule: "Établissement privé",
      icon: "🏢",
      nonClickable: true
    },
    { 
      type: "Prochaine Session", 
      value: "Sur demande", 
      schedule: "Inscriptions ouvertes",
      icon: <FaCalendarAlt />,
      nonClickable: true
    }
  ];

  const agreementFeatures = [
    "Formation qualité",
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
            L'Essor pour la Formation
            <span className="title-sub">Centre d'Excellence Professionnelle</span>
          </h1>
          <p className="center-intro">
            Centre de formation privé agréé par l'État tunisien, 
            spécialisé dans les formations professionnelles de qualité 
            avec une approche pédagogique adaptée au marché du travail.
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
                      <span className="fallback-subtitle">POUR LA FORMATION</span>
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
                    <span className="identity-tag">🏢 Établissement Privé</span>
                    <span className="identity-tag">🎓 Formation Professionnelle</span>
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
                    <div className="director-badge">👑 Propriétaire</div>
                  </div>
                  <div className="director-details">
                    <h4>Hanen Missaoui</h4>
                    <p className="director-title">Directrice de centre</p>
                    <div className="director-expertise">
                      <span>🎓 Experte en Pédagogie</span>
                      <span>🚀 Innovation Continue</span>
                      <span>💼 Relations Entreprises</span>
                    </div>
                    <blockquote className="director-quote">
                      "Mon engagement est d'offrir une formation d'excellence qui 
                      transforme les compétences et accélère les carrières professionnelles."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section - Simplifiée */}
            <div className="location-card">
              <div className="location-header">
                <FaMapMarkerAlt className="location-icon" />
                <h3>Localisation</h3>
              </div>
              <div className="location-content">
                <div className="address-box">
                  <div className="address-icon">📍</div>
                  <div className="address-details">
                    <h4>Hammam-Sousse, Tunisie</h4>
                    <p>Centre facilement accessible</p>
                  </div>
                </div>
                <div className="access-features">
                  <div className="access-item">
                    <div className="access-icon">📍</div>
                    <div className="access-details">
                      <strong>Emplacement</strong>
                      <span>Zone facile d'accès</span>
                    </div>
                  </div>
                  <div className="access-item">
                    <div className="access-icon">🚗</div>
                    <div className="access-details">
                      <strong>Accès Voiture</strong>
                      <span>Route principale</span>
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
                    className={`contact-method ${method.nonClickable ? 'non-clickable' : ''}`}
                    onClick={method.nonClickable ? (e) => e.preventDefault() : null}
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
                  💡 Pour une réponse rapide, contactez-nous par téléphone en heures ouvrables.
                </p>
              </div>
            </div>

            {/* Facilities Section - SEULEMENT 3 installations */}
            <div className="facilities-card">
              <div className="facilities-header">
                <FaBuilding className="facilities-icon" />
                <h3>Équipements & Installations</h3>
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
                    <span className="badge-label">Agrément Officiel</span>
                    <span className="badge-number-main">N° 51-496-19</span>
                  </div>
                </div>
                <p className="agreement-description">
                  Centre de formation privé agréé par l'État tunisien, garantissant 
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

       
      </div>
    </section>
  );
};

export default CenterInfo;