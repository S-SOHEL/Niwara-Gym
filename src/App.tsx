import React, { useState } from 'react';
import { SchemaMarkup } from './components/SchemaMarkup';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { GalleryLightbox } from './components/GalleryLightbox';
import { BMICalculator } from './components/BMICalculator';
import { Testimonials } from './components/Testimonials';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingCTAs } from './components/FloatingCTAs';
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 font-sans selection:bg-[#CCFF00] selection:text-black">
      {/* Schema Markup for Local Business SEO */}
      <SchemaMarkup />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenTrialModal={() => setTrialModalOpen(true)} />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 2. Services Section (6 Premium Service Cards) */}
        <Services onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 3. Gallery Section */}
        <GalleryLightbox />

        {/* 4. BMI Calculator Section */}
        <BMICalculator onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 5. Google Reviews Section */}
        <Testimonials />

        {/* 6. Contact Section */}
        <LocationContact />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating Action Buttons & Mobile Thumb Bar */}
      <FloatingCTAs onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* Free 1-Day VIP Pass Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />
    </div>
  );
}
