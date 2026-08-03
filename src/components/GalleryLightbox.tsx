import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../config/gymConfig';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const GalleryLightbox: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#CCFF00] bg-[#CCFF00]/10 px-3.5 py-1 rounded-full border border-[#CCFF00]/20 inline-block">
              VISUAL ATMOSPHERE
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
              GALLERY<span className="text-[#CCFF00]">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 sm:hidden">
            <span>Swipe Gallery</span>
            <ChevronRight className="w-4 h-4 text-[#CCFF00] animate-pulse" />
          </div>
        </div>

        {/* Mobile & Tablet Swiper Slider (1.15 cards visible on mobile so next card peeks) */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1.15}
            pagination={{ clickable: true }}
            breakpoints={{
              360: { slidesPerView: 1.15, spaceBetween: 16 },
              480: { slidesPerView: 1.3, spaceBetween: 18 },
              640: { slidesPerView: 2.1, spaceBetween: 20 },
            }}
            className="pb-12 !overflow-visible"
          >
            {GALLERY_IMAGES.map((img, idx) => (
              <SwiperSlide key={img.id}>
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer group border border-white/10 bg-[#121218] active:scale-98 transition-transform"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-4 right-4 p-3 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                    <ZoomIn className="w-5 h-5 text-[#CCFF00]" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Responsive Grid (3 Columns) with Opacity Rule: 30% default -> 100% hover */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group border border-white/10 bg-[#121218]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />

              <div className="absolute top-4 right-4 p-3 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/20 transform translate-y-2 group-hover:translate-y-0">
                <ZoomIn className="w-5 h-5 text-[#CCFF00]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 z-50 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 z-50 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 text-[#CCFF00]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 z-50 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 text-[#CCFF00]" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-3xl border border-white/20 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
