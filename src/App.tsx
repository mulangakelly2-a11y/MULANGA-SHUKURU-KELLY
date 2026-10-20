import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { AboutSection } from './components/AboutSection';
import { WhyUsSection } from './components/WhyUsSection';
import { GallerySection } from './components/GallerySection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyModal } from './components/PrivacyModal';
import { ServiceItem } from './types';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteServiceTitle, setQuoteServiceTitle] = useState<string | undefined>(undefined);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setQuoteServiceTitle(serviceTitle);
    }
    const quoteElement = document.getElementById('devis');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#00B4D8] selection:text-white">
      {/* Barre de navigation principale */}
      <Header onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Contenu principal */}
      <main className="flex-grow">
        {/* Section Accueil / Hero */}
        <Hero onOpenQuoteModal={() => handleOpenQuote()} />

        {/* Section Nos Services (10 services) */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuoteWithService={(title) => handleOpenQuote(title)}
        />

        {/* Section À Propos de +243MKB */}
        <AboutSection />

        {/* Section Pourquoi Nous Choisir ? */}
        <WhyUsSection />

        {/* Section Galerie des Prestations */}
        <GallerySection />

        {/* Section Demander un Devis */}
        <QuoteSection preselectedService={quoteServiceTitle} />

        {/* Section Contact & Localisation Gombe */}
        <ContactSection />
      </main>

      {/* Pied de Page */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenQuoteModal={() => handleOpenQuote()}
      />

      {/* Bouton Flottant WhatsApp Business */}
      <FloatingWhatsApp />

      {/* Fenêtre Modale de détails d'un service */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(title) => handleOpenQuote(title)}
      />

      {/* Fenêtre Modale de Politique de Confidentialité */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
};

export default App;
