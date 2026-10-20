import React from 'react';
import { ArrowRight, MessageSquare, Check, PhoneCall, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="relative pt-32 pb-20 bg-gradient-to-b from-mkb-deep via-mkb-navy to-mkb-deep text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Colonne Gauche : Présentation et Titres Officiels */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 text-mkb-turquoise text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-mkb-turquoise shrink-0" />
              <span>Entreprise Multiservices à Kinshasa (Gombe)</span>
            </div>

            {/* Titre Principal conforme à la demande */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-display text-balance">
              <span className="text-white">+243MKB</span>
              <span className="block text-mkb-yellow mt-1">« {siteConfig.slogan} »</span>
            </h1>

            {/* Sous-titre officiel conforme */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Des solutions professionnelles pour votre quotidien, votre entreprise et vos événements.
              Une sélection rigoureuse d'agents et d'artisans qualifiés intervenant sur l'ensemble de Kinshasa.
            </p>

            {/* Garanties vérifiables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 pt-2">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-mkb-turquoise shrink-0" />
                <span>Personnel sélectionné et encadré</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-mkb-turquoise shrink-0" />
                <span>Interventions sur toutes les communes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-mkb-turquoise shrink-0" />
                <span>Devis rapide et personnalisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-mkb-turquoise shrink-0" />
                <span>Respect strict des engagements</span>
              </div>
            </div>

            {/* Les 3 Boutons d'Action Principaux */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#services"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-mkb-turquoise hover:bg-mkb-turquoise-dark text-mkb-deep transition-all shadow-md transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-mkb-yellow hover:bg-mkb-yellow-hover text-mkb-deep transition-all shadow-md transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Demander un devis</span>
              </button>

              <a
                href={buildDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all backdrop-blur-sm whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-emerald-400" />
                <span>Nous contacter sur WhatsApp</span>
              </a>
            </div>

            {/* Appel Rapide direct */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-white/10">
              <span className="flex items-center text-slate-300 font-medium">
                <PhoneCall className="w-3.5 h-3.5 text-mkb-yellow mr-1.5" />
                Lignes directes :
              </span>
              <a
                href={`tel:${siteConfig.phones.rawPrimary}`}
                className="text-slate-200 hover:text-mkb-turquoise transition-colors"
              >
                {siteConfig.phones.primary}
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={`tel:${siteConfig.phones.rawSecondary}`}
                className="text-slate-200 hover:text-mkb-turquoise transition-colors"
              >
                {siteConfig.phones.secondary}
              </a>
            </div>

          </div>

          {/* Colonne Droite : Image Marquee / Siège & Équipe */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-mkb-deep">
              <img
                src="/src/assets/images/hero_mkb_multiservices_1792482142132.jpg"
                alt="Équipe professionnelle et siège +243MKB à Kinshasa"
                className="w-full h-80 sm:h-96 lg:h-[430px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mkb-dark via-transparent to-transparent"></div>

              {/* Ancrage local officiel */}
              <div className="absolute bottom-4 left-4 right-4 bg-mkb-dark/95 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <p className="text-[11px] uppercase tracking-wider text-mkb-turquoise font-semibold">
                  Siège Social à Kinshasa
                </p>
                <p className="text-sm font-bold text-white mt-0.5">
                  N° 15, Avenue La Grâce, Quartier Onatra, Gombe
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  10 domaines d'activités pour entreprises & particuliers
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
