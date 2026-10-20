import React, { useState } from 'react';
import { servicesData } from '../config/siteConfig';
import { ServiceItem } from '../types';
import { ArrowRight, Check, Eye } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuoteWithService
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'Toutes les prestations (10)' },
    { id: 'securite', label: 'Sécurité' },
    { id: 'maison', label: 'Maison & Transport' },
    { id: 'evenement', label: 'Événements & Traiteur' },
    { id: 'beaute', label: 'Beauté & Esthétique' },
    { id: 'art', label: 'Art & Finition' }
  ];

  const filteredServices =
    activeCategory === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services" className="py-20 bg-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-mkb-turquoise-dark">
            Nos Métiers & Spécialités
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-mkb-deep font-display tracking-tight text-balance">
            Prestations Professionnelles Complètes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pour votre domicile, vos opérations d’entreprise ou l'organisation de vos réceptions,
            +243MKB mobilise des intervenants qualifiés et formés aux exigences de fiabilité à Kinshasa.
          </p>
        </div>

        {/* Contrôle de filtre interactif (Segmented control) */}
        <div className="flex flex-wrap justify-center gap-1.5 p-1.5 bg-slate-200/80 rounded-2xl max-w-2xl mx-auto mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-mkb-deep text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille des 10 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const hasFailed = failedImages[service.id];

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Cadre Image avec Zero-Broken-Image Policy */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  {!hasFailed ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      onError={() => handleImageError(service.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-mkb-deep to-mkb-navy flex flex-col items-center justify-center p-6 text-white text-center">
                      <div className="w-12 h-12 rounded-xl bg-mkb-turquoise/20 flex items-center justify-center mb-2">
                        <span className="font-bold text-mkb-turquoise text-lg">MKB</span>
                      </div>
                      <span className="text-sm font-bold">{service.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-mkb-yellow uppercase tracking-wider block">
                      Service {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <h3 className="text-lg font-bold font-display leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Corps de la Carte */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Garanties professionnelles :
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-mkb-turquoise shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center justify-center whitespace-nowrap"
                    >
                      <Eye className="w-3.5 h-3.5 mr-1 text-slate-500" />
                      <span>Détails</span>
                    </button>

                    <button
                      onClick={() => onOpenQuoteWithService(service.title)}
                      className="flex-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-mkb-yellow hover:bg-mkb-yellow-hover text-mkb-deep transition-all shadow-sm flex items-center justify-center whitespace-nowrap"
                    >
                      <span>Demander ce service</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
