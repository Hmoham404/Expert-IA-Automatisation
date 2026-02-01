import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaUserTie, FaBuilding, FaCertificate, FaWifi, FaCar, FaAccessibleIcon, FaGraduationCap } from 'react-icons/fa';
import './CenterInfo.css';

const CenterInfo = () => {

  const logoPath = process.env.PUBLIC_URL + '/images/logo-essor-formation.png';
  
  // Chemin de secours si le logo n'existe pas
  const logoFallback = process.env.PUBLIC_URL + '/images/logo-essor.svg';

  return (
    <section id="center" className="center-info fade-in">
      <div className="section-header">
        <h2>🏢 L'Essor Formation</h2>
        <p>Centre de Formation Professionnelle Agréé par l'État</p>
      </div>
      
      <div className="center-grid">
        <div className="center-card">
          <div className="card-header">
            <div className="center-logo-container">
              <div className="logo-placeholder">
                {/* Logo du centre */}
                <div className="logo-wrapper">
                  <img 
                    src={logoPath} 
                    alt="Logo L'Essor Formation" 
                    className="center-logo-image"
                    onError={(e) => {
                      e.target.onerror = null; // Empêche les boucles d'erreur
                      e.target.src = logoFallback;
                      if (e.target.src === logoFallback && e.target.onerror) {
                        e.target.style.display = 'none';
                        document.querySelector('.logo-fallback').style.display = 'flex';
                      }
                    }}
                  />
                  <div className="logo-fallback">
                    <FaGraduationCap className="fallback-icon" />
                    <span className="fallback-text">L'ESSOR</span>
                  </div>
                </div>
              </div>
              <div className="center-info-header">
                <h3>L'Essor Formation</h3>
                <p className="center-agreement">✅ Agréé par l'État - N° 51-496-19</p>
              </div>
            </div>
          </div>
          
          <div className="center-details">
            <div className="detail-section">
              <h3><FaBuilding /> À propos du centre</h3>
              <p className="center-description">
                Centre de formation initiale et continue situé à Hammam-Sousse, 
                spécialisé dans les formations professionnelles de qualité avec 
                une approche pédagogique moderne et des équipements à la pointe.
                <br /><br />
                <strong>Directrice : Hanen Missaoui</strong>
              </p>
            </div>
            
            <div className="detail-section">
              <h3><FaUserTie /> Direction & Équipe</h3>
              <div className="director-info">
                <div className="director-avatar">
                  <div className="avatar-initials">HM</div>
                </div>
                <div className="director-details">
                  <h4>Hanen Missaoui</h4>
                  <p className="director-title">Directrice de L'Essor Formation</p>
                  <p className="director-quote">
                    "Notre mission est de vous fournir les compétences les plus demandées 
                    sur le marché avec un accompagnement personnalisé et des méthodes 
                    pédagogiques innovantes."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="detail-section">
              <h3><FaMapMarkerAlt /> Localisation & Accès</h3>
              <div className="location-info">
                <p className="address">
                  <strong>📍 Adresse :</strong> Hammam-Sousse, Tunisie
                </p>
                <div className="map-container">
                  <div className="map-placeholder">
                    <FaMapMarkerAlt className="map-icon" />
                    <p>Centre situé à Hammam-Sousse</p>
                    <small>Zone facile d'accès - Parking disponible</small>
                    <div className="location-details">
                      <span>🚗 Accès voiture facile</span>
                      <span>🚍 Transports en commun à proximité</span>
                      <span>🅿️ Parking gratuit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-facilities">
          <div className="contact-section">
            <h3><FaPhone /> Contact Direct</h3>
            <div className="contact-methods">
              <a href="tel:73371170" className="contact-method">
                <div className="method-icon">
                  <FaPhone />
                </div>
                <div className="method-details">
                  <strong>Téléphone Principal</strong>
                  <span>73 371 170</span>
                  <small>Lun-Ven: 8h-18h | Sam: 8h-13h</small>
                </div>
              </a>
              
              <a href="tel:55691152" className="contact-method">
                <div className="method-icon">
                  <FaPhone />
                </div>
                <div className="method-details">
                  <strong>Téléphone Secondaire</strong>
                  <span>55 691 152</span>
                  <small>Contact alternatif</small>
                </div>
              </a>
              
              <div className="contact-method">
                <div className="method-icon">🏢</div>
                <div className="method-details">
                  <strong>Type de Centre</strong>
                  <span>Formation Initiale & Continue</span>
                  <small>Agréé par l'État</small>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📅</div>
                <div className="method-details">
                  <strong>Prochaine Session IA</strong>
                  <span>À définir - Contactez-nous</span>
                  <small>12 places maximum</small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="facilities-section">
            <h3><FaCertificate /> Infrastructures & Équipements</h3>
            <div className="facilities-grid">
              <div className="facility-item">
                <FaWifi className="facility-icon" />
                <h4>WiFi Haut Débit</h4>
                <p>Connexion Internet rapide et stable</p>
              </div>
              
              <div className="facility-item">
                <div className="facility-icon">💻</div>
                <h4>Salles Informatiques</h4>
                <p>Équipements modernes et performants</p>
              </div>
              
              <div className="facility-item">
                <FaCar className="facility-icon" />
                <h4>Parking</h4>
                <p>Placement sécurisé gratuit</p>
              </div>
              
              <div className="facility-item">
                <FaAccessibleIcon className="facility-icon" />
                <h4>Accessibilité</h4>
                <p>Adapté aux personnes à mobilité réduite</p>
              </div>
              
              <div className="facility-item">
                <div className="facility-icon">📚</div>
                <h4>Ressources Pédagogiques</h4>
                <p>Bibliothèque et supports de formation</p>
              </div>
              
              <div className="facility-item">
                <div className="facility-icon">☕</div>
                <h4>Espace Détente</h4>
                <p>Zone café et repos pour les pauses</p>
              </div>
            </div>
          </div>
          
          <div className="agreement-section">
            <h3>🎓 Agrément Officiel</h3>
            <div className="agreement-badge">
              <span>N° 51-496-19</span>
            </div>
            <p className="agreement-description">
              Centre de formation agréé par l'État tunisien, garantissant des formations 
              de qualité et des certifications reconnues. Toutes nos formations sont 
              éligibles aux dispositifs de financement.
            </p>
            <div className="agreement-features">
              <span>✅ Formation qualité</span>
              <span>✅ Certifications reconnues</span>
              <span>✅ Financement possible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterInfo;