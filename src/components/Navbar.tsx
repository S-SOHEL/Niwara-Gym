import React, { useState, useEffect } from 'react';
import { Dumbbell, Phone, MessageSquare, Star, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { GYM_CONFIG, getActiveNavLinks } from '../config/gymConfig';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = getActiveNavLinks();
  const enquiriesActive = GYM_CONFIG.contact.enableEnquiries !== false;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/92 backdrop-blur-xl border-b border-white/10 py-2 sm:py-3 shadow-2xl shadow-black/90'
          : 'bg-gradient-to-b from-[#0a0a0c]/95 via-[#0a0a0c]/55 to-transparent py-2.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo & Brand Title */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] rounded-xl p-0.5 shrink-0"
            aria-label="Niwara Gym Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#CCFF00] via-emerald-400 to-cyan-400 p-0.5 shadow-lg shadow-[#CCFF00]/15 group-hover:shadow-[#CCFF00]/30 transition-all duration-300">
              <div className="w-full h-full bg-[#0a0a0c] rounded-[10px] sm:rounded-[14px] flex items-center justify-center">
                <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00] transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-black text-base sm:text-xl lg:text-lg xl:text-2xl tracking-tight text-white uppercase font-sans truncate">
                  NIWARA GYM<span className="text-[#CCFF00]">.</span>
                </span>
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#CCFF00] bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-1.5 sm:px-2 py-0.5 rounded-full shrink-0">
                  Demo
                </span>
              </div>
              <p className="text-[8.5px] sm:text-[10px] uppercase font-bold tracking-widest text-zinc-400 flex items-center gap-1 truncate">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#CCFF00] shrink-0" /> NAVI PETH, PUNE
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links - Active at lg (1024px+) to prevent tablet portrait clipping */}
          <nav
            className="hidden lg:flex items-center lg:gap-3.5 xl:gap-5 bg-white/[0.04] backdrop-blur-md lg:px-3.5 xl:px-5 py-2 rounded-full border border-white/10"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="lg:text-[11px] xl:text-xs font-bold text-zinc-300 hover:text-[#CCFF00] transition-colors uppercase lg:tracking-wider xl:tracking-widest relative py-1 whitespace-nowrap focus:outline-none focus-visible:text-[#CCFF00] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#CCFF00] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center lg:gap-1.5 xl:gap-2.5 shrink-0">
            {/* Google Rating Chip (xl+ so 1024px stays uncrowded, visible at 1280px & 1440px) */}
            <a
              href="#reviews"
              className="hidden xl:flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-xs text-zinc-200 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] whitespace-nowrap"
              title="Concept Rating Showcase"
            >
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold ml-1">{GYM_CONFIG.googleRating.score}</span>
              </div>
              <span className="text-zinc-400 text-[11px]">(Concept Showcase)</span>
            </a>

            {/* Quick Call */}
            {enquiriesActive ? (
              <a
                href={`tel:${GYM_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
                className="p-2 xl:p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-[#CCFF00] transition-all hover:scale-105 min-h-[40px] min-w-[40px] xl:min-h-[44px] xl:min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
                title="WebCraft Agency Demo Desk (Not Official Reception)"
                aria-label="Call WebCraft Agency Demo Desk (Not Official Reception)"
              >
                <Phone className="w-4 h-4" />
              </a>
            ) : (
              <span
                className="p-2 xl:p-2.5 rounded-full bg-white/5 border border-white/5 text-zinc-600 cursor-not-allowed min-h-[40px] min-w-[40px] xl:min-h-[44px] xl:min-w-[44px] flex items-center justify-center"
                title="Enquiries Paused"
                aria-label="Enquiries Paused"
              >
                <Phone className="w-4 h-4" />
              </span>
            )}

            {/* Quick WhatsApp */}
            {enquiriesActive && (
              <a
                href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('[Niwara Gym Demo Enquiry] Hi Niwara Gym team, I want to enquire about joining.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 xl:p-2.5 rounded-full bg-[#CCFF00]/10 hover:bg-[#CCFF00]/20 border border-[#CCFF00]/30 text-[#CCFF00] transition-all hover:scale-105 min-h-[40px] min-w-[40px] xl:min-h-[44px] xl:min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
                title="WebCraft Agency Demo Desk (Not Official Reception)"
                aria-label="WebCraft Agency Demo Desk (Not Official Reception)"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            )}

            {/* Free VIP Pass CTA Button */}
            <button
              onClick={onOpenTrialModal}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] min-h-[40px] xl:min-h-[44px] shrink-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#CCFF00] to-cyan-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="relative px-3 xl:px-4 py-2 min-h-[38px] xl:min-h-[42px] rounded-full bg-[#0a0a0c] flex items-center gap-1.5 xl:gap-2 text-[11px] xl:text-xs font-extrabold uppercase tracking-wider xl:tracking-widest text-white group-hover:bg-transparent group-hover:text-black transition-all whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#CCFF00] group-hover:text-black transition-colors shrink-0" />
                {enquiriesActive ? 'VIP PASS' : 'VIP PASS (PAUSED)'}
              </span>
            </button>
          </div>

          {/* Mobile & Tablet Portrait Right Controls: VIP Pass Pill + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={onOpenTrialModal}
              className="px-3.5 py-2 min-h-[40px] text-[11px] font-black bg-[#CCFF00] hover:bg-[#b8e600] text-black rounded-full uppercase tracking-wider shadow-md shadow-[#CCFF00]/20 active:scale-95 transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-black shrink-0" />
              <span>VIP Pass</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-h-[44px] min-w-[44px] text-zinc-300 hover:text-white bg-white/5 active:bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Portrait Slide-down Navigation Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0c]/98 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-4 transition-all duration-300 max-h-[82vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10">
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-bold">{GYM_CONFIG.googleRating.score} Rating</span>
              <span className="text-zinc-500 text-[10px]">(Demo Showcase)</span>
            </div>
            {enquiriesActive ? (
              <a
                href={`tel:${GYM_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-[11px] font-bold text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1.5 rounded-full border border-[#CCFF00]/30 min-h-[36px]"
                title="WebCraft Agency Demo Desk (Not Official Reception)"
              >
                <Phone className="w-3.5 h-3.5" /> Demo Call
              </a>
            ) : (
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <Phone className="w-3.5 h-3.5" /> Call Paused
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-zinc-200 hover:text-[#CCFF00] hover:bg-white/10 transition-all flex items-center justify-between uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-[#CCFF00]"
              >
                <span className="truncate">{link.name}</span>
                <span className="text-[#CCFF00] text-xs shrink-0">→</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3 min-h-[44px] bg-[#CCFF00] text-black font-black rounded-xl uppercase tracking-widest text-xs shadow-lg shadow-[#CCFF00]/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <ShieldCheck className="w-4 h-4" /> {enquiriesActive ? 'Book Free 1-Day VIP Pass' : 'Trial Pass (Paused)'}
            </button>
            {enquiriesActive ? (
              <a
                href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('[Niwara Gym Demo Enquiry] Hi Niwara Gym team, I want to enquire about joining.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 min-h-[44px] bg-white/5 text-[#CCFF00] border border-[#CCFF00]/30 font-bold rounded-xl text-xs flex items-center justify-center gap-2 active:scale-95 transition-all"
                title="WebCraft Agency Demo Desk (Not Official Reception)"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp (WebCraft Demo Desk)
              </a>
            ) : (
              <div className="w-full py-3 min-h-[44px] bg-white/5 text-zinc-500 border border-white/10 font-bold rounded-xl text-xs flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" /> Enquiries Temporarily Paused
              </div>
            )}
            <p className="text-[10px] text-center text-zinc-400 pt-0.5">
              {GYM_CONFIG.contact.phoneLabel} • {GYM_CONFIG.contact.phonePrimary}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
