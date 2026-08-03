import React from 'react';
import { GYM_CONFIG } from '../config/gymConfig';
import { MapPin, Phone, Clock, Navigation, MessageSquare } from 'lucide-react';

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00] bg-[#CCFF00]/10 px-4 py-1.5 rounded-full border border-[#CCFF00]/20">
            LOCATION & CONTACT
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            VISIT US<span className="text-[#CCFF00]">.</span>
          </h2>
        </div>

        {/* Large Embedded Google Map Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 h-[450px] shadow-2xl mb-12 group">
          <iframe
            title="NIWARA GYM Location Map"
            src={GYM_CONFIG.mapEmbedUrl}
            className="w-full h-full border-0 filter brightness-90 contrast-125"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Pinned Gym Location Badge */}
          <div className="absolute top-6 left-6 p-4 rounded-2xl bg-[#0a0a0c]/90 backdrop-blur-xl border border-white/10 text-white max-w-sm shadow-2xl">
            <div className="flex items-center gap-2 text-[#CCFF00] text-xs font-black uppercase tracking-wider">
              <MapPin className="w-4 h-4 fill-[#CCFF00] text-black" /> NIWARA GYM
            </div>
            <p className="text-xs text-zinc-300 mt-1 font-medium">
              {GYM_CONFIG.address.fullAddress}
            </p>
          </div>

          {/* Floating Get Directions Button */}
          <a
            href={GYM_CONFIG.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 px-6 py-3.5 min-h-[48px] rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-widest flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <Navigation className="w-4 h-4 fill-black" /> Get Directions
          </a>
        </div>

        {/* Info Grid: Address, Phone, Opening Hours, WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Address Card */}
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-2">
            <div className="flex items-center gap-2 text-[#CCFF00] text-xs font-black uppercase tracking-wider">
              <MapPin className="w-4 h-4" /> Address
            </div>
            <p className="text-sm font-medium text-white leading-snug">
              {GYM_CONFIG.address.fullAddress}
            </p>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-2">
            <div className="flex items-center gap-2 text-[#CCFF00] text-xs font-black uppercase tracking-wider">
              <Phone className="w-4 h-4" /> Phone
            </div>
            <a
              href={`tel:${GYM_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="text-sm font-black text-white hover:text-[#CCFF00] transition-colors block"
            >
              {GYM_CONFIG.contact.phonePrimary}
            </a>
            <a
              href={`tel:${GYM_CONFIG.contact.phoneSecondary.replace(/\s+/g, '')}`}
              className="text-xs text-zinc-400 hover:text-white transition-colors block"
            >
              {GYM_CONFIG.contact.phoneSecondary}
            </a>
          </div>

          {/* Opening Hours Card */}
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-2">
            <div className="flex items-center gap-2 text-[#CCFF00] text-xs font-black uppercase tracking-wider">
              <Clock className="w-4 h-4" /> Opening Hours
            </div>
            <p className="text-sm font-bold text-white">
              {GYM_CONFIG.timing.weekdays}
            </p>
            <p className="text-xs text-zinc-400">
              Sun: {GYM_CONFIG.timing.sunday}
            </p>
          </div>

          {/* WhatsApp Button Card */}
          <div className="p-6 rounded-3xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 backdrop-blur-xl flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-2 text-[#CCFF00] text-xs font-black uppercase tracking-wider">
              <MessageSquare className="w-4 h-4 fill-[#CCFF00] text-black" /> WhatsApp Enquiry
            </div>
            <a
              href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=Hi%20Niwara%20Gym%20team,%20I%20want%20to%20visit%20the%20gym.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 min-h-[48px] rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#CCFF00]/20 transition-all hover:scale-105 active:scale-95"
            >
              Chat On WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
