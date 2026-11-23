import React, { useState } from 'react';
import { GYM_CONFIG } from './config/gymConfig';
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
  const sections = GYM_CONFIG.sections || {};

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 font-sans selection:bg-[#CCFF00] selection:text-black">
      {/* Schema Markup for Local Business SEO / Portfolio Demo */}
      <SchemaMarkup />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenTrialModal={() => setTrialModalOpen(true)} />

      <main>
        {/* 1. Hero Section */}
        {sections.hero !== false && (
          <Hero onOpenTrialModal={() => setTrialModalOpen(true)} />
        )}

        {/* 2. Services Section (6 Premium Service Cards) */}
        {sections.services !== false && (
          <Services onOpenTrialModal={() => setTrialModalOpen(true)} />
        )}

        {/* 3. Gallery Section */}
        {sections.gallery !== false && (
          <GalleryLightbox />
        )}

        {/* 4. BMI Calculator Section */}
        {sections.bmiCalculator !== false && (
          <BMICalculator onOpenTrialModal={() => setTrialModalOpen(true)} />
        )}

        {/* 5. Google Reviews Section */}
        {sections.testimonials !== false && (
          <Testimonials />
        )}

        {/* 6. Contact Section */}
        {sections.contact !== false && (
          <LocationContact />
        )}
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
