import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GYM_CONFIG } from '../config/gymConfig';
import { X, ShieldCheck, Sparkles, MessageSquare, Calendar, Phone, User } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [slot, setSlot] = useState('Morning (6:00 AM - 10:00 AM)');
  const [goal, setGoal] = useState('General Weight Loss & Strength');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi Niwara Gym team! I booked my Free 1-Day VIP Pass:
- Name: ${name || 'Guest'}
- Phone: ${phone || 'N/A'}
- Preferred Visit Date: ${visitDate || 'Tomorrow'}
- Preferred Slot: ${slot}
- Goal: ${goal}
Please confirm my entry pass at reception!`;

    window.open(`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0a0a0c] border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-2xl bg-white/10 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] text-xs font-black border border-[#CCFF00]/30 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> 100% Free VIP Pass
          </div>
          <h3 className="text-3xl font-black text-white uppercase tracking-tight">CLAIM YOUR TRIAL PASS</h3>
          <p className="text-xs text-zinc-400">
            Full access to Niwara Gym's strength arena, cardio deck, and 1 complimentary InBody scan.
          </p>
        </div>

        {submitted ? (
          <div className="space-y-5 text-center py-4">
            <div className="w-16 h-16 rounded-3xl bg-[#CCFF00]/20 border border-[#CCFF00]/40 text-[#CCFF00] flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-black text-white uppercase">Pass Generated!</h4>
              <p className="text-xs text-zinc-300">
                Click below to send your pass details directly to our reception on WhatsApp.
              </p>
            </div>

            <button
              onClick={handleWhatsAppRedirect}
              className="w-full py-4 min-h-[48px] rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#CCFF00]/20 transition-all active:scale-95 hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4 fill-black text-black" /> Confirm Pass on WhatsApp Now
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="text-xs font-bold text-zinc-300 mb-1 flex items-center gap-1 uppercase tracking-wider">
                <User className="w-3.5 h-3.5 text-[#CCFF00]" /> Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Patil"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-[#CCFF00]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-zinc-300 mb-1 flex items-center gap-1 uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5 text-[#CCFF00]" /> Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 80101 55174"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-[#CCFF00]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-zinc-300 mb-1 flex items-center gap-1 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-[#CCFF00]" /> Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3 py-3 rounded-2xl bg-[#121218] border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-[#CCFF00]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-300 mb-1 block uppercase tracking-wider">Visit Slot</label>
                <select
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className="w-full px-2 py-3 rounded-2xl bg-[#121218] border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-[#CCFF00]"
                >
                  <option value="Morning">Morning (6:00 - 10:00 AM)</option>
                  <option value="Afternoon">Afternoon (11:00 AM - 4:00 PM)</option>
                  <option value="Evening">Evening (5:00 - 10:00 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-zinc-300 mb-1 block uppercase tracking-wider">Primary Goal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-3 py-3 rounded-2xl bg-[#121218] border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-[#CCFF00]"
              >
                <option value="General Fat Loss & Toning">Weight Loss & Toning</option>
                <option value="Muscle Building & Strength">Muscle Building & Strength</option>
                <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 min-h-[48px] rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#CCFF00]/20 transition-all active:scale-95 hover:scale-[1.02] mt-2"
            >
              <Sparkles className="w-4 h-4" /> Get VIP Entry Pass
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
