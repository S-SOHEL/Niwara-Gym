import React from 'react';
import { GYM_CONFIG } from '../config/gymConfig';
import { MessageSquare, Phone, Navigation } from 'lucide-react';

interface FloatingCTAsProps {
  onOpenTrialModal?: () => void;
}

export const FloatingCTAs: React.FC<FloatingCTAsProps> = () => {
  return (
    <>
      {/* Desktop Floating Right Action Buttons */}
      <div className="hidden md:flex fixed bottom-8 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        
        {/* Floating Get Directions Button */}
        <a
          href={GYM_CONFIG.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 min-h-[48px] min-w-[48px] rounded-2xl bg-[#0a0a0c]/90 hover:bg-[#0a0a0c] border border-white/20 text-cyan-400 shadow-2xl backdrop-blur-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
          title="Get Directions"
        >
          <Navigation className="w-5 h-5 fill-cyan-400/20 group-hover:rotate-45 transition-transform" />
        </a>

        {/* Floating WhatsApp Button with Glow */}
        <a
          href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=Hi%20Niwara%20Gym%20team,%20I%20want%20to%20enquire%20about%20joining.`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-4 min-h-[52px] min-w-[52px] rounded-2xl bg-[#CCFF00] text-black shadow-2xl shadow-[#CCFF00]/40 hover:scale-110 active:scale-95 transition-all group flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full" />
          <MessageSquare className="w-6 h-6 fill-black text-black" />
        </a>

      </div>

      {/* Sticky Mobile Bottom CTA Bar (Thumb Friendly, min-h-[48px] buttons) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0c]/95 backdrop-blur-2xl border-t border-white/10 p-2.5 pb-3 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=Hi%20Niwara%20Gym,%20I%20want%20to%20enquire%20about%20joining.`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] py-3 rounded-2xl bg-[#CCFF00] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-[#CCFF00]/20 active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>WhatsApp</span>
          </a>

          {/* Call */}
          <a
            href={`tel:${GYM_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
            className="min-h-[48px] py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#CCFF00]" />
            <span>Call</span>
          </a>

          {/* Directions */}
          <a
            href={GYM_CONFIG.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] py-3 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <Navigation className="w-4 h-4 text-cyan-400" />
            <span>Map</span>
          </a>

        </div>
      </div>
    </>
  );
};
