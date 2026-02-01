import React from 'react';
import './Formation.css';

const Formation = () => {
  const program = [
    {
      day: "JOUR 1",
      title: "FONDATIONS STRATÉGIQUES",
      morning: "Choisir le bon outil d'IA pour SON besoin métier",
      afternoon: "Prompt Engineering avancé pour résultats professionnels"
    },
    {
      day: "JOUR 2",
      title: "AUTOMATISATION POWER",
      morning: "Connecter l'IA à ses outils (CRM, Excel, Gmail) SANS CODER",
      afternoon: "Créer son premier workflow complet avec Make.com"
    },
    {
      day: "JOUR 3",
      title: "PROJET RÉEL & DÉPLOIEMENT",
      morning: "Résoudre un point de friction réel de son entreprise",
      afternoon: "Plan d'action personnalisé et suivi post-formation"
    }
  ];

  return (
    <section className="formation">
      <div className="formation-header">
        <h2 className="section-title">🎓 Formation Intensive IA Opérationnelle</h2>
        <div className="duration-badge">🗓️ 2-3 JOURS INTENSIFS</div>
      </div>
      
      <div className="objective-card">
        <h3>🎯 Objectif Principal de la Formation</h3>
        <p className="objective-text">
          "Chaque participant repart avec <strong>au moins 3 automations opérationnelles</strong> 
          pour son entreprise, avec un ROI mesurable dès le premier mois."
        </p>
      </div>
      
      <div className="program-container">
        <h3>📅 Programme Détaillé Jour par Jour</h3>
        
        {program.map((day, index) => (
          <div key={index} className="day-card">
            <div className="day-header">
              <span className="day-number">{day.day}</span>
              <span className="day-title">{day.title}</span>
            </div>
            <div className="day-content">
              <div className="session">
                <span className="session-time">⏰ MATIN (9h-12h)</span>
                <p>{day.morning}</p>
              </div>
              <div className="session">
                <span className="session-time">⏰ APRÈS-MIDI (14h-17h)</span>
                <p>{day.afternoon}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="target-audience">
        <h3>🎯 Public Cible</h3>
        <div className="audience-grid">
          <div className="audience-item">👨‍💼 Chefs d'entreprise</div>
          <div className="audience-item">👩‍💼 Responsables administratifs</div>
          <div className="audience-item">👨‍💻 Entrepreneurs</div>
          <div className="audience-item">👩‍🎓 Jeunes diplômés</div>
          <div className="audience-item">👨‍🔧 Professions libérales</div>
          <div className="audience-item">👩‍🏫 Formateurs</div>
        </div>
      </div>
    </section>
  );
};

export default Formation;