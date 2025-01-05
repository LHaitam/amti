import React from "react";
import { IntroductionSection } from "../components/about/IntroductionSection";
import FlyoutNav from "../components/nav/Header"; // Si exporté par défaut
import Hero from "../components/hero/Hero";
import { HistoriqueSection } from "../components/about/HistoriqueSection";
import { ChiffresClesSection } from "../components/about/ChiffresClesSection";
import { NotreMissionSection } from "../components/about/NotreMissionSection";
import { NosValeursSection } from "../components/about/NosValeursSection";
import { Contact } from "../components/contact/Contact";
import { Products } from "../components/products/products";
import BasicFAQ from "../components/faq/BasicFAQ";

const AboutPage: React.FC = () => {
  return (
    <div className="grid bg-white min-h-screen">
      {/* <FlyoutNav /> */}
      <main>
        <div className="space-y-32 pb-24">
          {/* Rest of the content */}
          <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32">
          <IntroductionSection />
          <HistoriqueSection />
          <ChiffresClesSection />
          <NotreMissionSection />
          <NosValeursSection/>
            {/* <About />
            <Strength />
            <Products />
            <Projects />
            <Experience />
            <Contact /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
