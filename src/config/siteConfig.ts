import { SiteConfig, ServiceItem, GalleryItem } from '../types';

export const siteConfig: SiteConfig = {
  companyName: '+243MKB',
  slogan: 'Le professionnalisme au quotidien',
  description:
    '+243MKB est une entreprise multiservices qui regroupe plusieurs agences et propose des prestations professionnelles destinées aux particuliers, aux entreprises, aux événements et aux organisations à Kinshasa.',
  address: {
    street: 'N° 15, Avenue La Grâce',
    neighborhood: 'Quartier Onatra',
    commune: 'Commune de la Gombe',
    city: 'Kinshasa',
    country: 'République démocratique du Congo',
    fullFormatted: 'N° 15, Avenue La Grâce, Quartier Onatra, Commune de la Gombe, Kinshasa, RDC'
  },
  phones: {
    primary: '+243 810 338 579',
    secondary: '+243 999 682 422',
    tertiary: '+243 831 071 077',
    rawPrimary: '243810338579',
    rawSecondary: '243999682422',
    rawTertiary: '243831071077'
  },
  whatsapp: {
    phoneNumber: '243810338579',
    defaultMessage: "Bonjour +243MKB, j'aimerais avoir des informations sur vos prestations professionnelles."
  },
  socials: {
    // WhatsApp direct officiel
    whatsappBusiness: 'https://wa.me/243810338579',
    // Réseaux sociaux configurables : remplacer null par la véritable URL officielle de l'entreprise
    facebook: null,
    instagram: null,
    tiktok: null,
    youtube: null
  }
};

