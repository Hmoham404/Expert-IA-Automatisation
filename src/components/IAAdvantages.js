import React from 'react';
import './IAAdvantages.css';

const IAAdvantages = () => {
  const advantages = [
    {
      icon: "⏱️",
      title: "Gain de temps radical",
      description: "Automatisez 70% de vos tâches répétitives",
      details: ["Traitement emails automatique", "Génération de rapports", "Saisie de données"]
    },
    {
      icon: "💰",
      title: "ROI immédiat",
      description: "Réduction des coûts opérationnels dès le premier mois",
      details: ["Économie sur les outils", "Productivité augmentée", "Erreurs réduites"]
    },
    {
      icon: "🚀",
      title: "Innovation accessible",
      description: "Pas besoin d'être ingénieur pour innover",
      details: ["Interfaces no-code", "Templates prêts à l'emploi", "Support personnalisé"]
    },
    {
      icon: "📈",
      title: "Décision éclairée",
      description: "L'IA analyse vos données pour mieux décider",
      details: ["Analyses prédictives", "Recommandations personnalisées", "KPI en temps réel"]
    },
    {
      icon: "🏆",
      title: "Avantage concurrentiel",
      description: "Soyez le premier à adopter dans votre secteur",
      details: ["Différenciation", "Service client amélioré", "Innovation continue"]
    }
  ];

  return (
    <section className="ia-advantages">
      <h2 className="section-title">🚀 Les 5 Avantages Concrets de l'IA Appliquée</h2>
      <p className="section-subtitle">Votre idée transformée en avantages business mesurables</p>
      
      <div className="advantages-grid">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-card">
            <div className="advantage-header">
              <span className="advantage-icon">{advantage.icon}</span>
              <h3>{advantage.title}</h3>
            </div>
            <p className="advantage-description">{advantage.description}</p>
            <ul className="advantage-details">
              {advantage.details.map((detail, idx) => (
                <li key={idx}>✓ {detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="stats-section">
        <h3>📊 Impact Mesurable Après la Formation</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">70%</div>
            <div className="stat-label">Temps gagné sur les tâches répétitives</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">40%</div>
            <div className="stat-label">Réduction des erreurs humaines</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">3x</div>
            <div className="stat-label">Retour sur investissement en 3 mois</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">100%</div>
            <div className="stat-label">Des participants appliquent immédiatement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IAAdvantages;