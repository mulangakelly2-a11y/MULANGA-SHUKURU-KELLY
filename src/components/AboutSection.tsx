import React from 'react';
import { ShieldCheck, Target, HeartHandshake, MapPin, Sparkles, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="a-propos" className="py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Colonne Gauche : Visuel et Ancrage local */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/src/assets/images/service_catering_gourmet_1792482143054.jpg"
                alt="Excellence du service traiteur et événementiel +243MKB"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mkb-deep/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-mkb-yellow uppercase tracking-wider">
                  Rigueur & Discrétion
                </p>
                <p className="text-sm font-bold">
                  Une équipe mobilisable pour tous vos besoins à Kinshasa
                </p>
              </div>
            </div>

            {/* Encadré Adresse Physique */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-mkb-turquoise shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-mkb-deep uppercase tracking-wider">
                  Adresse physique
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  {siteConfig.address.fullFormatted}
                </p>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Mission, Vision & Engagements */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-mkb-turquoise-dark">
                À Propos de l'Entreprise
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-mkb-deep font-display tracking-tight text-balance">
                +243MKB — Le Partenaire Multiservices de Référence
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>+243MKB</strong> est une entreprise multiservices implantée dans la commune de la Gombe à Kinshasa. 
              Notre vocation est d'apporter aux ménages, aux cadres d'entreprises, aux institutions et aux organisateurs d'événements 
              une offre globale de prestations soignées, fiables et exécutées avec un sens aigu du détail.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              En fédérant sous une direction unique des agences expertes en sécurité, intendance de maison, transport, 
              gastronomie, mise en beauté et rénovation, nous éliminons la complexité de gérer de multiples prestataires non vérifiés.
            </p>

            {/* Les 6 Engagements Clés */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center space-x-2 text-mkb-deep">
                  <ShieldCheck className="w-4 h-4 text-mkb-turquoise shrink-0" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">Le Professionnalisme</h3>
                </div>
                <p className="text-xs text-slate-600">
                  Des méthodes rodées, des tenues soignées et une discipline exemplaire sur le terrain.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center space-x-2 text-mkb-deep">
                  <Sparkles className="w-4 h-4 text-mkb-yellow shrink-0" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">La Qualité des Prestations</h3>
                </div>
                <p className="text-xs text-slate-600">
                  Une exigence constante de finition, qu'il s'agisse d'un banquet traiteur ou de peinture d'un local.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center space-x-2 text-mkb-deep">
                  <Target className="w-4 h-4 text-mkb-turquoise shrink-0" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">Le Respect des Engagements</h3>
                </div>
                <p className="text-xs text-slate-600">
                  Ponctualité rigoureuse, respect des horaires et stricte conformité aux termes convenus.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center space-x-2 text-mkb-deep">
                  <HeartHandshake className="w-4 h-4 text-mkb-yellow shrink-0" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">L'Écoute des Clients</h3>
                </div>
                <p className="text-xs text-slate-600">
                  Compréhension approfondie de vos attentes spécifiques pour chaque mission confiée.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center space-x-2 text-mkb-deep">
                  <ShieldCheck className="w-4 h-4 text-mkb-turquoise shrink-0" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">La Diversité des Services</h3>
                </div>
                <p className="text-xs text-slate-600">
                  10 agences spécialisées regroupées sous une coordination unique et réactive.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center space-x-2 text-mkb-deep">
                  <Phone className="w-4 h-4 text-mkb-yellow shrink-0" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">Disponibilité de l'Équipe</h3>
                </div>
                <p className="text-xs text-slate-600">
                  Trois lignes téléphoniques directes et un canal WhatsApp permanent pour vos urgences.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
