import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [quickContactSent, setQuickContactSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderMessage.trim()) return;

    const formattedMessage = `Bonjour +243MKB, je suis ${senderName.trim()}.\n\nMessage : ${senderMessage.trim()}`;
    const url = buildDirectWhatsAppUrl(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    setQuickContactSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-mkb-turquoise-dark">
            Nous Contacter
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-mkb-deep font-display tracking-tight text-balance">
            Coordonnées Officielles & Localisation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Notre équipe commerciale et opérationnelle est à votre disposition pour toute intervention ou renseignement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Colonne Coordonnées Téléphoniques & Adresse */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Boîte 3 Numéros de téléphone */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-mkb-deep">
                <Phone className="w-5 h-5 text-mkb-yellow" />
                <h3 className="font-bold text-base font-display">Lignes Téléphoniques Directes</h3>
              </div>
              <p className="text-xs text-slate-500">
                Touchez un numéro pour lancer un appel téléphonique immédiat :
              </p>

              <div className="space-y-2">
                <a
                  href={`tel:${siteConfig.phones.rawPrimary}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <span className="font-bold text-sm text-mkb-deep">{siteConfig.phones.primary}</span>
                  <span className="text-[11px] font-semibold text-mkb-turquoise-dark">Ligne 1 (Standard)</span>
                </a>

                <a
                  href={`tel:${siteConfig.phones.rawSecondary}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <span className="font-bold text-sm text-mkb-deep">{siteConfig.phones.secondary}</span>
                  <span className="text-[11px] font-medium text-slate-500">Ligne 2</span>
                </a>

                <a
                  href={`tel:${siteConfig.phones.rawTertiary}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <span className="font-bold text-sm text-mkb-deep">{siteConfig.phones.tertiary}</span>
                  <span className="text-[11px] font-medium text-slate-500">Ligne 3</span>
                </a>
              </div>
            </div>

            {/* Boîte Adresse */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-mkb-deep">
                <MapPin className="w-5 h-5 text-mkb-turquoise" />
                <h3 className="font-bold text-base font-display">Adresse du Siège</h3>
              </div>
              <p className="text-sm font-semibold text-slate-800">
                {siteConfig.address.street}, {siteConfig.address.neighborhood}
              </p>
              <p className="text-xs text-slate-600">
                {siteConfig.address.commune}, {siteConfig.address.city}, {siteConfig.address.country}
              </p>
              
              <div className="pt-2 border-t border-slate-100 flex items-start space-x-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Horaires d’accueil physique : confirmés sur rendez-vous ou par appel direct.</span>
              </div>
            </div>

            {/* Bouton direct WhatsApp */}
            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Contacter la direction sur WhatsApp</span>
            </a>

          </div>

          {/* Colonne Formulaire Rapide & Carte */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Formulaire de message express */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-mkb-deep mb-1 font-display">
                Envoyer un Message Rapide
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Une question spécifique ? Transmettez-la nous directement.
              </p>

              {quickContactSent ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Votre message est ouvert dans WhatsApp pour être transmis. Merci !</span>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="quickName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Votre Nom ou Raison Sociale
                    </label>
                    <input
                      id="quickName"
                      type="text"
                      required
                      placeholder="Ex: Sarah Mwamba"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-mkb-turquoise focus:ring-2 focus:ring-mkb-turquoise/20 outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="quickMsg" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Votre Message
                    </label>
                    <textarea
                      id="quickMsg"
                      rows={3}
                      required
                      placeholder="Votre demande ou question..."
                      value={senderMessage}
                      onChange={(e) => setSenderMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-mkb-turquoise focus:ring-2 focus:ring-mkb-turquoise/20 outline-none text-sm bg-white leading-relaxed"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-sm bg-mkb-deep hover:bg-mkb-navy text-white transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-mkb-yellow" />
                    <span>Transmettre vers WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Carte Google Maps Gombe Kinshasa */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-64 bg-slate-200 relative">
              <iframe
                title="Carte Siège +243MKB à Gombe, Kinshasa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.228512141527!2d15.275!3d-4.305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33f4a0cbb029%3A0xb15bcf081b29a67a!2sGombe%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1700000000000!5m2!1sfr!2scd"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-2 left-2 bg-mkb-deep/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-sm">
                Avenue La Grâce, Gombe — Kinshasa
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
