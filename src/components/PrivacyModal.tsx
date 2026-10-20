import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-slate-800">
        
        <button
          onClick={onClose}
          aria-label="Fermer la politique de confidentialité"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-mkb-deep mb-4">
          <ShieldCheck className="w-6 h-6 text-mkb-turquoise" />
          <h3 className="text-xl font-bold font-display">
            Politique de Confidentialité — +243MKB
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
          <p>
            L'entreprise <strong>+243MKB</strong>, dont le siège social est situé au {siteConfig.address.fullFormatted}, 
            veille scrupuleusement au respect de la vie privée de ses clients et partenaires à Kinshasa.
          </p>

          <h4 className="font-bold text-slate-800 text-sm">1. Traitement des données saisies</h4>
          <p>
            Les renseignements renseignés dans nos formulaires (nom, numéro de téléphone, lieu de la prestation, détails du besoin) 
            sont exclusivement utilisés pour mettre en forme votre message de devis destiné à notre compte professionnel WhatsApp Business.
          </p>

          <h4 className="font-bold text-slate-800 text-sm">2. Absence de base de données non sollicitée</h4>
          <p>
            Le présent site internet ne stocke pas vos données personnelles dans une base de données distante à votre insu. 
            Aucune information n'est transmise, louée ou cédée à des tiers pour du démarchage publicitaire.
          </p>

          <h4 className="font-bold text-slate-800 text-sm">3. Exercice de vos droits</h4>
          <p>
            À tout moment, vous pouvez contacter la direction de +243MKB pour demander la rectification ou l'effacement de vos coordonnées 
            en composant l'une de nos lignes directes : <strong>{siteConfig.phones.primary}</strong>.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-bold text-xs bg-mkb-deep text-white hover:bg-mkb-navy transition-colors"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
