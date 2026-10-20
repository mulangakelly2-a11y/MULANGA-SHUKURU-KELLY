import { siteConfig } from '../config/siteConfig';
import { QuoteFormData } from '../types';

export const buildWhatsAppQuoteUrl = (data: QuoteFormData): string => {
  const message = [
    `*DEMANDE DE DEVIS — ${siteConfig.companyName}*`,
    `---------------------------------------`,
    `*Nom complet :* ${data.fullName.trim()}`,
    `*Téléphone :* ${data.phone.trim()}`,
    data.email?.trim() ? `*E-mail :* ${data.email.trim()}` : null,
    `*Service souhaité :* ${data.service}`,
    `*Lieu / Commune :* ${data.location}`,
    data.date ? `*Date souhaitée :* ${data.date}` : `*Date souhaitée :* À convenir`,
    `---------------------------------------`,
    `*Description du besoin :*`,
    data.description.trim(),
    `---------------------------------------`,
    `_Message envoyé via le site web officiel de +243MKB_`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const buildDirectWhatsAppUrl = (customMessage?: string): string => {
  const text = customMessage || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(text)}`;
};
