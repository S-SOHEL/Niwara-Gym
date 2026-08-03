import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GYM_CONFIG } from '../config/gymConfig';
import { Calculator, Sparkles, MessageSquare, HeartPulse } from 'lucide-react';

interface BMICalculatorProps {
  onOpenTrialModal?: () => void;
}

export const BMICalculator: React.FC<BMICalculatorProps> = ({ onOpenTrialModal }) => {
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(75);
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(1.375); // Light activity

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));

  // Determine Category & Color
  let category = 'Normal Weight';
  let categoryColor = 'text-[#CCFF00] bg-[#CCFF00]/10 border-[#CCFF00]/30';
  let gaugePercentage = 50;
  let advice = 'Great job! Maintain your lean muscle mass and endurance with our strength arena.';

  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    gaugePercentage = Math.min(Math.max((bmi / 30) * 100, 15), 35);
    advice = 'We recommend muscle building workouts & a caloric surplus diet plan prepared by Niwara head coach.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal Weight';
    categoryColor = 'text-[#CCFF00] bg-[#CCFF00]/10 border-[#CCFF00]/30';
    gaugePercentage = Math.min(Math.max((bmi / 35) * 100, 40), 60);
    advice = 'You are in a healthy range! Optimize your body composition with hypertrophy & strength cycles.';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
    categoryColor = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    gaugePercentage = Math.min(Math.max((bmi / 40) * 100, 65), 80);
    advice = 'High potential for 90-day fat loss! Our HIIT turf + InBody scan will help shed fat safely.';
  } else {
    category = 'Obese';
    categoryColor = 'text-red-400 bg-red-500/10 border-red-500/20';
    gaugePercentage = 92;
    advice = 'Start our 1-on-1 Personal Training protocol to optimize metabolic rate and lose body fat efficiently.';
  }

  // Ideal weight range calculation (BMI 18.5 to 24.9)
  const minIdealWeight = Math.round(18.5 * heightInMeters * heightInMeters);
  const maxIdealWeight = Math.round(24.9 * heightInMeters * heightInMeters);

  // Basal Metabolic Rate (BMR)
  let bmr = 0;
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
  const dailyCalories = Math.round(bmr * activity);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const whatsappReportMessage = `Hi Niwara Gym team! I calculated my BMI report on your website:
- Height: ${height} cm
- Weight: ${weight} kg
- Age: ${age}
- Gender: ${gender.toUpperCase()}
- BMI Score: ${bmi} (${category})
- Estimated Daily Calories: ${dailyCalories} kcal
Please recommend a suitable workout & diet plan for me.`;

  return (
    <section id="bmi-calculator" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00] bg-[#CCFF00]/10 px-4 py-1.5 rounded-full border border-[#CCFF00]/20">
            FITNESS DIAGNOSTICS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            BMI CALCULATOR<span className="text-[#CCFF00]">.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Form Column */}
          <div className="lg:col-span-6 rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 space-y-6 backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-black text-white uppercase flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-[#CCFF00]" /> ENTER YOUR METRICS
              </h3>
              <span className="text-xs text-zinc-400">Instant Diagnostic</span>
            </div>

            <form onSubmit={handleCalculate} className="space-y-5">
              
              {/* Gender Toggle */}
              <div>
                <label className="text-xs font-bold text-zinc-300 mb-2 block uppercase tracking-wider">Gender</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 min-h-[48px] rounded-2xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 ${
                      gender === 'male'
                        ? 'bg-[#CCFF00] text-black shadow-lg shadow-[#CCFF00]/20'
                        : 'bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 min-h-[48px] rounded-2xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 ${
                      gender === 'female'
                        ? 'bg-[#CCFF00] text-black shadow-lg shadow-[#CCFF00]/20'
                        : 'bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Height Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-zinc-300 uppercase tracking-wider">Height (cm)</label>
                  <span className="text-[#CCFF00] font-black text-sm">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-[#CCFF00] cursor-pointer h-2 bg-white/10 rounded-lg"
                />
              </div>

              {/* Weight Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-zinc-300 uppercase tracking-wider">Weight (kg)</label>
                  <span className="text-[#CCFF00] font-black text-sm">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-[#CCFF00] cursor-pointer h-2 bg-white/10 rounded-lg"
                />
              </div>

              {/* Age & Activity */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-zinc-300 mb-1.5 block uppercase tracking-wider">Age (Years)</label>
                  <input
                    type="number"
                    min="12"
                    max="90"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-300 mb-1.5 block uppercase tracking-wider">Activity</label>
                  <select
                    value={activity}
                    onChange={(e) => setActivity(Number(e.target.value))}
                    className="w-full px-3 py-3 rounded-2xl bg-[#121218] border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-[#CCFF00]"
                  >
                    <option value={1.2}>Sedentary</option>
                    <option value={1.375}>Light Active</option>
                    <option value={1.55}>Mod Active</option>
                    <option value={1.725}>Very Active</option>
                  </select>
                </div>
              </div>

            </form>
          </div>

          {/* Right Output Column */}
          <div className="lg:col-span-6 rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Diagnostic Output</span>
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/20">
                  Instant Calculation
                </span>
              </div>

              {/* BMI Score Display */}
              <div className="p-6 rounded-2xl bg-black/50 border border-white/10 text-center space-y-3">
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Your Body Mass Index</span>
                <div className="text-6xl font-black text-white">{bmi}</div>
                <div className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border ${categoryColor}`}>
                  {category}
                </div>

                {/* Meter Bar */}
                <div className="pt-3">
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#CCFF00] via-amber-400 to-red-500 transition-all duration-500"
                      style={{ width: `${gaugePercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-zinc-400 font-bold">Ideal Weight Target</div>
                  <div className="text-lg font-black text-white mt-1">
                    {minIdealWeight} kg – {maxIdealWeight} kg
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-zinc-400 font-bold">Daily Maintenance</div>
                  <div className="text-lg font-black text-[#CCFF00] mt-1">
                    {dailyCalories} kcal
                  </div>
                </div>
              </div>

              {/* Advice */}
              <div className="p-4 rounded-2xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-xs text-zinc-300 space-y-1">
                <span className="font-bold text-[#CCFF00] block uppercase tracking-wider">Coach Recommendation:</span>
                <p>{advice}</p>
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(whatsappReportMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 min-h-[48px] rounded-2xl bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#CCFF00]/20 transition-all active:scale-95 hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                Send Report to Coach on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
