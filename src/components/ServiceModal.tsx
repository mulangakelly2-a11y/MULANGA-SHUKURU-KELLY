import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestQuote
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100">
        
        {/* Bouton de Fermeture */}
        <button
          onClick={onClose}
          aria-label="Fermer la boîte de dialogue"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image du service */}
        <div className="relative h-56 bg-slate-900">
          {!imageFailed ? (
            <img
              src={service.image}
              alt={service.title}
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-mkb-deep to-mkb-navy flex items-center justify-center text-white">
              <span className="font-bold text-xl">{service.title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 left-5 right-5 text-white">
            <span className="text-[11px] uppercase tracking-wider text-mkb-yellow font-bold">
              Prestation +243MKB
            </span>
            <h3 className="text-2xl font-bold font-display leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Détails */}
        <div className="p-6 space-y-5">
          <p className="text-slate-700 text-sm leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Ce que comprend la prestation :
            </p>
            <ul className="space-y-2 text-xs text-slate-800">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-mkb-turquoise shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="flex-2 py-3 px-4 rounded-xl text-xs font-bold bg-mkb-yellow hover:bg-mkb-yellow-hover text-mkb-deep transition-all shadow-sm flex items-center justify-center whitespace-nowrap"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
