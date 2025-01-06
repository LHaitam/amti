import React from "react";
import FlyoutNav from "../components/nav/Header"; // Si exporté par défaut
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import { LocalManufacturingSection } from "../components/strength/LocalManufacturingSection";
import { InnovationSection } from "../components/strength/InnovationSection";
import { ReliabilitySection } from "../components/strength/ReliabilitySection";
import { CustomizationSection } from "../components/strength/CustomizationSection";
import { SustainabilitySection } from "../components/strength/SustainabilitySection";
import { TrainingSection } from "../components/strength/TrainingSection";
import { GlobalVisionSection } from "../components/strength/GlobalVisionSection";

const StrengthsPage: React.FC = () => {
  return (
    <div className="grid bg-white min-h-screen">
      <FlyoutNav />
      <main>
        <div className="space-y-32 pb-24">
          {/* Hero Section */}
          <div className="w-full min-h-screen z-10 bg-black bg-opacity-10">
            <Hero
              title="Les forces d'AMTI"
              subtitle="Excellence, innovation et engagement vers un avenir durable"
              buttonText="Découvrir nos forces"
              buttonLink="#local-manufacturing"
              bgVideo="/bg.mp4"
              overlayOpacity="bg-black/60"
            />
          </div>

          {/* Rest of the content */}
          <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32">
            <LocalManufacturingSection />
            <InnovationSection />
            <ReliabilitySection />
            <CustomizationSection />
            <SustainabilitySection />
            <TrainingSection />
            <GlobalVisionSection />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default StrengthsPage;
