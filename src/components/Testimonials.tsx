import React from 'react';
import { REVIEWS, GYM_CONFIG } from '../config/gymConfig';
import { Star, ExternalLink, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#CCFF00] bg-[#CCFF00]/10 px-3.5 py-1 rounded-full border border-[#CCFF00]/20 inline-block">
              MEMBER FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
              GOOGLE REVIEWS<span className="text-[#CCFF00]">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 sm:hidden">
            <span>Swipe Reviews</span>
            <ChevronRight className="w-4 h-4 text-[#CCFF00] animate-pulse" />
          </div>
        </div>

        {/* Swiper.js Reviews Slider for Mobile and Desktop
            One review visible on mobile + second partially visible (slidesPerView: 1.2)
        */}
        <div className="reviews-swiper-wrapper mb-10">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={18}
            slidesPerView={1.2}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              360: { slidesPerView: 1.2, spaceBetween: 16 },
              480: { slidesPerView: 1.35, spaceBetween: 18 },
              640: { slidesPerView: 1.8, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="pb-12 !overflow-visible"
          >
            {REVIEWS.map((rev) => (
              <SwiperSlide key={rev.id} className="h-auto">
                <div className="h-full rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#CCFF00]/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* ★★★★★ Stars */}
                    <div className="flex items-center text-amber-400 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Reviewer Name */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">
                      {rev.author}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Reviews Button - Min Height 48px */}
        <div className="text-center">
          <a
            href={GYM_CONFIG.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 min-h-[48px] rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs sm:text-sm uppercase tracking-widest transition-all active:scale-95 hover:scale-105 shadow-lg"
          >
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#CCFF00]" />
          </a>
        </div>

      </div>
    </section>
  );
};
