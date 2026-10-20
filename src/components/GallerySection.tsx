import React, { useState } from 'react';
import { galleryData } from '../config/siteConfig';
import { GalleryItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filterCategories = [
    { id: 'all', label: 'Toutes les photos' },
    { id: 'Sécurité', label: 'Sécurité' },
    { id: 'Événements & Traiteur', label: 'Événements & Traiteur' },
    { id: 'Maison & Transport', label: 'Maison & Transport' },
    { id: 'Beauté', label: 'Beauté' },
    { id: 'Art & Finition', label: 'Art & Finition' }
  ];

  const filteredItems =
    filter === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="galerie" className="py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-mkb-turquoise-dark">
            Galerie Visuelle
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-mkb-deep font-display tracking-tight text-balance">
            Aperçu de Nos Interventions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Découvrez nos équipes et réalisations à Kinshasa : sécurité de sites, intendance,
            chauffeurs, réceptions traiteur, décorations festives et travaux de rénovation.
          </p>
        </div>

        {/* Filtres interactifs */}
        <div className="flex flex-wrap justify-center gap-1.5 p-1.5 bg-slate-200/80 rounded-2xl max-w-2xl mx-auto mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === cat.id
                  ? 'bg-mkb-deep text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille Photo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => {
            const hasFailed = failedImages[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-sm bg-slate-900 border border-slate-200 cursor-pointer"
              >
                {!hasFailed ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={() => handleImageError(item.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-mkb-deep to-mkb-navy flex flex-col items-center justify-center p-4 text-center text-white">
                    <span className="text-xs uppercase text-mkb-turquoise font-bold">{item.category}</span>
                    <p className="text-xs font-medium mt-1">{item.title}</p>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-mkb-yellow">
                        {item.category}
                      </span>
                      <p className="text-xs font-semibold leading-snug">{item.title}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-white/20 text-white backdrop-blur-sm">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          * Les photographies de démonstration peuvent être actualisées directement dans <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">src/config/siteConfig.ts</code> avec les clichés récents de l'entreprise.
        </p>

      </div>

      {/* Modal Zoom Image */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-mkb-dark rounded-2xl max-w-3xl w-full overflow-hidden border border-white/20 shadow-2xl"
          >
            <button
              onClick={() => setActiveImage(null)}
              aria-label="Fermer la vue agrandie"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] bg-black flex items-center justify-center">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-4 bg-mkb-deep text-white flex justify-between items-center">
              <div>
                <span className="text-xs uppercase text-mkb-yellow font-bold">
                  {activeImage.category}
                </span>
                <p className="text-sm font-semibold">{activeImage.title}</p>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
