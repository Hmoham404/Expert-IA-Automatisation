import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, intégrez EmailJS ou votre backend
    alert('Formulaire soumis! En production, cela enverrait un email.');
    console.log('Données du formulaire:', formData);
  };

  return (
    <section className="contact">
      <h2 className="section-title">📞 Prendre Contact</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>💬 Intéressé par la formation ?</h3>
          <p className="contact-description">
            Remplissez ce formulaire et je vous recontacterai dans les 24 heures 
            pour discuter de vos besoins spécifiques.
          </p>
          
          <div className="direct-contact">
            <h4>📱 Contact Direct</h4>
            <div className="direct-links">
              <a href="tel:73371170" className="contact-link">
                📞 73 371 170
              </a>
              <a href="mailto:centre.tft@gmail.com" className="contact-link">
                ✉️ centre.tft@gmail.com
              </a>
            </div>
          </div>
          
          <div className="urgency-notice">
            <p>🚨 <strong>Places limitées :</strong> Maximum 12 participants par session</p>
            
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom Complet *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="votre@email.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="XX XXX XXX"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Entreprise / Profession</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Votre société ou métier"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Votre besoin spécifique *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Décrivez ce que vous aimeriez automatiser avec l'IA..."
            />
          </div>
          
          <button type="submit" className="submit-btn">
            📨 Envoyer ma demande
          </button>
          
          <p className="form-note">
            * Champs obligatoires. Vos données ne seront pas partagées.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;