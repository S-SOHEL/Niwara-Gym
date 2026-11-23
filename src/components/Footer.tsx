import React from 'react';
import { GYM_CONFIG, getActiveNavLinks } from '../config/gymConfig';
import { Dumbbell, MapPin, Phone, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = getActiveNavLinks();

  return (
    <footer className="bg-[#050507] border-t border-white/10 text-zinc-400 text-xs pt-10 pb-28 md:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Clean Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Logo & Short Tagline */}
          <div className="sm:col-span-2 md:col-span-1 space-y-2.5">
            <a href="#home" className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#CCFF00] rounded-xl p-0.5 inline-flex">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-[#CCFF00] p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#0a0a0c] rounded-[10px] sm:rounded-[14px] flex items-center justify-center">
                  <Dumbbell className="w-4 h-4 text-[#CCFF00]" />
                </div>
              </div>
              <span className="font-black text-base sm:text-xl text-white uppercase tracking-tight">
                NIWARA GYM<span className="text-[#CCFF00]">.</span>
              </span>
            </a>
            <p className="text-zinc-400 text-xs leading-snug sm:leading-relaxed font-normal">
              Pune's premier luxury fitness club at Navi Peth. Scientific coaching &amp; world-class equipment.
            </p>
          </div>

          {/* Quick Links - Compact 3-col grid on mobile */}
          <div className="space-y-2.5">
            <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-white">Quick Links</h3>
            <ul className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 gap-x-2 gap-y-2 font-bold text-[11px] sm:text-xs uppercase tracking-wider">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#CCFF00] transition-colors inline-block py-0.5 focus:outline-none focus-visible:text-[#CCFF00]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-white">Contact</h3>
            <div className="space-y-2 text-xs font-medium text-zinc-300">
              <p className="flex items-start gap-2 leading-snug">
                <MapPin className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <span>{GYM_CONFIG.address.fullAddress}</span>
              </p>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <div>
                  {GYM_CONFIG.contact.enableEnquiries !== false ? (
                    <a
                      href={`tel:${GYM_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
                      className="hover:text-[#CCFF00] focus:outline-none focus-visible:underline"
                      title="WebCraft Agency Demo Desk (Not Official Reception)"
                    >
                      {GYM_CONFIG.contact.phonePrimary} <span className="text-[10px] text-amber-400 font-bold ml-1">(Demo Line)</span>
                    </a>
                  ) : (
                    <span className="text-zinc-400">
                      {GYM_CONFIG.contact.phonePrimary} <span className="text-[10px] text-zinc-500">(Paused)</span>
                    </span>
                  )}
                  <p className="text-[10px] text-zinc-500 mt-0.5 leading-snug">
                    WebCraft Agency Demo Desk (Not Official Reception)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Scope & Enquiry */}
          <div className="space-y-2.5">
            <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-white">Project Scope</h3>
            <div className="space-y-2 text-xs text-zinc-400 leading-snug">
              <p>
                This platform is a <strong className="text-[#CCFF00]">Gym Demo Project</strong> engineered by WebCraft to showcase modern gym web capabilities.
              </p>
              <a
                href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('[Niwara Gym Demo Enquiry] Hi WebCraft, I saw the Niwara Gym demo and would like to build a website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 min-h-[40px] rounded-xl bg-white/5 border border-white/10 text-zinc-200 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors mt-1 focus:outline-none focus:ring-1 focus:ring-[#CCFF00]"
                title="WebCraft Agency Demo Desk (Not Official Reception)"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                <span className="text-[11px] leading-tight">WebCraft Agency Demo Desk (Not Official Reception)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Demo Notice */}
        <div className="pt-5 sm:pt-7 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 font-medium gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} NIWARA GYM. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
            Website Demo Concept Crafted by <strong className="text-white">WebCraft</strong>
          </p>
        </div>

      </div>
    </footer>
  );
};
