import React from 'react';
import { MessageSquare, Phone, Navigation, Star, ShieldCheck, MapPin } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  const enquiriesActive = GYM_CONFIG.contact.enableEnquiries !== false;

  return (
    <section id="home" className="relative min-h-[auto] sm:min-h-[88vh] flex items-center justify-center pt-[4.75rem] pb-7 sm:pt-28 sm:pb-16 overflow-hidden bg-[#0a0a0c]">
      {/* Background Image with Dark Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
          alt="NIWARA GYM Arena"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.32] contrast-125 transition-transform duration-1000"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/70 to-transparent" />
        
        {/* Tasteful Ambient Accent Lights */}
        <div className="absolute top-1/4 left-1/4 w-[240px] sm:w-[450px] h-[240px] sm:h-[450px] bg-[#CCFF00]/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[240px] sm:w-[450px] h-[240px] sm:h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Luxury Glass Hero Card */}
        <div className="p-4 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/90 space-y-3.5 sm:space-y-6">
          
          {/* Portfolio Demo Badge & Concept Rating Chip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/80 border border-[#CCFF00]/30 backdrop-blur-md max-w-full">
            <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider sm:tracking-widest text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded-full border border-[#CCFF00]/20 whitespace-nowrap">
              {GYM_CONFIG.branding.badgeText}
            </span>
            <div className="flex items-center text-amber-400">
              <Star className="w-3 h-3 fill-amber-400 sm:hidden" />
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="hidden sm:block w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-black text-white tracking-wide whitespace-nowrap">
              {GYM_CONFIG.googleRating.score}
            </span>
            <span className="text-[9.5px] sm:text-[11px] text-zinc-400 font-medium whitespace-nowrap">
              ({GYM_CONFIG.googleRating.displayLabel})
            </span>
          </div>

          {/* Fluid Mobile-First Headline */}
          <h1 className="text-[length:var(--font-hero)] font-black text-white tracking-tight leading-[1.03] uppercase font-sans">
            {GYM_CONFIG.branding.headlinePrefix} <br />
            <span className="bg-gradient-to-r from-[#CCFF00] via-emerald-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(204,255,0,0.25)]">
              {GYM_CONFIG.branding.headlineHighlight}
            </span>
          </h1>

          {/* One Clean Supporting Sentence */}
          <p className="text-[13px] sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto font-normal leading-snug sm:leading-relaxed px-1 sm:px-2">
            {GYM_CONFIG.taglineSecondary}
          </p>

          {/* Primary Action Buttons: Compact 2-col grid on mobile, inline row on sm+ */}
          <div className="pt-1 sm:pt-3 grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-2 sm:gap-4">
            
            {enquiriesActive ? (
              <>
                {/* 1. WhatsApp CTA */}
                <a
                  href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('[Niwara Gym Demo Enquiry] Hi Niwara Gym team, I want to enquire about joining.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-3 sm:px-7 min-h-[44px] sm:min-h-[48px] py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-1.5 sm:gap-2.5 shadow-xl shadow-[#CCFF00]/20 hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  title="WebCraft Agency Demo Desk (Not Official Reception)"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-black shrink-0" />
                  <span>WhatsApp</span>
                </a>

                {/* 2. Call CTA */}
                <a
                  href={`tel:${GYM_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto px-3 sm:px-7 min-h-[44px] sm:min-h-[48px] py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-1.5 sm:gap-2.5 backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                  title="WebCraft Agency Demo Desk (Not Official Reception)"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CCFF00] shrink-0" />
                  <span>Call Now</span>
                </a>
              </>
            ) : (
              <div className="col-span-2 w-full sm:w-auto px-5 py-3 min-h-[44px] rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center">
                Enquiries Temporarily Paused
              </div>
            )}

            {/* 3. Get Directions CTA */}
            <a
              href={GYM_CONFIG.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 sm:col-span-1 w-full sm:w-auto px-4 sm:px-7 min-h-[44px] sm:min-h-[48px] py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 font-black text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2 backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
              <span>Get Directions</span>
            </a>

          </div>

          {/* Secondary VIP Pass Trigger Pill */}
          <div className="pt-0.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] sm:text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
              <span>Niwara Campus, Navi Peth, Pune</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            {enquiriesActive ? (
              <button
                onClick={onOpenTrialModal}
                className="text-[#CCFF00] font-bold underline underline-offset-4 hover:text-white transition-colors flex items-center gap-1 active:scale-95 min-h-[36px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#CCFF00]"
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Book 1-Day Free Trial
              </button>
            ) : (
              <span className="text-zinc-500 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" /> Trial Enquiries Paused
              </span>
            )}
          </div>

          {/* Visible Demo Desk Disclosure */}
          <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium leading-snug">
            Call &amp; WhatsApp route to <span className="text-zinc-200 font-semibold">{GYM_CONFIG.contact.phoneLabel}</span> ({GYM_CONFIG.contact.phonePrimary})
          </p>

        </div>

      </div>
    </section>
  );
};