export const servicesData: ServiceItem[] = [
  {
    id: 'agent-de-securite',
    title: 'Agent de sécurité',
    category: 'securite',
    shortDesc: 'Vigilance permanente, contrôle strict des accès et protection des résidences, commerces et bureaux.',
    fullDesc:
      'Nos agents de sécurité sont rigoureusement sélectionnés et formés aux techniques de surveillance, de rondes dissuasives, de prévention des risques et de gestion respectueuse mais ferme des flux d’entrées et de sorties.',
    image: '/src/assets/images/service_security_agent_1792482142846.jpg',
    benefits: [
      'Personnel vérifié et discipliné',
      'Surveillance jour, nuit ou 24h/24',
      'Tenue et attitude irréprochables'
    ]
  },
  {
    id: 'nounou-et-garde-denfants',
    title: "Nounou et garde d'enfants",
    category: 'maison',
    shortDesc: 'Garde bienveillante, attentionnée et sécurisée de vos enfants directement à votre domicile.',
    fullDesc:
      'Confiez vos enfants à des nounous expérimentées, chaleureuses et formées aux premiers secours pédiatriques. Prise en charge des repas, respect des siestes, éveil ludo-éducatif et vigilance totale.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Profils vérifiés avec enquête de moralité',
      'Patience, douceur et sens pédagogique',
      'Respect scrupuleux des consignes parentales'
    ]
  },
  {
    id: 'femme-de-menage',
    title: 'Femme de ménage',
    category: 'maison',
    shortDesc: 'Entretien méthodique, propreté étincelante et assainissement soigné de vos espaces de vie.',
    fullDesc:
      'Service d’entretien pour résidences, appartements et bureaux : dépoussiérage méticuleux, nettoyage des sols, repassage soigné du linge, désinfection des sanitaires et rangement selon vos exigences.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Discrétion et ponctualité exemplaire',
      'Interventions ponctuelles ou régulières',
      'Respect des surfaces délicates'
    ]
  },
  {
    id: 'chauffeur-personnel',
    title: 'Chauffeur personnel',
    category: 'maison',
    shortDesc: 'Conduite sûre, ponctualité rigoureuse et parfaite maîtrise des axes routiers de Kinshasa.',
    fullDesc:
      'Chauffeurs professionnels courtois et discrets pour vos trajets quotidiens, rendez-vous d’affaires, transferts à l’aéroport de N’djili ou délégations d’hôtes. Conduite préventive et maîtrise des itinéraires alternatifs.',
    image: '/src/assets/images/service_private_chauffeur_1792482142963.jpg',
    benefits: [
      'Excellente connaissance de la ville de Kinshasa',
      'Présentation soignée et tenue impeccable',
      'Sens aigu de la courtoisie et de la confidentialité'
    ]
  },
  {
    id: 'maquillage-professionnel',
    title: 'Maquillage professionnel',
    category: 'beaute',
    shortDesc: 'Mise en beauté sur-mesure pour mariages civils/coutumiers, galas, shootings et réceptions.',
    fullDesc:
      'Nos maquilleuses professionnelles subliment votre teint et vos traits avec des produits de haute qualité adaptés aux climats tropicaux et assurant une longue tenue sans brillance.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Produits de marques professionnelles',
      'Déplacement à domicile ou en salle d’événement',
      'Essais et conseils personnalisés'
    ]
  },
  {
    id: 'service-traiteur',
    title: 'Service traiteur',
    category: 'evenement',
    shortDesc: 'Buffets prestigieux, saveurs congolaises et internationales pour banquets et réceptions d’entreprise.',
    fullDesc:
      'De la sélection des ingrédients frais jusqu’au dressage des tables de fête, notre brigade traiteur prépare des mets raffinés alliant authenticité des recettes locales et finesse internationale.',
    image: '/src/assets/images/service_catering_gourmet_1792482143054.jpg',
    benefits: [
      'Menus sur-mesure selon vos préférences et budget',
      'Normes d’hygiène et de fraîcheur rigoureuses',
      'Service de serveurs et maîtres d’hôtel formés'
    ]
  },
  {
    id: 'service-protocolaire',
    title: 'Service protocolaire',
    category: 'evenement',
    shortDesc: 'Accueil d’honneur, placement des invités et encadrement protocolaire de vos grands événements.',
    fullDesc:
      'Hôtesses et agents protocolaires hautement qualifiés pour l’accueil chaleureux, l’orientation des convives de marque, la remise de distinctions et la tenue sereine de vos galas, conférences et réceptions privées.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Excellence relationnelle et sens de l’étiquette',
      'Coordination fluide avec les organisateurs',
      'Tenues coordonnées et présentations distinguées'
    ]
  },
  {
    id: 'coiffure-mixte',
    title: 'Coiffure mixte',
    category: 'beaute',
    shortDesc: 'Coiffure hommes, femmes et enfants, soins capillaires, tresses artistiques et styles de cérémonie.',
    fullDesc:
      'Des coiffeurs et stylistes capillaires expérimentés pour sublimer vos coiffures de mariage, tresses tendance, coupes modernes ou soins profonds, avec un matériel hygiénique et désinfecté.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Prestations soignées et respect de la fibre capillaire',
      'Possibilité de déplacement pour événements',
      'Accueil et écoute de vos inspirations'
    ]
  },
  {
    id: 'decoration-fetes-et-evenements',
    title: 'Décoration de fêtes et événements',
    category: 'evenement',
    shortDesc: 'Scénographie féerique, drapages, compositions florales et ambiances lumineuses immersives.',
    fullDesc:
      'Création et aménagement complet de décors pour mariages, anniversaires, fêtes d’entreprise et soirées de gala. Nous transformons les espaces avec élégance, harmonie des couleurs et éclairages chaleureux.',
    image: '/src/assets/images/service_event_decor_1792482143644.jpg',
    benefits: [
      'Conception de thèmes personnalisés',
      'Matériel haut de gamme (chaises, arches, lumières)',
      'Installation et démontage pris en charge'
    ]
  },
  {
    id: 'art-et-peinture',
    title: 'Art et peinture',
    category: 'art',
    shortDesc: 'Peinture de bâtiments, revêtements muraux soignés, finitions décoratives et œuvres personnalisées.',
    fullDesc:
      'Artisans peintres qualifiés pour la remise à neuf de vos façades, intérieurs d’appartements, locaux commerciaux et fresques décoratives. Travaux propres avec application de peintures durables et résistantes.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Finitions lisses et nettes',
      'Protection des sols et mobiliers pendant le chantier',
      'Conseil sur le choix des teintes et textures'
    ]
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Dispositif de sécurité en établissement',
    category: 'Sécurité',
    image: '/src/assets/images/service_security_agent_1792482142846.jpg'
  },
  {
    id: 'gal-2',
    title: 'Banquet traiteur et dégustation',
    category: 'Événements & Traiteur',
    image: '/src/assets/images/service_catering_gourmet_1792482143054.jpg'
  },
  {
    id: 'gal-3',
    title: 'Scénographie et décoration florale de gala',
    category: 'Événements & Traiteur',
    image: '/src/assets/images/service_event_decor_1792482143644.jpg'
  },
  {
    id: 'gal-4',
    title: 'Service de chauffeur VIP pour personnalités',
    category: 'Maison & Transport',
    image: '/src/assets/images/service_private_chauffeur_1792482142963.jpg'
  },
  {
    id: 'gal-5',
    title: 'Accueil protocolaire d’invités d’honneur',
    category: 'Événements & Traiteur',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-6',
    title: 'Entretien résidentiel soigné',
    category: 'Maison & Transport',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-7',
    title: 'Maquillage et mise en beauté de mariée',
    category: 'Beauté',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-8',
    title: 'Travaux de peinture et rénovation murale',
    category: 'Art & Finition',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
  }
];

export const communesKinshasa = [
  'Gombe',
  'Ngaliema',
  'Kintambo',
  'Limete',
  'Bandalungwa',
  'Barumbu',
  'Lingwala',
  'Kinshasa (Commune)',
  'Lemba',
  'Matete',
  'Kalamu',
  'Kasa-Vubu',
  'Mont-Ngafula',
  'Selembao',
  'Bumbu',
  'Makala',
  'Ngaba',
  'Masina',
  'Ndjili',
  'Kimbanseke',
  'Nsele',
  'Maluku'
];
