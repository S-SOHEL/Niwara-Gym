import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { GYM_CONFIG } from '../config/gymConfig';
import { X, ShieldCheck, Sparkles, MessageSquare, Calendar, Phone, User, AlertCircle, Edit3, Copy, Check, Info } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [slot, setSlot] = useState('Morning (6:00 - 10:00 AM)');
  const [goal, setGoal] = useState('Weight Loss & Body Toning');
  const [submitted, setSubmitted] = useState(false);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [consentError, setConsentError] = useState('');
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key press & lock background body scroll
  useEffect(() => {
    if (!isOpen) return;
    // Always reset consent & transient state on open so consent starts unchecked by default
    setSubmitted(false);
    setConsentChecked(false);
    setNameError('');
    setPhoneError('');
    setConsentError('');
    setCopied(false);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Default to tomorrow's date
  useEffect(() => {
    if (isOpen && !visitDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setVisitDate(tomorrow.toISOString().split('T')[0]);
    }
  }, [isOpen, visitDate]);

  if (!isOpen) return null;

  const validateName = (input: string): boolean => {
    if (input.trim().length >= 2) {
      setNameError('');
      return true;
    }
    setNameError('Please enter your full name (at least 2 characters)');
    return false;
  };

  const validatePhone = (input: string): boolean => {
    const cleaned = input.replace(/\D/g, '');
    // Accept standard 10-digit Indian numbers, or 12 digits with country code 91
    if (cleaned.length === 10 || (cleaned.length === 12 && cleaned.startsWith('91'))) {
      setPhoneError('');
      return true;
    }
    setPhoneError('Please enter a valid 10-digit mobile number');
    return false;
  };

  const getReservationMessage = () => {
    return `[Niwara Gym Demo Enquiry] Hi Niwara Gym team! I have prepared my 1-Day VIP Trial Pass reservation:
- Name: ${name.trim() || 'Guest'}
- Phone / WhatsApp: ${phone.trim()}
- Preferred Visit Date: ${visitDate}
- Preferred Slot: ${slot}
- Fitness Goal: ${goal}
Please follow up regarding this Niwara Gym demo trial pass enquiry.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isNameValid = validateName(name);
    const isPhoneValid = validatePhone(phone);
    if (!consentChecked) {
      setConsentError('Please confirm demo consent before preparing your pass.');
    } else {
      setConsentError('');
    }
    if (!isNameValid || !isPhoneValid || !consentChecked) {
      return;
    }
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 75,
      origin: { y: 0.5 }
    });
  };

  const handleWhatsAppRedirect = () => {
    const message = getReservationMessage();
    window.open(`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCopyDetails = async () => {
    const message = getReservationMessage();
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback for restricted clipboard permissions
      setCopied(false);
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#0a0a0c] border border-white/20 p-4 sm:p-7 space-y-4 sm:space-y-5 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-xl sm:rounded-2xl bg-white/10 text-zinc-400 hover:text-white transition-colors min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
          aria-label="Close Trial Pass Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 text-center pr-8 sm:pr-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] text-[10px] sm:text-[11px] font-black border border-[#CCFF00]/30 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> Free VIP Pass • Demo Flow
          </div>
          <h2 id="trial-modal-title" className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight">
            CLAIM YOUR TRIAL PASS
          </h2>
          <p className="text-[11px] sm:text-xs text-zinc-400">
            Preview the VIP trial booking experience for Niwara Gym Pune.
          </p>
        </div>

        {GYM_CONFIG.contact.enableEnquiries === false ? (
          <div className="space-y-4 text-center py-4">
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs leading-relaxed text-left space-y-1">
              <strong className="block text-white text-sm">Enquiries Temporarily Paused</strong>
              <p>
                Online trial pass reservations are paused pending official gym verification. Please visit Niwara Campus directly or check back soon.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 min-h-[48px] rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Close Window
            </button>
          </div>
        ) : submitted ? (
          <div className="space-y-4 sm:space-y-5 text-center py-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl bg-[#CCFF00]/20 border border-[#CCFF00]/40 text-[#CCFF00] flex items-center justify-center mx-auto">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-black text-white uppercase">Pass Reservation Ready!</h3>
              <p className="text-xs text-zinc-300">
                Tap below to send your details via WhatsApp, or copy them if WhatsApp cannot open automatically.
              </p>
            </div>

            {/* Summary Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-1.5 text-zinc-300">
              <div><strong className="text-white">Name:</strong> {name}</div>
              <div><strong className="text-white">Phone:</strong> {phone}</div>
              <div><strong className="text-white">Date & Slot:</strong> {visitDate} ({slot})</div>
              <div><strong className="text-white">Primary Goal:</strong> {goal}</div>
            </div>

            {/* Non-database disclosure */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-2 text-[10px] sm:text-[11px] text-zinc-400 text-left">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Demo Disclosure:</strong> No database record was stored. Your details will be formatted into a WhatsApp message directed to the WebCraft Agency Demo Desk (Not Official Reception).
              </span>
            </div>

            <div className="space-y-2.5">
              {/* Primary WhatsApp Action */}
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full py-3.5 sm:py-4 min-h-[48px] rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#CCFF00]/20 transition-all active:scale-95 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-white"
                title="WebCraft Agency Demo Desk (Not Official Reception)"
              >
                <MessageSquare className="w-4 h-4 fill-black text-black" />
                <span>Confirm Pass on WhatsApp Now</span>
              </button>

              {/* Fallback Copy Button */}
              <button
                type="button"
                onClick={handleCopyDetails}
                className="w-full py-3 min-h-[44px] rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#CCFF00]" />
                    <span className="text-[#CCFF00]">Copied Reservation Details!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-300" />
                    <span>Copy Reservation Text (Fallback)</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full py-2 text-xs text-zinc-400 hover:text-white font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" /> Edit Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-3 sm:space-y-3.5">
            
            <div>
              <label htmlFor="modal-name" className="text-[11px] sm:text-xs font-bold text-zinc-300 mb-1 flex items-center gap-1 uppercase tracking-wider">
                <User className="w-3.5 h-3.5 text-[#CCFF00]" /> Full Name *
              </label>
              <input
                id="modal-name"
                type="text"
                required
                minLength={2}
                placeholder="e.g. Rahul Patil"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError('');
                }}
                className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-xl sm:rounded-2xl bg-white/5 border text-white text-xs font-bold focus:outline-none focus:ring-2 ${
                  nameError ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-[#CCFF00]'
                }`}
              />
              {nameError && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {nameError}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-phone" className="text-[11px] sm:text-xs font-bold text-zinc-300 mb-1 flex items-center gap-1 uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5 text-[#CCFF00]" /> Phone / WhatsApp *
              </label>
              <input
                id="modal-phone"
                type="tel"
                required
                placeholder="e.g. 98220 12345"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (phoneError) setPhoneError('');
                }}
                className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-xl sm:rounded-2xl bg-white/5 border text-white text-xs font-bold focus:outline-none focus:ring-2 ${
                  phoneError ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-[#CCFF00]'
                }`}
              />
              {phoneError && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {phoneError}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <label htmlFor="modal-date" className="text-[11px] sm:text-xs font-bold text-zinc-300 mb-1 flex items-center gap-1 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-[#CCFF00]" /> Preferred Date
                </label>
                <input
                  id="modal-date"
                  type="date"
                  required
                  min={todayStr}
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3 py-2.5 min-h-[44px] rounded-xl sm:rounded-2xl bg-[#121218] border border-white/10 text-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                />
              </div>

              <div>
                <label htmlFor="modal-slot" className="text-[11px] sm:text-xs font-bold text-zinc-300 mb-1 block uppercase tracking-wider">Visit Slot</label>
                <select
                  id="modal-slot"
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className="w-full px-3 py-2.5 min-h-[44px] rounded-xl sm:rounded-2xl bg-[#121218] border border-white/10 text-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                >
                  <option value="Morning (6:00 - 10:00 AM)">Morning (6:00 - 10:00 AM)</option>
                  <option value="Afternoon (11:00 AM - 4:00 PM)">Afternoon (11:00 AM - 4:00 PM)</option>
                  <option value="Evening (5:00 - 10:00 PM)">Evening (5:00 - 10:00 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="modal-goal" className="text-[11px] sm:text-xs font-bold text-zinc-300 mb-1 block uppercase tracking-wider">Primary Goal</label>
              <select
                id="modal-goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-3 py-2.5 min-h-[44px] rounded-xl sm:rounded-2xl bg-[#121218] border border-white/10 text-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
              >
                <option value="Weight Loss & Body Toning">Weight Loss & Body Toning</option>
                <option value="Muscle Building & Hypertrophy">Muscle Building & Hypertrophy</option>
                <option value="1-on-1 Personal Training Protocol">1-on-1 Personal Training Protocol</option>
                <option value="Functional & Athletic Conditioning">Functional & Athletic Conditioning</option>
              </select>
            </div>

            {/* Explicit Consent Checkbox (Unchecked by Default) + Non-Database Disclosure */}
            <div className="space-y-1.5">
              <label
                htmlFor="modal-consent"
                className={`p-3 rounded-xl bg-white/[0.025] border flex items-start gap-2.5 text-[10.5px] sm:text-[11px] text-zinc-300 cursor-pointer leading-snug transition-colors ${
                  consentError ? 'border-red-500/80 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <input
                  id="modal-consent"
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => {
                    setConsentChecked(e.target.checked);
                    if (e.target.checked && consentError) setConsentError('');
                  }}
                  className="mt-0.5 w-4 h-4 rounded accent-[#CCFF00] shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                />
                <span>
                  <strong className="text-white">Demo Consent:</strong> I understand this prepares a pre-filled WhatsApp enquiry to the{' '}
                  <strong className="text-[#CCFF00]">WebCraft Agency Demo Desk (Not Official Reception)</strong> and does not create a database record or confirmed gym booking.
                </span>
              </label>
              {consentError && (
                <p className="text-[11px] text-red-400 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {consentError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 sm:py-3.5 min-h-[44px] sm:min-h-[48px] rounded-xl sm:rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#CCFF00]/20 transition-all active:scale-95 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Sparkles className="w-4 h-4" /> Prepare VIP Entry Pass
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
