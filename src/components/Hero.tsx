import React from 'react';
import { MessageSquare, Phone, Navigation, Star, ShieldCheck, MapPin } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#0a0a0c]">
      {/* Cinematic Background Image with Dark Vignette & Neon Glows */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
          alt="NIWARA GYM Arena"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-125 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
        
        {/* Soft Ambient Neon Glows */}
        <div className="absolute top-1/3 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#CCFF00]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Glass Card Hero Wrapper */}
        <div className="p-6 sm:p-12 md:p-16 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/90 space-y-6 sm:space-y-8">
          
          {/* Small Google Rating Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-2 rounded-full bg-black/60 border border-white/15 backdrop-blur-md">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-black text-white tracking-wide">
              {GYM_CONFIG.googleRating.score}
            </span>
            <span className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">
              ({GYM_CONFIG.googleRating.totalReviews}+ Verified Google Reviews)
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none uppercase font-sans">
            FORGE YOUR <br />
            <span className="bg-gradient-to-r from-[#CCFF00] via-emerald-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(204,255,0,0.3)]">
              LEGACY.
            </span>
          </h1>

          {/* One short supporting sentence (Maximum two lines) */}
          <p className="text-sm sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Pune's premier luxury fitness club at Navi Peth. Scientific coaching, world-class biomechanical equipment, and an elite training environment.
          </p>

          {/* Three CTA Buttons (Min 48px height each) */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            
            {/* 1. WhatsApp CTA */}
            <a
              href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=Hi%20Niwara%20Gym%20team,%20I%20want%20to%20enquire%20about%20joining.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 min-h-[48px] py-3.5 rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-xl shadow-[#CCFF00]/25 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-black" />
              WhatsApp
            </a>

            {/* 2. Call CTA */}
            <a
              href={`tel:${GYM_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 min-h-[48px] py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 backdrop-blur-md hover:scale-105 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-[#CCFF00]" />
              Call Now
            </a>

            {/* 3. Get Directions CTA */}
            <a
              href={GYM_CONFIG.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 min-h-[48px] py-3.5 rounded-2xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 backdrop-blur-md hover:scale-105 active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4 text-cyan-400" />
              Get Directions
            </a>

          </div>

          {/* Secondary VIP Pass Trigger Pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400">
            <MapPin className="w-4 h-4 text-[#CCFF00] shrink-0" />
            <span>Niwara Campus, Navi Peth, Pune</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <button
              onClick={onOpenTrialModal}
              className="text-[#CCFF00] font-bold underline underline-offset-4 hover:text-white transition-colors flex items-center gap-1 active:scale-95 min-h-[36px]"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Book 1-Day Free Trial
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
