import React from 'react';
import { GYM_CONFIG } from '../config/gymConfig';
import { MessageSquare, Phone, Navigation, ShieldCheck } from 'lucide-react';

interface FloatingCTAsProps {
  onOpenTrialModal?: () => void;
}

export const FloatingCTAs: React.FC<FloatingCTAsProps> = ({ onOpenTrialModal }) => {
  const enquiriesActive = GYM_CONFIG.contact.enableEnquiries !== false;

  return (
    <>
      {/* Desktop Floating Right Action Buttons */}
      <div className="hidden md:flex fixed bottom-8 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        
        {/* Floating VIP Trial Pass Trigger */}
        {onOpenTrialModal && (
          <button
            onClick={onOpenTrialModal}
            className="px-4 py-3 min-h-[48px] rounded-2xl bg-gradient-to-r from-[#CCFF00] to-emerald-400 text-black font-black text-xs uppercase tracking-wider shadow-2xl shadow-[#CCFF00]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-white"
            title="Book Free 1-Day Trial"
          >
            <ShieldCheck className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            <span>Free VIP Pass</span>
          </button>
        )}

        {/* Floating Get Directions Button */}
        <a
          href={GYM_CONFIG.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 min-h-[48px] min-w-[48px] rounded-2xl bg-[#0a0a0c]/90 hover:bg-[#0a0a0c] border border-white/20 text-cyan-400 shadow-2xl backdrop-blur-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-cyan-400"
          title="Get Directions"
        >
          <Navigation className="w-5 h-5 fill-cyan-400/20 group-hover:rotate-45 transition-transform" />
        </a>

        {/* Floating WhatsApp Button with Glow (if active) */}
        {enquiriesActive && (
          <a
            href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('[Niwara Gym Demo Enquiry] Hi Niwara Gym team, I want to enquire about joining.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-4 min-h-[52px] min-w-[52px] rounded-2xl bg-[#CCFF00] text-black shadow-2xl shadow-[#CCFF00]/40 hover:scale-110 active:scale-95 transition-all group flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
            title="WebCraft Agency Demo Desk (Not Official Reception)"
            aria-label="WebCraft Agency Demo Desk (Not Official Reception)"
          >
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full" />
            <MessageSquare className="w-6 h-6 fill-black text-black" />
          </a>
        )}

      </div>

      {/* Sticky Mobile Bottom CTA Bar (Compact Thumb-Friendly: Call / WhatsApp / VIP Pass with safe-area padding) */}
      <div
        style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0c]/95 backdrop-blur-2xl border-t border-white/10 px-2.5 pt-2 shadow-2xl"
      >
        <div className={`grid ${enquiriesActive ? 'grid-cols-3' : 'grid-cols-2'} gap-1.5 sm:gap-2 max-w-lg mx-auto`}>
          
          {enquiriesActive ? (
            <>
              {/* 1. Call */}
              <a
                href={`tel:${GYM_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
                className="min-h-[44px] py-2 px-1.5 rounded-xl bg-white/10 border border-white/20 text-white font-black text-[10.5px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1 active:scale-95 transition-transform focus:outline-none focus:ring-1 focus:ring-white whitespace-nowrap"
                title="WebCraft Agency Demo Desk (Not Official Reception)"
                aria-label="Call WebCraft Agency Demo Desk (Not Official Reception)"
              >
                <Phone className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                <span>Call</span>
              </a>

              {/* 2. WhatsApp */}
              <a
                href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('[Niwara Gym Demo Enquiry] Hi Niwara Gym team, I want to enquire about joining.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] py-2 px-1.5 rounded-xl bg-[#CCFF00] text-black font-black text-[10.5px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow-lg shadow-[#CCFF00]/20 active:scale-95 transition-transform focus:outline-none focus:ring-1 focus:ring-white whitespace-nowrap"
                title="WebCraft Agency Demo Desk (Not Official Reception)"
                aria-label="WhatsApp WebCraft Agency Demo Desk (Not Official Reception)"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-black text-black shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* 3. VIP Pass */}
              <button
                type="button"
                onClick={onOpenTrialModal}
                className="min-h-[44px] py-2 px-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-black text-[10.5px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow-lg shadow-cyan-500/20 active:scale-95 transition-transform focus:outline-none focus:ring-1 focus:ring-white whitespace-nowrap"
                title="Claim Demo VIP Pass"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
                <span>VIP Pass</span>
              </button>
            </>
          ) : (
            <>
              <a
                href={GYM_CONFIG.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] py-3 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <Navigation className="w-4 h-4 text-cyan-400" />
                <span>Directions</span>
              </a>
              <button
                type="button"
                onClick={onOpenTrialModal}
                className="min-h-[48px] py-3 rounded-2xl bg-[#CCFF00] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform focus:outline-none focus:ring-1 focus:ring-white"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>VIP Pass</span>
              </button>
            </>
          )}

        </div>
      </div>
    </>
  );
};
