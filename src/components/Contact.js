import React, { useState } from 'react';
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
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 1500));
      
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
      
      setTimeout(() => setSubmitSuccess(false), 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Options adaptées aux formations IA
  const formationOptions = [
    { value: 'fondamentaux', label: 'Formation Fondamentaux - Automatisation IA' },
    { value: 'expert', label: 'Formation Expert - Super Agents IA' },
    { value: 'combiné', label: 'Package Complet (Fondamentaux + Expert)' },
    { value: 'personnalisee', label: 'Formation Personnalisée sur Mesure' },
    { value: 'audit', label: 'Audit Automatisation & Gestion des Données' }
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
      {/* Header avec mention Tunisie */}
      <div className="contact-header">
        <div className="header-compliance">
          <span className="tunisia-flag">🇹🇳</span>
          <span>Formation certifiante conforme à la législation tunisienne</span>
        </div>
        <div className="header-badge">🎓 DEMANDE D'INSCRIPTION</div>
        <h1 className="contact-title">
          Inscrivez-vous à la Formation IA
          <span className="title-sub">Automatisez vos processus et optimisez vos données CSV/Excel</span>
        </h1>
        <p className="contact-intro">
          Prenez rendez-vous pour une consultation gratuite et découvrez 
          comment nos formations en IA peuvent transformer votre productivité 
          et optimiser la gestion de vos données clients.
        </p>
        
        <div className="header-stats">
          <div className="header-stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Taux de satisfaction</div>
          </div>
          <div className="header-stat">
            <div className="stat-number">24h</div>
            <div className="stat-label">Formation intensive</div>
          </div>
          <div className="header-stat">
            <div className="stat-number">📊</div>
            <div className="stat-label">Gestion CSV/Excel</div>
          </div>
          <div className="header-stat">
            <div className="stat-number">🇹🇳</div>
            <div className="stat-label">Certifié Tunisie</div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        {/* Sidebar Informations */}
        <div className="contact-sidebar">
          {/* Contact Direct */}
          <div className="sidebar-card">
            <div className="card-header">
              <h3>
                <span className="header-icon">📞</span>
                Contact Direct
              </h3>
              <p>Réponse rapide garantie sous 24h</p>
            </div>
            
            <div className="contact-methods">
              <a href="tel:73371170" className="contact-method">
                <div className="method-icon phone">📱</div>
                <div className="method-details">
                  <strong>Téléphone Principal</strong>
                  <span className="method-value">73 371 170</span>
                  <small className="method-info">Lun-Ven: 8h-18h</small>
                </div>
              </a>
              
              <a href="mailto:centre.tft@gmail.com" className="contact-method">
                <div className="method-icon email">✉️</div>
                <div className="method-details">
                  <strong>Email Professionnel</strong>
                  <span className="method-value">centre.tft@gmail.com</span>
                  <small className="method-info">Réponse sous 24h</small>
                </div>
              </a>
              
              <a href="https://wa.me/21673371170" className="contact-method">
                <div className="method-icon whatsapp">💬</div>
                <div className="method-details">
                  <strong>WhatsApp</strong>
                  <span className="method-value">73 371 170</span>
                  <small className="method-info">Support rapide</small>
                </div>
              </a>
            </div>
          </div>

          {/* Avantages Formation */}
          <div className="sidebar-card stats-card">
            <div className="card-header">
              <h3>
                <span className="header-icon">✨</span>
                Avantages Formation
              </h3>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">🤖</div>
                <div className="stat-content">
                  <div className="stat-value">IA Pratique</div>
                  <div className="stat-label">100% orientée métier</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <div className="stat-value">CSV/Excel</div>
                  <div className="stat-label">Gestion automatisée</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">👨‍🏫</div>
                <div className="stat-content">
                  <div className="stat-value">Expert</div>
                  <div className="stat-label">10+ ans expérience</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">🔄</div>
                <div className="stat-content">
                  <div className="stat-value">3 mois</div>
                  <div className="stat-label">Suivi inclus</div>
                </div>
              </div>
            </div>
          </div>

          {/* Garanties */}
          <div className="sidebar-card guarantees-card">
            <div className="card-header">
              <h3>
                <span className="header-icon">✅</span>
                Nos Garanties
              </h3>
            </div>
            
            <div className="guarantees-list">
              <div className="guarantee-item">
                <span className="guarantee-icon">✓</span>
                <span>Consultation gratuite pré-formation</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">✓</span>
                <span>Certification reconnue Tunisie</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">✓</span>
                <span>Support 3 mois post-formation</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">✓</span>
                <span>Focus gestion données CSV/Excel</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">✓</span>
                <span>Conforme législation tunisienne</span>
              </div>
            </div>
          </div>

          {/* Processus Inscription */}
          <div className="sidebar-card process-card">
            <div className="card-header">
              <h3>
                <span className="header-icon">📝</span>
                Processus Inscription
              </h3>
            </div>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <strong>Contact initial</strong>
                  <p>Analyse de vos besoins</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <strong>Audit gratuit</strong>
                  <p>Évaluation personnalisée</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <strong>Programme adapté</strong>
                  <p>Planning personnalisé</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <strong>Démarrage</strong>
                  <p>Formation et certification</p>
                </div>
              </div>
            </div>
          </div>

          {/* Avis Clients */}
          <div className="sidebar-card testimonials-card">
            <div className="card-header">
              <h3>
                <span className="header-icon">💬</span>
                Avis Participants
              </h3>
            </div>
            
            <div className="testimonials">
              <div className="testimonial">
                <p>"Formation excellente ! J'ai automatisé le traitement de mes fichiers Excel en 2 jours."</p>
                <div className="testimonial-author">
                  <strong>Karim B.</strong>
                  <span>PME Tunisienne</span>
                </div>
              </div>
              
              <div className="testimonial">
                <p>"Le module gestion des données CSV m'a fait gagner 15h par semaine !"</p>
                <div className="testimonial-author">
                  <strong>Sarah M.</strong>
                  <span>Startup Tech</span>
                </div>
              </div>
            </div>
          </div>

          {/* Urgence */}
          <div className="urgency-notice">
            <div className="urgency-icon">🚨</div>
            <div className="urgency-content">
              <h4>Places Limitées</h4>
              <p>Maximum 12 participants par session pour un accompagnement optimal</p>
            </div>
          </div>
        </div>

        {/* Formulaire Principal */}
        <div className="contact-form-container">
          {submitSuccess && (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <div className="success-content">
                <h4>Demande envoyée avec succès !</h4>
                <p>Notre équipe vous recontactera dans les 24 heures pour planifier votre consultation gratuite.</p>
              </div>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>
                <span className="form-header-icon">📋</span>
                Formulaire d'Inscription
              </h2>
              <p>Remplissez ce formulaire pour bénéficier d'une consultation gratuite</p>
            </div>

            {/* Informations Personnelles */}
            <div className="form-section">
              <div className="section-header">
                <h3>
                  <span className="section-icon">👤</span>
                  Informations Personnelles
                </h3>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <span className="label-icon">👤</span>
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
                    <span className="label-icon">✉️</span>
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
                    <span className="label-icon">📱</span>
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="73 371 170"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    <span className="label-icon">🏢</span>
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
                    <span className="label-icon">💼</span>
                    Poste / Fonction *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Ex: Directeur, Chef de projet, Consultant..."
                  />
                </div>
              </div>
            </div>

            {/* Détails Formation */}
            <div className="form-section">
              <div className="section-header">
                <h3>
                  <span className="section-icon">🎓</span>
                  Détails de la Formation
                </h3>
                <p>Sélectionnez la formation adaptée à vos besoins</p>
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
                  <option value="">Sélectionnez une formation</option>
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
                    Nombre de participants *
                  </label>
                  <select
                    id="participants"
                    name="participants"
                    value={formData.participants}
                    onChange={handleChange}
                    required
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
                    Urgence de démarrage *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
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

            {/* Besoins Spécifiques */}
            <div className="form-section">
              <div className="section-header">
                <h3>
                  <span className="section-icon">💭</span>
                  Vos Besoins Spécifiques
                </h3>
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
                  placeholder="Ex: 
• Nous traitons manuellement des fichiers CSV de 10,000 lignes
• Nous souhaitons automatiser notre reporting Excel
• Besoin de synchroniser nos données avec notre CRM
• Automatisation des emails clients basée sur des données Excel
• Analyse automatique de nos données commerciales..."
                />
              </div>

              <div className="data-type-selector">
                <h4>Types de données à automatiser :</h4>
                <div className="data-options">
                  <label className="data-option">
                    <input type="checkbox" name="data-csv" />
                    <span className="checkmark"></span>
                    <span>Fichiers CSV</span>
                  </label>
                  <label className="data-option">
                    <input type="checkbox" name="data-excel" />
                    <span className="checkmark"></span>
                    <span>Fichiers Excel</span>
                  </label>
                  <label className="data-option">
                    <input type="checkbox" name="data-db" />
                    <span className="checkmark"></span>
                    <span>Bases de données</span>
                  </label>
                  <label className="data-option">
                    <input type="checkbox" name="data-api" />
                    <span className="checkmark"></span>
                    <span>API externes</span>
                  </label>
                  <label className="data-option">
                    <input type="checkbox" name="data-crm" />
                    <span className="checkmark"></span>
                    <span>CRM / ERP</span>
                  </label>
                  <label className="data-option">
                    <input type="checkbox" name="data-autres" />
                    <span className="checkmark"></span>
                    <span>Autres formats</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Soumission */}
            <div className="form-submit-section">
              <div className="compliance-notice">
                <span className="compliance-icon">🇹🇳</span>
                <div className="compliance-content">
                  <h4>Formation conforme aux normes tunisiennes</h4>
                  <p>Certification reconnue, respect du RGPD et des lois locales sur la formation professionnelle</p>
                </div>
              </div>

              <div className="privacy-notice">
                <span className="privacy-icon">🔒</span>
                <p>
                  Vos informations sont sécurisées et ne seront jamais partagées. 
                  En soumettant ce formulaire, vous acceptez d'être contacté concernant 
                  nos formations en IA et la gestion automatisée des données.
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
                    <span className="btn-icon">🚀</span>
                    Envoyer ma demande d'inscription
                  </>
                )}
              </button>

              <div className="response-guarantee">
                <span className="response-icon">⏱️</span>
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