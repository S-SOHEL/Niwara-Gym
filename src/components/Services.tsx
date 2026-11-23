import React from 'react';
import { Dumbbell, Flame, UserCheck, Zap, Activity, Sparkles, MessageSquare, ChevronRight } from 'lucide-react';
import { GYM_CONFIG, SERVICES_LIST } from '../config/gymConfig';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface ServicesProps {
  onOpenTrialModal?: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Flame,
  UserCheck,
  Zap,
  Activity,
  Sparkles
};

export const Services: React.FC<ServicesProps> = () => {
  const enquiriesActive = GYM_CONFIG.contact.enableEnquiries !== false;

  const renderServiceCard = (service: (typeof SERVICES_LIST)[number]) => {
    const Icon = iconMap[service.iconName] || Dumbbell;
    return (
      <div className="group h-full relative rounded-2xl sm:rounded-3xl bg-[#121218] border border-white/10 hover:border-[#CCFF00]/40 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#CCFF00]/10 flex flex-col justify-between overflow-hidden">
        
        {/* Header Image with Compact Aspect Ratio */}
        <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 sm:mb-4 border border-white/10 bg-black/40">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-transparent to-black/20" />
          
          {/* Icon Badge */}
          <div className="absolute top-2.5 left-2.5 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#CCFF00] shadow-md">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-1 flex-grow flex flex-col justify-start">
          <h3 className="text-[length:var(--font-card-title)] font-black text-white tracking-tight group-hover:text-[#CCFF00] transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
            {service.sentence}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-3 mt-3 border-t border-white/10">
          {enquiriesActive ? (
            <a
              href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(`[Niwara Gym Demo Enquiry] Hi Niwara Gym team, I want to enquire about ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] rounded-xl sm:rounded-2xl bg-white/5 hover:bg-[#CCFF00] text-zinc-200 hover:text-black border border-white/10 hover:border-[#CCFF00] font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
              title="WebCraft Agency Demo Desk (Not Official Reception)"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Enquire Service</span>
            </a>
          ) : (
            <div className="w-full min-h-[44px] rounded-xl sm:rounded-2xl bg-white/5 text-zinc-500 border border-white/5 font-bold text-xs uppercase tracking-wider flex items-center justify-center">
              Enquiries Paused
            </div>
          )}
        </div>

      </div>
    );
  };

  return (
    <section id="services" className="py-10 sm:py-16 lg:py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Subtle ambient accent */}
      <div className="absolute top-1/2 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#CCFF00]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-2 sm:gap-4">
          <div className="space-y-1.5">
            <span className="text-[9.5px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-0.5 sm:py-1 rounded-full border border-[#CCFF00]/20 inline-block">
              OUR OFFERINGS • DEMO SHOWCASE
            </span>
            <h2 className="text-[length:var(--font-section-title)] font-black text-white tracking-tight uppercase leading-tight">
              PREMIUM SERVICES<span className="text-[#CCFF00]">.</span>
            </h2>
            <p className="text-xs text-zinc-400 max-w-xl leading-snug">
              Concept fitness programs and amenities demonstrated for Niwara Gym Pune web showcase. Service enquiries route to {GYM_CONFIG.contact.phoneLabel}.
            </p>
          </div>

          {/* Swipe indicator on mobile & tablet */}
          <div className="flex items-center gap-1 text-[11px] font-bold text-zinc-400 lg:hidden">
            <span>Swipe Programs</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#CCFF00] animate-pulse" />
          </div>
        </div>

        {/* Mobile & Tablet Horizontal Swipe Carousel */}
        <div className="services-swiper-wrapper block lg:hidden">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={12}
            slidesPerView={1.15}
            pagination={{ clickable: true }}
            breakpoints={{
              360: {
                slidesPerView: 1.22,
                spaceBetween: 12,
              },
              412: {
                slidesPerView: 1.32,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2.15,
                spaceBetween: 16,
              },
            }}
            className="pb-6 !overflow-visible"
          >
            {SERVICES_LIST.map((service) => (
              <SwiperSlide key={service.id} className="h-auto">
                {renderServiceCard(service)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Clean 3-Column Grid (Preserved Non-Carousel Desktop UX) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div key={service.id} className="h-full">
              {renderServiceCard(service)}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
