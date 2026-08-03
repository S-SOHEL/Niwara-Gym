import React from 'react';
import { Dumbbell, Flame, UserCheck, Zap, Activity, Sparkles, MessageSquare, ChevronRight } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface ServicesProps {
  onOpenTrialModal?: () => void;
}

export const Services: React.FC<ServicesProps> = () => {
  const services = [
    {
      id: "strength",
      title: "Strength Training",
      sentence: "Biomechanical isolate plate-loaded machines and heavy dumbbell racks up to 50kg.",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "weight-loss",
      title: "Weight Loss",
      sentence: "Scientific fat loss, metabolic conditioning, and sustainable body recomposition.",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "personal-training",
      title: "Personal Training",
      sentence: "1-on-1 certified coaching for rapid goal execution, posture correction & results.",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "functional",
      title: "Functional Training",
      sentence: "Turf sprint track, sleds, battle ropes & high-intensity crossfit rig.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cardio",
      title: "Cardio Deck",
      sentence: "Commercial treadmills, stairmasters & assault bikes with heart-rate tracking.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "steam-bath",
      title: "Steam Bath",
      sentence: "Infrared steam & recovery lounge for deep muscle relaxation post-workout.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#CCFF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Swipe Hint for Mobile */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#CCFF00] bg-[#CCFF00]/10 px-3.5 py-1 rounded-full border border-[#CCFF00]/20 inline-block">
              OUR OFFERINGS
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
              PREMIUM SERVICES<span className="text-[#CCFF00]">.</span>
            </h2>
          </div>

          {/* Swipe Hint indicator on mobile */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 sm:hidden">
            <span>Swipe</span>
            <ChevronRight className="w-4 h-4 text-[#CCFF00] animate-pulse" />
          </div>
        </div>

        {/* Swiper Container for Mobile & Tablet / Responsive Grid for Desktop */}
        <div className="services-swiper-wrapper">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1.25}
            pagination={{ clickable: true }}
            breakpoints={{
              360: {
                slidesPerView: 1.25,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1.4,
                spaceBetween: 18,
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-12 !overflow-visible"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={service.id} className="h-auto">
                  <div className="group h-full relative rounded-3xl bg-[#121218] border border-white/10 hover:border-[#CCFF00]/50 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#CCFF00]/15 flex flex-col justify-between overflow-hidden">
                    
                    {/* Header Image Background with requirement:
                        Desktop: Opacity 30% default, Hover 100%.
                        Mobile: Always 100% visible (opacity-100 on mobile, md:opacity-30 md:group-hover:opacity-100)
                    */}
                    <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden mb-6 border border-white/10">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-100 md:opacity-30 md:group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-transparent to-black/30" />
                      
                      {/* Icon overlay on top left */}
                      <div className="absolute top-3 left-3 w-12 h-12 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#CCFF00] shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card Content - STRICTLY: Icon, Title, One sentence */}
                    <div className="space-y-2 flex-grow flex flex-col justify-center">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#CCFF00] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                        {service.sentence}
                      </p>
                    </div>

                    {/* Action WhatsApp Enquiry Button - Minimum 48px height with press animation */}
                    <div className="pt-5 mt-4 border-t border-white/10">
                      <a
                        href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=Hi%20Niwara%20Gym,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full min-h-[48px] rounded-2xl bg-white/5 hover:bg-[#CCFF00] text-zinc-200 hover:text-black border border-white/10 hover:border-[#CCFF00] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Enquire Service</span>
                      </a>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </div>
    </section>
  );
};
