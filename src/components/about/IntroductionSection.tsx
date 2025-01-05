import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

export const IntroductionSection: React.FC = () => {
  return (
    <section id="about" className="section-wrapper text-black">
      <SectionHeader title="À&nbsp;Propos" dir="l" />
      <Reveal>
        <p className="leading-relaxed text-black">
        <span className="font-bold text-[#2591c2]">AMTI </span>
          (Alfa Maroc Tech Industrie) est une entreprise marocaine spécialisée
          dans la fabrication, importation, exportation, maintenance et distribution
          de dispositifs médicaux de haute qualité. Fondée en 2020, elle se distingue
          par son engagement envers l&apos;innovation et la production locale, tout
          en répondant aux besoins de ses clients avec des solutions fiables.
        </p>
      </Reveal>
    </section>
  );
};
