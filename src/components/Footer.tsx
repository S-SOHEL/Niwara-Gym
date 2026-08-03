import React from 'react';
import { GYM_CONFIG } from '../config/gymConfig';
import { Dumbbell, MapPin, Phone, MessageSquare, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050507] border-t border-white/10 text-zinc-400 text-xs py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Clean Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Logo & Short Tagline */}
          <div className="md:col-span-1 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#CCFF00] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0a0a0c] rounded-[14px] flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-[#CCFF00]" />
                </div>
              </div>
              <span className="font-black text-xl text-white uppercase tracking-tight">
                NIWARA GYM<span className="text-[#CCFF00]">.</span>
              </span>
            </a>
            <p className="text-zinc-400 text-xs leading-relaxed font-normal">
              Pune's premier luxury fitness club at Navi Peth. Scientific coaching & world-class equipment.
            </p>
          </div>

          {/* Quick Links (Strictly the 5 Links) */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2 font-bold text-xs uppercase tracking-wider">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#CCFF00] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Contact</h4>
            <div className="space-y-2 text-xs font-medium text-zinc-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <span>{GYM_CONFIG.address.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#CCFF00] shrink-0" />
                <a href={`tel:${GYM_CONFIG.contact.phonePrimary}`} className="hover:text-[#CCFF00]">
                  {GYM_CONFIG.contact.phonePrimary}
                </a>
              </p>
            </div>
          </div>

          {/* Socials & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href={GYM_CONFIG.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/5 hover:bg-[#CCFF00]/20 border border-white/10 text-white hover:text-[#CCFF00] transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={GYM_CONFIG.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/5 hover:bg-[#CCFF00]/20 border border-white/10 text-white hover:text-[#CCFF00] transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={GYM_CONFIG.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/5 hover:bg-[#CCFF00]/20 border border-white/10 text-white hover:text-[#CCFF00] transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#CCFF00]/20 border border-[#CCFF00]/40 text-[#CCFF00] hover:bg-[#CCFF00]/30 transition-all"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-[#CCFF00] text-black" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-[11px] text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} NIWARA GYM. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
