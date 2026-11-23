import React, { useState, useRef } from 'react';
import { REVIEWS, GYM_CONFIG } from '../config/gymConfig';
import { Star, ExternalLink, ChevronRight, Pause, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonials: React.FC = () => {
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const toggleAutoplay = () => {
    const instance = swiperRef.current;
    if (!instance || !instance.autoplay) return;
    if (autoplayPaused) {
      instance.autoplay.start();
      setAutoplayPaused(false);
    } else {
      instance.autoplay.stop();
      setAutoplayPaused(true);
    }
  };

  const renderReviewCard = (rev: (typeof REVIEWS)[number]) => (
    <div className="h-full rounded-2xl sm:rounded-3xl bg-white/[0.025] border border-white/10 hover:border-[#CCFF00]/40 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-3.5 sm:space-y-4">
      <div className="space-y-2.5 sm:space-y-3">
        {/* Stars */}
        <div className="flex items-center text-amber-400 gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-normal leading-snug sm:leading-relaxed">
          "{rev.comment}"
        </p>
      </div>

      {/* Reviewer Name & Demo Flag */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider truncate">
            {rev.author}
          </h3>
          <span className="text-[10px] sm:text-[11px] text-zinc-400 font-medium truncate block">{rev.role}</span>
        </div>
        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded-full border border-[#CCFF00]/20 shrink-0">
          Demo Review
        </span>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="py-10 sm:py-16 lg:py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-2 sm:gap-4">
          <div className="space-y-1.5">
            <span className="text-[9.5px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-0.5 sm:py-1 rounded-full border border-[#CCFF00]/20 inline-block">
              MEMBER FEEDBACK • DEMO SHOWCASE
            </span>
            <h2 className="text-[length:var(--font-section-title)] font-black text-white tracking-tight uppercase leading-tight">
              GOOGLE REVIEWS<span className="text-[#CCFF00]">.</span>
            </h2>
            <p className="text-xs text-zinc-400 max-w-xl leading-snug">
              Sample client feedback presentation for Niwara Gym Pune web concept.
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 lg:hidden">
            <div className="flex items-center gap-1 text-[11px] font-bold text-zinc-400">
              <span>Swipe Reviews</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#CCFF00] animate-pulse" />
            </div>
            <button
              type="button"
              onClick={toggleAutoplay}
              aria-pressed={autoplayPaused}
              aria-label={autoplayPaused ? 'Resume review slider autoplay' : 'Pause review slider autoplay'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[10.5px] font-bold text-zinc-300 hover:text-[#CCFF00] uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            >
              {autoplayPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#CCFF00]" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#CCFF00]" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Horizontal Reviews Swiper */}
        <div className="reviews-swiper-wrapper block lg:hidden mb-6">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={12}
            slidesPerView={1.12}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              360: { slidesPerView: 1.2, spaceBetween: 12 },
              412: { slidesPerView: 1.3, spaceBetween: 14 },
              640: { slidesPerView: 1.9, spaceBetween: 16 },
            }}
            className="pb-6 !overflow-visible"
          >
            {REVIEWS.map((rev) => (
              <SwiperSlide key={rev.id} className="h-auto">
                {renderReviewCard(rev)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop 2x2 Grid (Preserved Non-Carousel Desktop UX) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 mb-10">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="h-full">
              {renderReviewCard(rev)}
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center">
          <a
            href={GYM_CONFIG.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 min-h-[44px] sm:min-h-[48px] rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-widest transition-all active:scale-95 hover:scale-[1.02] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
          >
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#CCFF00]" />
          </a>
        </div>

      </div>
    </section>
  );
};
