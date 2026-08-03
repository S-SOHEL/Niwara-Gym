import React, { useState, useEffect } from 'react';
import { Dumbbell, Phone, MessageSquare, Star, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#0a0a0c]/90 via-[#0a0a0c]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Title */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#CCFF00] via-emerald-400 to-cyan-400 p-0.5 shadow-lg shadow-[#CCFF00]/20 group-hover:shadow-[#CCFF00]/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0a0a0c] rounded-[14px] flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-[#CCFF00] transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xl sm:text-2xl tracking-tight text-white uppercase font-sans">
                  NIWARA GYM<span className="text-[#CCFF00]">.</span>
                </span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#CCFF00]" /> NAVI PETH, PUNE
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links - STRICTLY ONLY 5 ITEMS */}
          <nav className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-zinc-300 hover:text-[#CCFF00] transition-colors uppercase tracking-widest relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#CCFF00] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Rating Badge & Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Google Rating Chip */}
            <a
              href="#reviews"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-zinc-200 transition-all"
            >
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold ml-1">{GYM_CONFIG.googleRating.score}</span>
              </div>
              <span className="text-zinc-400 text-[11px]">({GYM_CONFIG.googleRating.totalReviews}+)</span>
            </a>

            {/* Quick Call */}
            <a
              href={`tel:${GYM_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-[#CCFF00] transition-all hover:scale-105"
              title="Call Gym Office"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Quick WhatsApp */}
            <a
              href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=Hi%20Niwara%20Gym%20team,%20I%20want%20to%20enquire%20about%20joining.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#CCFF00]/10 hover:bg-[#CCFF00]/20 border border-[#CCFF00]/30 text-[#CCFF00] transition-all hover:scale-105"
              title="WhatsApp Enquiry"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Free VIP Pass CTA Button */}
            <button
              onClick={onOpenTrialModal}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#CCFF00] to-cyan-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="relative px-4 py-2 rounded-full bg-[#0a0a0c] flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white group-hover:bg-transparent group-hover:text-black transition-all">
                <ShieldCheck className="w-4 h-4 text-[#CCFF00] group-hover:text-black transition-colors" />
                VIP PASS
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTrialModal}
              className="px-3 py-1.5 text-[11px] font-black bg-[#CCFF00] text-black rounded-full uppercase tracking-wider shadow-lg shadow-[#CCFF00]/20"
            >
              VIP Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-white/5 rounded-xl border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Navigation Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{GYM_CONFIG.googleRating.score} Rated Gym</span>
              <span className="text-zinc-500 text-xs">({GYM_CONFIG.googleRating.totalReviews}+ Reviews)</span>
            </div>
            <a
              href={`tel:${GYM_CONFIG.contact.phonePrimary}`}
              className="flex items-center gap-1.5 text-xs font-bold text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/30"
            >
              <Phone className="w-3.5 h-3.5" /> Call
            </a>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold text-zinc-200 hover:text-[#CCFF00] hover:bg-white/10 transition-all flex items-center justify-between uppercase tracking-wider"
              >
                <span>{link.name}</span>
                <span className="text-[#CCFF00]">→</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3.5 bg-[#CCFF00] text-black font-black rounded-2xl uppercase tracking-widest text-xs shadow-lg shadow-[#CCFF00]/20 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" /> Book Free 1-Day VIP Pass
            </button>
            <a
              href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=Hi%20Niwara%20Gym,%20I%20want%20to%20enquire%20about%20joining.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-white/5 text-[#CCFF00] border border-[#CCFF00]/30 font-bold rounded-2xl text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Instant WhatsApp Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
