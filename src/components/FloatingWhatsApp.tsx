import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
      {/* Infobulle discrète refermable sur grand écran */}
      {!tooltipDismissed && (
        <div className="hidden md:flex items-center bg-white text-slate-800 px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 text-xs font-semibold">
          <span>Écrivez-nous sur WhatsApp</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            aria-label="Fermer l'infobulle"
            className="ml-2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Bouton Flottant Principal */}
      <a
        href={buildDirectWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp avec +243MKB"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
};
