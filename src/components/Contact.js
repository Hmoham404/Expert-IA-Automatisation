import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaUser, 
  FaBuilding, 
  FaPaperPlane, 
  FaClock,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle,
  FaCalendarAlt,
  FaChartLine
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    formationInterest: '',
    participants: '1-3',
    urgency: 'normal',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would integrate with EmailJS, Formspree, or your backend
      console.log('Form data submitted:', formData);
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        formationInterest: '',
        participants: '1-3',
        urgency: 'normal',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formationOptions = [
    { value: 'beginner', label: 'Formation Débutant - Automatisation IA' },
    { value: 'advanced', label: 'Formation Avancé - Super Agents IA' },
    { value: 'custom', label: 'Formation Personnalisée sur Mesure' },
    { value: 'consulting', label: 'Audit et Consulting Automatisation' }
  ];

  const participantOptions = [
    { value: '1-3', label: '1-3 participants' },
    { value: '4-6', label: '4-6 participants' },
    { value: '7-12', label: '7-12 participants' },
    { value: '12+', label: 'Plus de 12 participants' }
  ];

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgent - Démarrer dans les 2 semaines' },
    { value: 'normal', label: 'Normal - Démarrer dans 1-2 mois' },
    { value: 'planning', label: 'Planification - Pour plus tard' }
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <div className="header-badge">
          <FaPaperPlane /> CONTACT & INSCRIPTION
        </div>
        <h1 className="contact-title">
          Inscrivez-vous à la Formation IA
          <span className="title-sub">Transformez votre entreprise dès aujourd'hui</span>
        </h1>
        <p className="contact-intro">
          Prenez rendez-vous pour une consultation gratuite et découvrez 
          comment nos formations en IA peuvent booster votre productivité.
        </p>
      </div>

      <div className="contact-container">
        {/* Info Sidebar */}
        <div className="contact-sidebar">
          {/* Contact Info */}
          <div className="sidebar-card">
            <div className="card-header">
              <h3>
                <FaPhone className="header-icon" />
                Contact Direct
              </h3>
              <p>Nous répondons rapidement à vos questions</p>
            </div>
            
            <div className="contact-methods">
              <a href="tel:73371170" className="contact-method">
                <div className="method-icon phone">
                  <FaPhone />
                </div>
                <div className="method-details">
                  <strong>Téléphone Principal</strong>
                  <span className="method-value">73 371 170</span>
                  <small className="method-info">Lun-Ven: 8h-18h</small>
                </div>
              </a>
              
              <a href="mailto:centre.tft@gmail.com" className="contact-method">
                <div className="method-icon email">
                  <FaEnvelope />
                </div>
                <div className="method-details">
                  <strong>Email Professionnel</strong>
                  <span className="method-value">centre.tft@gmail.com</span>
                  <small className="method-info">Réponse sous 24h</small>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="sidebar-card stats-card">
            <div className="card-header">
              <h3>
                <FaChartLine className="header-icon" />
                Informations Clés
              </h3>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">🎓</div>
                <div className="stat-content">
                  <div className="stat-value">2 Formations</div>
                  <div className="stat-label">Débutant & Avancé</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaUsers />
                </div>
                <div className="stat-content">
                  <div className="stat-value">12 Max</div>
                  <div className="stat-label">Participants par session</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaClock />
                </div>
                <div className="stat-content">
                  <div className="stat-value">24h</div>
                  <div className="stat-label">Durée par formation</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaCalendarAlt />
                </div>
                <div className="stat-content">
                  <div className="stat-value">Flexible</div>
                  <div className="stat-label">Dates adaptées à votre agenda</div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="sidebar-card guarantees-card">
            <div className="card-header">
              <h3>
                <FaShieldAlt className="header-icon" />
                Nos Garanties
              </h3>
            </div>
            
            <div className="guarantees-list">
              <div className="guarantee-item">
                <FaCheckCircle className="guarantee-icon" />
                <span>Consultation gratuite pré-formation</span>
              </div>
              <div className="guarantee-item">
                <FaCheckCircle className="guarantee-icon" />
                <span>Support pendant 3 mois post-formation</span>
              </div>
              <div className="guarantee-item">
                <FaCheckCircle className="guarantee-icon" />
                <span>Certification officielle délivrée</span>
              </div>
              <div className="guarantee-item">
                <FaCheckCircle className="guarantee-icon" />
                <span>Garantie satisfaction ou remboursement</span>
              </div>
            </div>
          </div>

          {/* Urgency Notice */}
          <div className="urgency-notice">
            <div className="urgency-icon">🚨</div>
            <div className="urgency-content">
              <h4>Places Limitées</h4>
              <p>Maximum 12 participants par session pour garantir un accompagnement personnalisé</p>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="contact-form-container">
          {submitSuccess && (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <div className="success-content">
                <h4>Demande envoyée avec succès !</h4>
                <p>Nous vous recontacterons dans les 24 heures pour planifier votre consultation.</p>
              </div>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>
                <FaPaperPlane />
                Demande d'Inscription
              </h2>
              <p>Remplissez ce formulaire et nous vous recontacterons rapidement</p>
            </div>

            {/* Personal Information */}
            <div className="form-section">
              <div className="section-header">
                <h3>
                  <FaUser className="section-icon" />
                  Informations Personnelles
                </h3>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <FaUser className="label-icon" />
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Prénom et Nom"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope className="label-icon" />
                    Email Professionnel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="votre@entreprise.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <FaPhone className="label-icon" />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="73 371 170"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    <FaBuilding className="label-icon" />
                    Entreprise / Organisation *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="position" className="form-label">
                    <FaUser className="label-icon" />
                    Poste / Fonction
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Ex: Directeur, Chef de projet, Consultant..."
                  />
                </div>
              </div>
            </div>

            {/* Formation Details */}
            <div className="form-section">
              <div className="section-header">
                <h3>📚 Détails de la Formation</h3>
              </div>

              <div className="form-group">
                <label htmlFor="formationInterest" className="form-label">
                  Formation qui vous intéresse *
                </label>
                <select
                  id="formationInterest"
                  name="formationInterest"
                  value={formData.formationInterest}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Sélectionnez une option</option>
                  {formationOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="participants" className="form-label">
                    Nombre de participants
                  </label>
                  <select
                    id="participants"
                    name="participants"
                    value={formData.participants}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {participantOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="urgency" className="form-label">
                    Urgence de démarrage
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {urgencyOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="form-section">
              <div className="section-header">
                <h3>💬 Votre Besoin Spécifique</h3>
                <p>Décrivez ce que vous souhaitez automatiser ou améliorer</p>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message détaillé *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="6"
                  placeholder="Ex: Nous souhaitons automatiser notre service client, réduire le temps de traitement des emails, analyser automatiquement nos données commerciales..."
                />
              </div>
            </div>

            {/* Submit Section */}
            <div className="form-submit-section">
              <div className="privacy-notice">
                <FaShieldAlt className="privacy-icon" />
                <p>
                  Vos informations sont sécurisées et ne seront jamais partagées. 
                  En soumettant ce formulaire, vous acceptez d'être contacté concernant 
                  nos formations en IA.
                </p>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    Envoyer ma demande d'inscription
                  </>
                )}
              </button>

              <div className="response-time">
                <FaClock className="response-icon" />
                <span>Réponse garantie dans les 24 heures ouvrables</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;