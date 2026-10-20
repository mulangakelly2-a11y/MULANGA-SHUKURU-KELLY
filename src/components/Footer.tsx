import React from 'react';
import { Phone, MapPin, MessageSquare, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenQuoteModal }) => {
  const currentYear = new Date().getFullYear();

  const socialChannels = [
    {
      name: 'WhatsApp Business',
      url: siteConfig.socials.whatsappBusiness,
      label: 'Discussion directe',
      isActive: true,
      color: 'hover:text-emerald-400'
    },
    {
      name: 'Facebook',
      url: siteConfig.socials.facebook,
      label: 'Page officielle',
      isActive: Boolean(siteConfig.socials.facebook),
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: siteConfig.socials.instagram,
      label: 'Galerie & réalisations',
      isActive: Boolean(siteConfig.socials.instagram),
      color: 'hover:text-pink-400'
    },
    {
      name: 'TikTok',
      url: siteConfig.socials.tiktok,
      label: 'Vidéos de démonstration',
      isActive: Boolean(siteConfig.socials.tiktok),
      color: 'hover:text-cyan-400'
    },
    {
      name: 'YouTube',
      url: siteConfig.socials.youtube,
      label: 'Vidéos de présentation',
      isActive: Boolean(siteConfig.socials.youtube),
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-mkb-dark text-slate-400 text-xs border-t border-white/10">
      
      {/* Section Supérieure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Identité +243MKB */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-mkb-turquoise to-mkb-navy flex items-center justify-center text-white font-black text-sm border border-mkb-turquoise/30">
                +243
              </div>
              <span className="text-xl font-black text-white font-display">MKB</span>
            </div>

            <p className="text-slate-300 italic font-medium">
              « {siteConfig.slogan} »
            </p>

            <p className="text-slate-400 leading-relaxed">
              Entreprise multiservices basée à Kinshasa regroupant 10 agences professionnelles pour particuliers, entreprises et événements.
            </p>
          </div>

          {/* Navigation Rapide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="hover:text-mkb-turquoise transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-mkb-turquoise transition-colors">Nos 10 Prestations</a></li>
              <li><a href="#a-propos" className="hover:text-mkb-turquoise transition-colors">À Propos</a></li>
              <li><a href="#pourquoi-nous" className="hover:text-mkb-turquoise transition-colors">Pourquoi Nous ?</a></li>
              <li><a href="#galerie" className="hover:text-mkb-turquoise transition-colors">Galerie Réalisations</a></li>
              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="text-mkb-yellow hover:underline font-bold"
                >
                  Demander un devis
                </button>
              </li>
            </ul>
          </div>

          {/* Lignes Téléphoniques et Adresse */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Coordonnées Officielles
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-mkb-turquoise shrink-0 mt-0.5" />
                <span>{siteConfig.address.fullFormatted}</span>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <Phone className="w-4 h-4 text-mkb-yellow shrink-0" />
                <a href={`tel:${siteConfig.phones.rawPrimary}`} className="hover:text-white transition-colors">
                  {siteConfig.phones.primary}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-mkb-yellow shrink-0" />
                <a href={`tel:${siteConfig.phones.rawSecondary}`} className="hover:text-white transition-colors">
                  {siteConfig.phones.secondary}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-mkb-yellow shrink-0" />
                <a href={`tel:${siteConfig.phones.rawTertiary}`} className="hover:text-white transition-colors">
                  {siteConfig.phones.tertiary}
                </a>
              </div>
            </div>
          </div>

          {/* Suivez +243MKB & Canaux Officiels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Suivez +243MKB
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Consultez nos canaux officiels pour suivre nos démonstrations et actualités :
            </p>

            <div className="space-y-2 pt-1">
              {socialChannels.map((channel) => (
                <div key={channel.name} className="flex items-center justify-between">
                  <span className="text-slate-300 font-medium">{channel.name}</span>
                  {channel.isActive && channel.url ? (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-slate-300 ${channel.color} transition-colors`}
                    >
                      <span className="mr-1">{channel.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-600 italic">
                      À configurer
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
              * Les liens vers les réseaux sociaux peuvent être configurés dans <code className="text-slate-400">src/config/siteConfig.ts</code>.
            </p>
          </div>

        </div>
      </div>

      {/* Barre Inférieure de Droits & Mentions */}
      <div className="bg-black/50 border-t border-slate-800/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
          <p>© {currentYear} {siteConfig.companyName}. Tous droits réservés — Kinshasa, RDC.</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-mkb-turquoise transition-colors underline"
            >
              Politique de Confidentialité
            </button>
            <span className="text-slate-700">·</span>
            <span>Gombe, Kinshasa</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
