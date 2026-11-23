import React, { useState } from 'react';
import { GYM_CONFIG } from '../config/gymConfig';
import { HeartPulse, MessageSquare, ShieldAlert } from 'lucide-react';

interface BMICalculatorProps {
  onOpenTrialModal?: () => void;
}

export const BMICalculator: React.FC<BMICalculatorProps> = () => {
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(75);
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(1.375); // Light activity

  const enquiriesActive = GYM_CONFIG.contact.enableEnquiries !== false;

  // Sanitize numerical inputs safely to prevent NaN or extreme breaks
  const safeHeight = Math.max(100, Math.min(240, Number(height) || 175));
  const safeWeight = Math.max(30, Math.min(250, Number(weight) || 75));
  const safeAge = Math.max(12, Math.min(100, Number(age) || 25));

  // Calculate BMI (Weight in kg / Height in m^2)
  const heightInMeters = safeHeight / 100;
  const bmi = parseFloat((safeWeight / (heightInMeters * heightInMeters)).toFixed(1));

  // Determine Category, Gauge Percentage & Advice
  let category = 'Normal Weight';
  let categoryColor = 'text-[#CCFF00] bg-[#CCFF00]/10 border-[#CCFF00]/30';
  let gaugePercentage = 50;
  let advice = 'You are in a healthy estimated range. Progressive hypertrophy and resistance training will optimize muscle-to-fat composition.';

  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    gaugePercentage = Math.min(Math.max((bmi / 30) * 100, 15), 35);
    advice = 'We recommend progressive resistance training paired with a structured caloric surplus nutrition protocol.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal Weight';
    categoryColor = 'text-[#CCFF00] bg-[#CCFF00]/10 border-[#CCFF00]/30';
    gaugePercentage = Math.min(Math.max((bmi / 35) * 100, 40), 60);
    advice = 'You are in a healthy estimated range. Progressive hypertrophy and resistance training will optimize muscle-to-fat composition.';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
    categoryColor = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    gaugePercentage = Math.min(Math.max((bmi / 40) * 100, 65), 80);
    advice = 'High potential for 90-day body recomposition. Functional conditioning paired with progressive lifting will accelerate safe fat reduction.';
  } else {
    category = 'Obese';
    categoryColor = 'text-red-400 bg-red-500/10 border-red-500/20';
    gaugePercentage = 92;
    advice = 'Our coaching protocol recommends tailored low-impact strength work and structured daily nutrition to lose weight sustainably.';
  }

  // Ideal weight range calculation (Standard BMI 18.5 to 24.9)
  const minIdealWeight = parseFloat((18.5 * heightInMeters * heightInMeters).toFixed(1));
  const maxIdealWeight = parseFloat((24.9 * heightInMeters * heightInMeters).toFixed(1));

  // Basal Metabolic Rate (BMR) - Mifflin-St Jeor formula
  let bmr = 0;
  if (gender === 'male') {
    bmr = 10 * safeWeight + 6.25 * safeHeight - 5 * safeAge + 5;
  } else {
    bmr = 10 * safeWeight + 6.25 * safeHeight - 5 * safeAge - 161;
  }
  const roundedBMR = Math.round(bmr);
  const dailyCalories = Math.round(bmr * activity);

  const isOutOfRange =
    (height > 0 && (height < 100 || height > 240)) ||
    (weight > 0 && (weight < 30 || weight > 250)) ||
    (age > 0 && (age < 12 || age > 100));

  const whatsappReportMessage = `[Niwara Gym Demo Enquiry] Hi Niwara Gym team! I calculated my fitness diagnostic on your website:
- Height: ${safeHeight} cm
- Weight: ${safeWeight} kg
- Age: ${safeAge} years
- Gender: ${gender.toUpperCase()}
- Estimated BMI: ${bmi} (${category})
- Estimated BMR: ${roundedBMR} kcal/day
- Estimated Daily Maintenance: ${dailyCalories} kcal/day
- Ideal Weight Range: ${minIdealWeight} - ${maxIdealWeight} kg
Please recommend a suitable workout & nutrition plan for my fitness goals.`;

  return (
    <section id="bmi-calculator" className="py-6 sm:py-12 lg:py-16 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-1 sm:space-y-2 mb-4 sm:mb-8">
          <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-[#CCFF00] bg-[#CCFF00]/10 px-2.5 py-0.5 rounded-full border border-[#CCFF00]/20 inline-block">
            FITNESS DIAGNOSTICS • DEMO TOOL
          </span>
          <h2 className="text-[length:var(--font-section-title)] font-black text-white tracking-tight uppercase leading-tight">
            BMI &amp; BMR CALCULATOR<span className="text-[#CCFF00]">.</span>
          </h2>
          <p className="text-[11px] sm:text-xs md:text-sm text-zinc-400 max-w-xl mx-auto leading-snug">
            Interactive mathematical estimation tool for Body Mass Index, Basal Metabolism, and daily caloric requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-3.5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Left Form Column */}
          <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-white/[0.025] border border-white/10 p-3.5 sm:p-5 space-y-3 sm:space-y-4 backdrop-blur-xl flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="text-xs sm:text-sm font-black text-white uppercase flex items-center gap-1.5 sm:gap-2">
                <HeartPulse className="w-4 h-4 text-[#CCFF00]" /> ENTER YOUR METRICS
              </h3>
              <span className="text-[9.5px] sm:text-[10.5px] font-bold text-zinc-400 uppercase tracking-wider">Live Calc</span>
            </div>

            <div className="space-y-2.5 sm:space-y-3.5">
              
              {/* Compact Segmented Gender Toggle */}
              <div className="flex items-center justify-between gap-2">
                <label className="text-[10.5px] sm:text-xs font-bold text-zinc-300 uppercase tracking-wider">Gender</label>
                <div className="grid grid-cols-2 p-1 rounded-xl bg-black/60 border border-white/10 w-44 sm:w-52">
                  <button
                    type="button"
                    aria-pressed={gender === 'male'}
                    onClick={() => setGender('male')}
                    className={`py-1.5 min-h-[34px] sm:min-h-[36px] rounded-lg text-xs font-black uppercase tracking-wider transition-all active:scale-95 focus:outline-none focus:ring-1 focus:ring-[#CCFF00] ${
                      gender === 'male'
                        ? 'bg-[#CCFF00] text-black shadow-sm shadow-[#CCFF00]/20'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    aria-pressed={gender === 'female'}
                    onClick={() => setGender('female')}
                    className={`py-1.5 min-h-[34px] sm:min-h-[36px] rounded-lg text-xs font-black uppercase tracking-wider transition-all active:scale-95 focus:outline-none focus:ring-1 focus:ring-[#CCFF00] ${
                      gender === 'female'
                        ? 'bg-[#CCFF00] text-black shadow-sm shadow-[#CCFF00]/20'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Height Slider & Direct Decimal Input */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="height-input" className="text-[10.5px] sm:text-xs font-bold text-zinc-300 uppercase tracking-wider">Height</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      id="height-input"
                      type="number"
                      step="0.1"
                      min="100"
                      max="240"
                      value={height === 0 ? '' : height}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setHeight(isNaN(val) ? 0 : val);
                      }}
                      className="w-16 px-1.5 py-0.5 text-right rounded-md bg-black/60 border border-white/15 text-[#CCFF00] font-black text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#CCFF00]"
                      aria-label="Height in centimeters"
                    />
                    <span className="text-zinc-400 text-[11px] sm:text-xs font-bold w-5">cm</span>
                  </div>
                </div>
                <input
                  type="range"
                  step="0.5"
                  min="100"
                  max="240"
                  value={safeHeight}
                  onChange={(e) => setHeight(parseFloat(e.target.value) || 100)}
                  className="w-full accent-[#CCFF00] cursor-pointer h-1.5 bg-white/10 rounded-lg focus:outline-none"
                  aria-label="Height slider"
                />
              </div>

              {/* Weight Slider & Direct Decimal Input */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="weight-input" className="text-[10.5px] sm:text-xs font-bold text-zinc-300 uppercase tracking-wider">Weight</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      id="weight-input"
                      type="number"
                      step="0.1"
                      min="30"
                      max="250"
                      value={weight === 0 ? '' : weight}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setWeight(isNaN(val) ? 0 : val);
                      }}
                      className="w-16 px-1.5 py-0.5 text-right rounded-md bg-black/60 border border-white/15 text-[#CCFF00] font-black text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#CCFF00]"
                      aria-label="Weight in kilograms"
                    />
                    <span className="text-zinc-400 text-[11px] sm:text-xs font-bold w-5">kg</span>
                  </div>
                </div>
                <input
                  type="range"
                  step="0.5"
                  min="30"
                  max="250"
                  value={safeWeight}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 30)}
                  className="w-full accent-[#CCFF00] cursor-pointer h-1.5 bg-white/10 rounded-lg focus:outline-none"
                  aria-label="Weight slider"
                />
              </div>

              {/* Age & Activity - Side-by-side on all screens with grid-cols-12 */}
              <div className="grid grid-cols-12 gap-2 sm:gap-3">
                <div className="col-span-4">
                  <label htmlFor="age-input" className="text-[10px] sm:text-xs font-bold text-zinc-300 mb-1 block uppercase tracking-wider">Age (Yrs)</label>
                  <input
                    id="age-input"
                    type="number"
                    min="12"
                    max="100"
                    value={age === 0 ? '' : age}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setAge(isNaN(val) ? 0 : val);
                    }}
                    className="w-full px-2 sm:px-3 py-1.5 min-h-[38px] sm:min-h-[42px] rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:ring-1 focus:ring-[#CCFF00]"
                  />
                </div>

                <div className="col-span-8">
                  <label htmlFor="activity-select" className="text-[10px] sm:text-xs font-bold text-zinc-300 mb-1 block uppercase tracking-wider">Activity Level</label>
                  <select
                    id="activity-select"
                    value={activity}
                    onChange={(e) => setActivity(parseFloat(e.target.value))}
                    className="w-full px-2 sm:px-3 py-1.5 min-h-[38px] sm:min-h-[42px] rounded-lg sm:rounded-xl bg-[#121218] border border-white/10 text-white text-xs font-bold focus:outline-none focus:ring-1 focus:ring-[#CCFF00] truncate"
                  >
                    <option value={1.2}>Sedentary (Desk Job)</option>
                    <option value={1.375}>Light Active (1-3 d/wk)</option>
                    <option value={1.55}>Mod Active (3-5 d/wk)</option>
                    <option value={1.725}>Very Active (6-7 d/wk)</option>
                  </select>
                </div>
              </div>

              {isOutOfRange && (
                <p className="text-[10px] sm:text-[11px] text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg sm:rounded-xl px-2.5 py-1.5 font-medium leading-snug">
                  Values outside standard bounds (Height 100–240 cm, Weight 30–250 kg, Age 12–100 yrs) are clamped for safe estimation.
                </p>
              )}

            </div>
          </div>

          {/* Right Output Column — Compact Scannable Hierarchy */}
          <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-white/[0.025] border border-white/10 p-3.5 sm:p-5 backdrop-blur-xl flex flex-col justify-between space-y-2.5 sm:space-y-3.5">
            
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[11px] sm:text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Diagnostic Output</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/20">
                  Estimated Figures
                </span>
              </div>

              {/* Compact Horizontal BMI Hero Strip */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-wider">
                      Estimated BMI
                    </span>
                    <div className="text-2xl sm:text-4xl font-black text-white leading-none tracking-tight">
                      {bmi}
                    </div>
                  </div>
                  <div className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider border shrink-0 ${categoryColor}`}>
                    {category}
                  </div>
                </div>

                {/* Slim Meter Bar */}
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#CCFF00] via-amber-400 to-red-500 transition-all duration-500 rounded-full"
                      style={{ width: `${gaugePercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[8.5px] sm:text-[9.5px] text-zinc-500 font-semibold">
                    <span>Underweight &lt;18.5</span>
                    <span>18.5–24.9 Normal</span>
                    <span>25–29.9 Over</span>
                    <span>30+ Obese</span>
                  </div>
                </div>
              </div>

              {/* Compact KPI Strip: 2+1 on mobile, 3-col on sm+ */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[9.5px] sm:text-[10.5px] text-zinc-400 font-bold uppercase tracking-wider">BMR (Basal)</div>
                  <div className="text-sm sm:text-base font-black text-white mt-0.5 leading-tight whitespace-nowrap">
                    {roundedBMR} <span className="text-[10px] sm:text-xs font-normal text-zinc-400">kcal</span>
                  </div>
                  <div className="text-[9px] text-zinc-500 mt-0.5">Resting burn</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[9.5px] sm:text-[10.5px] text-zinc-400 font-bold uppercase tracking-wider">Maintenance</div>
                  <div className="text-sm sm:text-base font-black text-[#CCFF00] mt-0.5 leading-tight whitespace-nowrap">
                    {dailyCalories} <span className="text-[10px] sm:text-xs font-normal text-[#CCFF00]/80">kcal</span>
                  </div>
                  <div className="text-[9px] text-zinc-500 mt-0.5">Daily TDEE</div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-between sm:block">
                  <div>
                    <div className="text-[9.5px] sm:text-[10.5px] text-zinc-400 font-bold uppercase tracking-wider">Target Weight</div>
                    <div className="text-[9px] text-zinc-500 mt-0.5 sm:hidden">BMI 18.5–24.9 window</div>
                  </div>
                  <div className="text-sm sm:text-base font-black text-white sm:mt-0.5 leading-tight whitespace-nowrap">
                    {minIdealWeight}–{maxIdealWeight} <span className="text-[10px] sm:text-xs font-normal text-zinc-400">kg</span>
                  </div>
                  <div className="hidden sm:block text-[9px] text-zinc-500 mt-0.5">Healthy window</div>
                </div>
              </div>

              {/* Compact Coach Guidance */}
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[11px] sm:text-xs text-zinc-300">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                  <span className="font-bold text-[#CCFF00] uppercase tracking-wider text-[10px] sm:text-[10.5px]">
                    Training Recommendation:
                  </span>
                </div>
                <p className="leading-snug text-zinc-300">{advice}</p>
              </div>

              {/* Compact Medical Disclaimer Callout */}
              <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-1.5 text-[9.5px] sm:text-[10px] text-zinc-400">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  <strong className="text-zinc-300">Disclaimer:</strong> Outputs are standard mathematical estimates for general guidance, not clinical diagnosis or medical prescriptions. Consult a doctor before starting intense training or dieting.
                </p>
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <div className="pt-1 space-y-1">
              {enquiriesActive ? (
                <>
                  <a
                    href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(whatsappReportMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-3 min-h-[42px] sm:min-h-[46px] rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#CCFF00]/20 transition-all active:scale-95 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-white"
                    title="WebCraft Agency Demo Desk (Not Official Reception)"
                  >
                    <MessageSquare className="w-4 h-4 fill-black shrink-0" />
                    <span>Send Diagnostic Report via WhatsApp</span>
                  </a>
                  <p className="text-[9.5px] text-center text-zinc-400">
                    Routes to {GYM_CONFIG.contact.phoneLabel} ({GYM_CONFIG.contact.phonePrimary})
                  </p>
                </>
              ) : (
                <div className="w-full py-2.5 min-h-[42px] rounded-xl bg-white/5 border border-white/10 text-zinc-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center text-center px-4">
                  WhatsApp Enquiries Temporarily Paused
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
