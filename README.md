# Site Web Officiel +243MKB — Le professionnalisme au quotidien

Ce projet est le site web officiel de **+243MKB**, entreprise multiservices basée à Kinshasa (Commune de la Gombe), en République démocratique du Congo.

---

## 1. Caractéristiques Principales

- **Identité Visuelle & Couleurs :**
  - **Bleu profond (`#0B1B3D`)** : Rigueur et solidité institutionnelle.
  - **Bleu turquoise (`#00B4D8`)** : Modernité et énergie.
  - **Jaune vif (`#FFB703`)** : Boutons d'action, accents et visibilité.
  - **Blanc & ardoise douce** : Clarté de lecture et contraste optimal.
- **10 Services Professionnels Référencés :**
  1. Agent de sécurité
  2. Nounou et garde d'enfants
  3. Femme de ménage
  4. Chauffeur personnel
  5. Maquillage professionnel
  6. Service traiteur
  7. Service protocolaire
  8. Coiffure mixte
  9. Décoration de fêtes et événements
  10. Art et peinture
- **Formulaire de Devis Intelligent :**
  - Validation complète des champs obligatoires (nom, téléphone, commune, description du besoin).
  - Pré-sélection dynamique du service choisi.
  - Formatage structuré et transmission directe vers le WhatsApp Business officiel (`+243 810 338 579`).
  - Aucun stockage de données non consenti (conformité et transparence totale).
- **Contact & Localisation :**
  - Les 3 numéros de téléphone officiels cliquables.
  - Adresse physique à l'Avenue La Grâce, Gombe, Kinshasa.
  - Carte interactive Google Maps centrée sur la Gombe.
- **Réseaux Sociaux :**
  - Centralisés et éditables dans `src/config/siteConfig.ts`.
- **Référencement Naturel (SEO) & Données Structurées :**
  - Balises OpenGraph et Schema JSON-LD `LocalBusiness` pour Kinshasa.

---

## 2. Installation et Lancement Local

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou pnpm

### Commandes
```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Compiler pour la production
npm run build
```

Le serveur sera accessible sur `http://localhost:3000` (ou `http://localhost:5173`).

---

## 3. Guide de Personnalisation : Fichier Central `src/config/siteConfig.ts`

Toutes les coordonnées et textes clés sont regroupés dans **`src/config/siteConfig.ts`** pour vous permettre de mettre à jour le site sans toucher au code technique :

### A. Modifier les Numéros de Téléphone & WhatsApp
Dans `src/config/siteConfig.ts` :
```typescript
phones: {
  primary: '+243 810 338 579',
  secondary: '+243 999 682 422',
  tertiary: '+243 831 071 077',
  rawPrimary: '243810338579',
  rawSecondary: '243999682422',
  rawTertiary: '243831071077'
},
whatsapp: {
  phoneNumber: '243810338579', // Numéro de réception WhatsApp sans le signe +
  defaultMessage: "Bonjour +243MKB, ..."
}
```

### B. Activer les Réseaux Sociaux Officiels
Remplacez `null` par l'URL officielle de vos pages :
```typescript
socials: {
  whatsappBusiness: 'https://wa.me/243810338579',
  facebook: 'https://facebook.com/243mkb',      // Remplacez null par votre page
  instagram: 'https://instagram.com/243mkb',    // Remplacez null par votre profil
  tiktok: 'https://tiktok.com/@243mkb',         // Remplacez null par votre compte
  youtube: null                                 // Laissez null si non créé
}
```
*Dès qu'une URL est renseignée, le lien s'active automatiquement dans le pied de page et les sections de contact.*

### C. Remplacer les Photographies par les Vôtres
Pour remplacer les photos des services ou de la galerie par de véritables clichés de vos équipes à Kinshasa :
1. Placez vos photos dans le dossier `public/images/`.
2. Mettez à jour le champ `image` dans le tableau `servicesData` ou `galleryData` avec le chemin `/images/nom_de_la_photo.jpg`.

---

## 4. Instructions de Mise en Ligne (Déploiement)

### Option 1 : Déploiement sur Vercel
1. Poussez votre code sur GitHub ou GitLab.
2. Connectez-vous sur [vercel.com](https://vercel.com) et importez le dépôt.
3. Vercel détecte automatiquement `Vite`. Cliquez sur **Deploy**.

### Option 2 : Déploiement sur Netlify
1. Lancez `npm run build` en local pour générer le dossier `dist`.
2. Connectez-vous sur [netlify.com](https://netlify.com) et glissez le dossier `dist/` dans l'interface Netlify Drop.
3. Votre site est instantanément en ligne avec un certificat SSL gratuit.

### Option 3 : Hébergement Web Standard (cPanel / Apache / Nginx)
1. Exécutez `npm run build`.
2. Transférez le contenu du dossier `dist/` vers le répertoire `public_html` de votre serveur d'hébergement.

---

## 5. Propriété Intellectuelle
© +243MKB — Le professionnalisme au quotidien. Tous droits réservés. Kinshasa, RDC.
