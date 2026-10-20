export type ServiceCategory = 'securite' | 'maison' | 'evenement' | 'beaute' | 'art';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  image: string;
  benefits: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface SocialLinks {
  whatsappBusiness: string;
  facebook: string | null;
  instagram: string | null;
  tiktok: string | null;
  youtube: string | null;
}

export interface SiteConfig {
  companyName: string;
  slogan: string;
  description: string;
  address: {
    street: string;
    neighborhood: string;
    commune: string;
    city: string;
    country: string;
    fullFormatted: string;
  };
  phones: {
    primary: string;
    secondary: string;
    tertiary: string;
    rawPrimary: string;
    rawSecondary: string;
    rawTertiary: string;
  };
  whatsapp: {
    phoneNumber: string; // Sans le signe +
    defaultMessage: string;
  };
  socials: SocialLinks;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email?: string;
  service: string;
  date?: string;
  location: string;
  description: string;
}
