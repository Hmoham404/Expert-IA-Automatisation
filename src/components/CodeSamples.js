import React, { useState } from 'react';
import './CodeSamples.css';

const CodeSamples = () => {
  const [activeTab, setActiveTab] = useState('make');

  const codeExamples = {
    make: {
      title: "Make.com - Workflow d'Automatisation",
      description: "Exemple d'intégration IA avec outils métiers",
      code: `// Scénario : Automatisation du traitement des leads
1. Trigger : Nouvel email reçu dans Gmail
2. Action : ChatGPT analyse le contenu
3. Condition : Si c'est une demande commerciale
4. Action : Créer une fiche dans Google Sheets
5. Action : Envoyer une réponse automatique personnalisée
6. Action : Notifier sur Slack l'équipe commerciale

// Résultat : Gain de temps : 2h/jour
// ROI : 300% en 1 mois`
    },
    zapier: {
      title: "Zapier - Connexion CRM & IA",
      description: "Automatisation entre HubSpot et OpenAI",
      code: `// ZAP : Qualification automatique des leads
1. Événement : Nouveau contact dans HubSpot
2. Action : Envoyer les infos à GPT-4
3. Logique : Analyser le potentiel commercial
4. Action : Mettre à jour le score de lead
5. Action : Assigner au bon commercial
6. Action : Programmer un suivi automatique

// Avantage : Lead response time < 5min`
    },
    prompt: {
      title: "Prompt Engineering Avancé",
      description: "Template pour résultats professionnels",
      code: `// SYSTEM PROMPT (Rôle)
"Tu es un expert en analyse commerciale avec 15 ans d'expérience."

// CONTEXT PROMPT (Contexte)
"Je suis directeur d'une PME dans le secteur textile.
J'ai besoin d'analyser ce rapport de vente..."

// FORMAT PROMPT (Format attendu)
"Fournis une analyse structurée en :
1. Points forts (bullet points)
2. Risques identifiés
3. Recommandations actionnables
4. KPIs à suivre"

// TONE PROMPT (Ton)
"Ton professionnel, concis, orienté décision.
Utilise un vocabulaire business."
  
// EXEMPLES (Few-shot learning)
"Exemple de bonne analyse : [exemple]
Exemple à éviter : [exemple]"`
    },
    api: {
      title: "API Integration - Node.js",
      description: "Exemple d'appel API OpenAI",
      code: `const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

async function analyzeBusinessDocument(text) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: "Expert en analyse de documents business"
      },
      {
        role: "user",
        content: \`Analyse ce contrat : \${text}\`
      }
    ],
    temperature: 0.3,
    max_tokens: 1500
  });
  
  return completion.choices[0].message;
}

// Usage : Extraction d'informations clés
// Avantage : Analyse de 50 pages en 30 secondes`
    }
  };

  return (
    <section className="code-samples">
      <h2 className="section-title">💻 Exemples de Code & Workflows</h2>
      <p className="section-subtitle">
        Démonstration des solutions que vous apprendrez à créer
      </p>
      
      <div className="tabs">
        {Object.keys(codeExamples).map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'make' && '🔧 Make.com'}
            {tab === 'zapier' && '⚡ Zapier'}
            {tab === 'prompt' && '🎯 Prompts'}
            {tab === 'api' && '🔌 API'}
          </button>
        ))}
      </div>
      
      <div className="code-container">
        <div className="code-header">
          <h3>{codeExamples[activeTab].title}</h3>
          <p>{codeExamples[activeTab].description}</p>
        </div>
        
        <pre className="code-block">
          <code>{codeExamples[activeTab].code}</code>
        </pre>
        
        <div className="code-benefits">
          <h4>✅ Bénéfices Business</h4>
          <ul>
            {activeTab === 'make' && (
              <>
                <li>Automatisation des tâches manuelles</li>
                <li>Réduction des erreurs humaines</li>
                <li>Gain de temps significatif</li>
              </>
            )}
            {activeTab === 'zapier' && (
              <>
                <li>Connectivité entre 5000+ apps</li>
                <li>Pas de compétences coding requises</li>
                <li>Scalabilité immédiate</li>
              </>
            )}
            {activeTab === 'prompt' && (
              <>
                <li>Résultats professionnels cohérents</li>
                <li>Réduction des hallucinations IA</li>
                <li>Personnalisation pour votre secteur</li>
              </>
            )}
            {activeTab === 'api' && (
              <>
                <li>Intégration personnalisée</li>
                <li>Contrôle total des workflows</li>
                <li>Meilleure sécurité des données</li>
              </>
            )}
          </ul>
        </div>
      </div>
      
      <div className="tools-showcase">
        <h3>🛠️ Stack Technique Maîtrisée</h3>
        <div className="tools-grid">
          <div className="tool">OpenAI GPT-4</div>
          <div className="tool">Google Gemini Pro</div>
          <div className="tool">Anthropic Claude</div>
          <div className="tool">Make.com</div>
          <div className="tool">Zapier</div>
          <div className="tool">n8n</div>
          <div className="tool">Google Apps Script</div>
          <div className="tool">Power Automate</div>
        </div>
      </div>
    </section>
  );
};

export default CodeSamples;