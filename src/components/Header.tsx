import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Nos Services', href: '#services' },
    { label: 'À Propos', href: '#a-propos' },
    { label: 'Pourquoi Nous', href: '#pourquoi-nous' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Barre supérieure discrète pour les urgences et appels directs */}
      <div className="bg-mkb-dark text-slate-300 text-xs border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-3 text-slate-300">
            <span className="text-mkb-turquoise font-medium">Kinshasa — Gombe</span>
            <span className="text-slate-500">·</span>
            <span>{siteConfig.slogan}</span>
          </div>
          <div className="flex items-center space-x-6 text-slate-300">
            <a
              href={`tel:${siteConfig.phones.rawPrimary}`}
              className="flex items-center hover:text-mkb-yellow transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-mkb-yellow" />
              <span>{siteConfig.phones.primary}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${siteConfig.phones.rawSecondary}`}
              className="hover:text-mkb-yellow transition-colors font-medium"
            >
              <span>{siteConfig.phones.secondary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barre principale : Contrat 3-Zones strict */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-mkb-deep/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
            : 'bg-mkb-deep py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          
          {/* Zone 1: Logo & Marque */}
          <a
            href="#accueil"
            className="flex items-center space-x-3 group whitespace-nowrap shrink-0"
            aria-label="+243MKB - Accueil"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mkb-turquoise to-mkb-navy flex items-center justify-center shadow-md border border-mkb-turquoise/40">
              <span className="text-white font-black text-sm tracking-tighter group-hover:scale-105 transition-transform">
                +243
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white font-display leading-tight">
                MKB
              </span>
              <span className="text-[10px] uppercase tracking-widest text-mkb-turquoise font-bold -mt-0.5">
                Multiservices
              </span>
            </div>
          </a>

          {/* Zone 2: Liens de navigation textuels propres */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-slate-200 hover:text-mkb-turquoise transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Zone 3: CTA Principal */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold bg-mkb-yellow hover:bg-mkb-yellow-hover text-mkb-deep transition-all shadow-sm transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          {/* Bouton Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-mkb-dark border-t border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-mkb-navy hover:text-mkb-turquoise transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl font-bold bg-mkb-yellow text-mkb-deep text-sm text-center"
              >
                Demander un devis
              </button>
              <a
                href={`tel:${siteConfig.phones.rawPrimary}`}
                className="w-full py-2.5 rounded-xl font-medium bg-white/10 text-white text-xs text-center flex items-center justify-center"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-mkb-yellow" />
                Appeler : {siteConfig.phones.primary}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
