import React from 'react';
import { GYM_CONFIG } from '../config/gymConfig';
import { MapPin, Phone, Clock, Navigation, MessageSquare } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const enquiriesActive = GYM_CONFIG.contact.enableEnquiries !== false;

  return (
    <section id="contact" className="py-10 sm:py-16 lg:py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-1.5 sm:space-y-2 mb-6 sm:mb-10">
          <span className="text-[9.5px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-0.5 sm:py-1 rounded-full border border-[#CCFF00]/20 inline-block">
            LOCATION &amp; CONTACT
          </span>
          <h2 className="text-[length:var(--font-section-title)] font-black text-white tracking-tight uppercase leading-tight">
            VISIT US<span className="text-[#CCFF00]">.</span>
          </h2>
        </div>

        {/* Embedded Google Map Container - Compact Non-Trapping Mobile Height */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 h-[210px] sm:h-[340px] md:h-[420px] shadow-2xl mb-5 sm:mb-10 group">
          <iframe
            title="NIWARA GYM Location Map"
            src={GYM_CONFIG.mapEmbedUrl}
            className="w-full h-full border-0 filter brightness-90 contrast-125"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Pinned Gym Location Badge */}
          <div className="absolute top-2.5 left-2.5 sm:top-5 sm:left-5 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0a0a0c]/90 backdrop-blur-xl border border-white/10 text-white max-w-[195px] sm:max-w-sm shadow-2xl">
            <div className="flex items-center gap-1.5 text-[#CCFF00] text-[10.5px] sm:text-xs font-black uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 fill-[#CCFF00] text-black shrink-0" /> NIWARA GYM
            </div>
            <p className="text-[10px] sm:text-xs text-zinc-300 mt-0.5 font-medium line-clamp-2 sm:line-clamp-none leading-snug">
              {GYM_CONFIG.address.fullAddress}
            </p>
          </div>

          {/* Floating Get Directions Button */}
          <a
            href={GYM_CONFIG.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2.5 right-2.5 sm:bottom-5 sm:right-5 px-3.5 sm:px-5 py-2 sm:py-3 min-h-[40px] sm:min-h-[48px] rounded-xl sm:rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-[10.5px] sm:text-xs uppercase tracking-wider sm:tracking-widest flex items-center gap-1.5 shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white"
          >
            <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black" /> Directions
          </a>
        </div>

        {/* Info Grid: Address, Phone, Opening Hours, WhatsApp (Essential Info Kept Immediately Visible) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          
          {/* Address Card */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl space-y-1.5">
            <div className="flex items-center gap-2 text-[#CCFF00] text-[11px] sm:text-xs font-black uppercase tracking-wider">
              <MapPin className="w-4 h-4 shrink-0" /> Address
            </div>
            <p className="text-xs sm:text-sm font-medium text-white leading-snug">
              {GYM_CONFIG.address.fullAddress}
            </p>
          </div>

          {/* Phone Card */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl space-y-1.5 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[#CCFF00] text-[11px] sm:text-xs font-black uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5 shrink-0" /> <span>Demo Desk Call</span>
                </div>
                <span className="text-[9px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 shrink-0">
                  Demo
                </span>
              </div>
              {enquiriesActive ? (
                <a
                  href={`tel:${GYM_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
                  className="text-sm font-black text-white hover:text-[#CCFF00] transition-colors inline-flex items-center min-h-[36px] focus:outline-none focus-visible:underline"
                  title="WebCraft Agency Demo Desk (Not Official Reception)"
                >
                  {GYM_CONFIG.contact.phonePrimary}
                </a>
              ) : (
                <span className="text-xs sm:text-sm font-black text-zinc-400 block cursor-not-allowed">
                  {GYM_CONFIG.contact.phonePrimary} <span className="text-xs font-normal text-amber-400">(Line Paused)</span>
                </span>
              )}
            </div>
            <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-snug">
              {GYM_CONFIG.contact.phoneLabel}
            </p>
          </div>

          {/* Opening Hours Card */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl space-y-1.5 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[#CCFF00] text-[11px] sm:text-xs font-black uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 shrink-0" /> {GYM_CONFIG.timing.scheduleLabel}
                </div>
                <span className="text-[9px] uppercase font-bold text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10 shrink-0">
                  Sample
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white">
                {GYM_CONFIG.timing.weekdays}
              </p>
              <p className="text-[11px] sm:text-xs text-zinc-400">
                Sun: {GYM_CONFIG.timing.sunday}
              </p>
            </div>
            <p className="text-[10px] sm:text-[11px] text-zinc-500">
              Sample operating timetable for demonstration.
            </p>
          </div>

          {/* WhatsApp Button Card */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 backdrop-blur-xl flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[#CCFF00] text-[11px] sm:text-xs font-black uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5 fill-[#CCFF00] text-black shrink-0" /> WhatsApp Enquiry
                </div>
                <span className="text-[9px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 shrink-0">
                  Demo
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-snug">
                WebCraft Agency Demo Desk (Not Official Reception)
              </p>
            </div>
            {enquiriesActive ? (
              <a
                href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('[Niwara Gym Demo Enquiry] Hi Niwara Gym team, I want to visit the gym.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 min-h-[44px] sm:min-h-[48px] rounded-xl sm:rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#CCFF00]/20 transition-all hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
                title="WebCraft Agency Demo Desk (Not Official Reception)"
              >
                Chat On WhatsApp
              </a>
            ) : (
              <div className="w-full py-3 min-h-[44px] sm:min-h-[48px] rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-zinc-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center">
                Enquiries Paused
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
