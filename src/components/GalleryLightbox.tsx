import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../config/gymConfig';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const GalleryLightbox: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex]);

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
    <section id="gallery" className="py-10 sm:py-16 lg:py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-2 sm:gap-4">
          <div className="space-y-1.5">
            <span className="text-[9.5px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-0.5 sm:py-1 rounded-full border border-[#CCFF00]/20 inline-block">
              VISUAL ATMOSPHERE • DEMO SHOWCASE
            </span>
            <h2 className="text-[length:var(--font-section-title)] font-black text-white tracking-tight uppercase leading-tight">
              GALLERY<span className="text-[#CCFF00]">.</span>
            </h2>
            <p className="text-xs text-zinc-400 max-w-xl leading-snug">
              Concept fitness arena imagery demonstrated for portfolio preview. Replace with official client photography upon onboarding.
            </p>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-bold text-zinc-400 lg:hidden">
            <span>Swipe Gallery</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#CCFF00] animate-pulse" />
          </div>
        </div>

        {/* Mobile & Tablet Swiper Slider */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={12}
            slidesPerView={1.15}
            pagination={{ clickable: true }}
            breakpoints={{
              360: { slidesPerView: 1.22, spaceBetween: 12 },
              412: { slidesPerView: 1.32, spaceBetween: 14 },
              640: { slidesPerView: 2.15, spaceBetween: 16 },
            }}
            className="pb-6 !overflow-visible"
          >
            {GALLERY_IMAGES.map((img, idx) => (
              <SwiperSlide key={img.id}>
                <div
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${img.title} photo in lightbox`}
                  onClick={() => setLightboxIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(idx);
                    }
                  }}
                  className="relative aspect-[4/3] max-h-[240px] sm:max-h-[280px] w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group border border-white/10 bg-[#121218] active:scale-[0.98] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Caption & Zoom Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#CCFF00] bg-black/75 px-2 py-0.5 rounded-full border border-[#CCFF00]/20 inline-block">
                        {img.category}
                      </span>
                      <h3 className="text-white text-sm font-bold mt-1 drop-shadow-md truncate">
                        {img.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full bg-black/75 text-white backdrop-blur-md border border-white/20 shrink-0">
                      <ZoomIn className="w-4 h-4 text-[#CCFF00]" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Responsive Grid (3 Columns) */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              tabIndex={0}
              role="button"
              aria-label={`Open ${img.title} photo in lightbox`}
              onClick={() => setLightboxIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
              className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group border border-white/10 bg-[#121218] shadow-lg transition-all duration-300 hover:border-[#CCFF00]/40 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#CCFF00] bg-black/70 px-2 py-0.5 rounded-full border border-[#CCFF00]/20">
                    {img.category}
                  </span>
                  <h3 className="text-white text-sm font-bold mt-1 drop-shadow-md">
                    {img.title}
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/20 transform translate-y-1 group-hover:translate-y-0">
                  <ZoomIn className="w-4 h-4 text-[#CCFF00]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 z-50 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Previous Button (Tablet & Desktop side overlay) */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 z-50 transition-colors min-h-[48px] min-w-[48px] items-center justify-center backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 text-[#CCFF00]" />
          </button>

          {/* Next Button (Tablet & Desktop side overlay) */}
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 z-50 transition-colors min-h-[48px] min-w-[48px] items-center justify-center backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 text-[#CCFF00]" />
          </button>

          {/* Lightbox Media Wrapper */}
          <div className="max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center space-y-3 px-2">
            <img
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              className="max-h-[62vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="text-center px-4 space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-[#CCFF00]">
                  {GALLERY_IMAGES[lightboxIndex].category}
                </span>
                <span className="text-zinc-600 text-xs">•</span>
                <span className="text-[10px] sm:text-xs font-bold text-zinc-400">
                  {lightboxIndex + 1} / {GALLERY_IMAGES.length}
                </span>
              </div>
              <h3 className="text-white text-sm sm:text-base md:text-lg font-bold">
                {GALLERY_IMAGES[lightboxIndex].title}
              </h3>
            </div>

            {/* Mobile-Friendly Bottom Controls (Prev / Next without covering photo) */}
            <div className="flex sm:hidden items-center justify-center gap-4 pt-1">
              <button
                onClick={handlePrev}
                className="px-4 py-2.5 min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-4 h-4 text-[#CCFF00]" /> Prev
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2.5 min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                aria-label="Next Image"
              >
                Next <ChevronRight className="w-4 h-4 text-[#CCFF00]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
