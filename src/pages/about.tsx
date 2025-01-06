import React from "react";
import { IntroductionSection } from "../components/about/IntroductionSection";
import FlyoutNav from "../components/nav/Header"; // Si exporté par défaut
import { HistoriqueSection } from "../components/about/HistoriqueSection";
import { ChiffresClesSection } from "../components/about/ChiffresClesSection";
import { NotreMissionSection } from "../components/about/NotreMissionSection";
import { NosValeursSection } from "../components/about/NosValeursSection";
import { NosReferencesSection } from "../components/about/NosReferencesSection";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";

const AboutPage: React.FC = () => {
  return (
    <div className="grid bg-white min-h-screen">
      <FlyoutNav />
      <main>
        <div className="space-y-32 pb-24">
          {/* Hero section with full width */}
          <div className="w-full min-h-screen z-10 bg-black bg-opacity-10">
            <Hero
              title="À propos de notre entreprise"
              subtitle="Engagés dans l'innovation et la qualité depuis 2020"
              buttonText="En savoir plus"
              buttonLink="#about"
              bgVideo="/bg.mp4"
              overlayOpacity="bg-black/60"
            />          </div>
          {/* Rest of the content */}
          <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32">
            <IntroductionSection />
            <HistoriqueSection />
            <ChiffresClesSection />
            <NotreMissionSection />
            <NosValeursSection />
            <NosReferencesSection />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;
