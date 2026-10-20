import React from 'react';
import { Layers, Users, Clock, ShieldCheck } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      icon: Layers,
      title: 'Un Interlocuteur Unique',
      description:
        'Plus besoin de chercher des prestataires séparés : sécurité, intendance, transport et événements sont coordonnés par une seule direction.'
    },
    {
      icon: Users,
      title: 'Personnel Soigneusement Sélectionné',
      description:
        'Chaque agent, nounou, chauffeur ou technicien fait l’objet d’une vérification approfondie de ses compétences et de sa moralité.'
    },
    {
      icon: Clock,
      title: 'Réactivité & Respect des Délais',
      description:
        'Qu’il s’agisse d’un besoin ponctuel urgent ou d’un contrat récurrent, nos équipes s’engagent sur des horaires et des délais stricts.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparence & Proximité',
      description:
        'Des devis détaillés sans frais cachés, un suivi direct par nos superviseurs et une présence active dans la commune de la Gombe.'
    }
  ];

  return (
    <section id="pourquoi-nous" className="py-20 bg-mkb-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-mkb-yellow">
            Pourquoi Nous Choisir ?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-balance">
            La Garantie d'un Partenaire Sérieux à Kinshasa
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Faire appel à +243MKB, c'est confier vos exigences du quotidien et de vos événements
            à une organisation professionnelle et attentive à vos impératifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-mkb-navy/60 border border-white/10 hover:border-mkb-turquoise/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-mkb-turquoise/15 text-mkb-turquoise flex items-center justify-center border border-mkb-turquoise/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-display text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
