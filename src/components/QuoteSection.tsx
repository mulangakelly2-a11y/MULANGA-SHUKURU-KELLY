import React, { useState, useEffect } from 'react';
import { servicesData, communesKinshasa } from '../config/siteConfig';
import { buildWhatsAppQuoteUrl } from '../utils/whatsapp';
import { QuoteFormData } from '../types';
import { Send, AlertCircle, CheckCircle, MessageSquare } from 'lucide-react';

interface QuoteSectionProps {
  preselectedService?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || servicesData[0].title,
    date: '',
    location: 'Gombe',
    description: ''
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccessSent, setIsSuccessSent] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation des champs obligatoires
    if (!formData.fullName.trim()) {
      setErrorMessage('Veuillez renseigner votre nom complet.');
      return;
    }

    if (!formData.phone.trim()) {
      setErrorMessage('Veuillez renseigner votre numéro de téléphone pour que nous puissions vous recontacter.');
      return;
    }

    // Validation sommaire du numéro (au moins 8 caractères)
    const cleanedPhone = formData.phone.replace(/[^0-9+]/g, '');
    if (cleanedPhone.length < 8) {
      setErrorMessage('Veuillez saisir un numéro de téléphone valide (ex : +243 810 338 579).');
      return;
    }

    if (!formData.description.trim()) {
      setErrorMessage('Veuillez préciser la nature de votre besoin ou les détails de votre événement.');
      return;
    }

    // Construction du lien WhatsApp professionnel
    const whatsappUrl = buildWhatsAppQuoteUrl(formData);

    // Ouverture vers WhatsApp Business
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSuccessSent(true);
  };

  const handleReset = () => {
    setIsSuccessSent(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: servicesData[0].title,
      date: '',
      location: 'Gombe',
      description: ''
    });
  };

  return (
    <section id="devis" className="py-20 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-mkb-turquoise-dark">
            Devis & Estimation
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-mkb-deep font-display tracking-tight text-balance">
            Demander un Devis Gratuit
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Remplissez ce formulaire pour formater votre demande. Vos indications seront transmises
            directement à notre direction via <strong>WhatsApp Business</strong> pour une estimation claire et rapide.
          </p>
        </div>

        {/* Boîte Formulaire */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          
          {/* Message de succès après ouverture */}
          {isSuccessSent ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-mkb-deep font-display">
                  Votre demande est prête sur WhatsApp !
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  L'application WhatsApp a été ouverte avec votre message formaté. Si la discussion ne s'est pas affichée automatiquement, vous pouvez cliquer sur le bouton ci-dessous.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={buildWhatsAppQuoteUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Ouvrir à nouveau WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs text-slate-600 hover:text-slate-900 bg-slate-200 hover:bg-slate-300 transition-colors"
                >
                  Rédiger une autre demande
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Message d'erreur s'il y a un champ manquant */}
              {errorMessage && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start space-x-2"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Nom complet */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Ex: Jean-Luc Kalonji"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-mkb-turquoise focus:ring-2 focus:ring-mkb-turquoise/20 outline-none text-sm bg-white"
                  />
                </div>

                {/* Numéro de téléphone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Numéro de téléphone (WhatsApp) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Ex: +243 810 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-mkb-turquoise focus:ring-2 focus:ring-mkb-turquoise/20 outline-none text-sm bg-white"
                  />
                </div>

                {/* Adresse email (facultatif) */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Adresse e-mail <span className="text-slate-400 font-normal">(Facultatif)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ex: contact@entreprise.cd"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-mkb-turquoise focus:ring-2 focus:ring-mkb-turquoise/20 outline-none text-sm bg-white"
                  />
                </div>

                {/* Service souhaité */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Service souhaité <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-mkb-turquoise focus:ring-2 focus:ring-mkb-turquoise/20 outline-none text-sm bg-white font-medium text-slate-800"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date souhaitée */}
                <div>
                  <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Date souhaitée de la prestation
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-mkb-turquoise focus:ring-2 focus:ring-mkb-turquoise/20 outline-none text-sm bg-white"
                  />
                </div>

                {/* Commune / Lieu */}
                <div>
                  <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Lieu / Commune à Kinshasa <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-mkb-turquoise focus:ring-2 focus:ring-mkb-turquoise/20 outline-none text-sm bg-white font-medium text-slate-800"
                  >
                    {communesKinshasa.map((commune) => (
                      <option key={commune} value={commune}>
                        {commune}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Description du besoin */}
              <div>
                <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Description précise de votre besoin <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  placeholder="Décrivez votre demande : nombre d'agents ou de convives, durée, lieu exact, préférences particulières..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-mkb-turquoise focus:ring-2 focus:ring-mkb-turquoise/20 outline-none text-sm bg-white leading-relaxed"
                ></textarea>
              </div>

              {/* Mention transparente requise par le cahier des charges */}
              <p className="text-[11px] text-slate-500 leading-relaxed">
                * Note de transparence : ce formulaire ne stocke pas de données dans un serveur distant non sollicité. Il formate vos renseignements et ouvre directement WhatsApp Business avec le numéro officiel de +243MKB.
              </p>

              {/* Bouton d'envoi WhatsApp */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm sm:text-base bg-mkb-yellow hover:bg-mkb-yellow-hover text-mkb-deep shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer ma demande sur WhatsApp</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
