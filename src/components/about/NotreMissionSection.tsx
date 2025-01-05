import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

export const NotreMissionSection: React.FC = () => {
  return (
    <section id="mission" className="section-wrapper text-black">
      <SectionHeader title="Notre&nbsp;Mission" dir="l" />
      <Reveal>
        <div className="max-w-5xl mx-auto">
          <p className="leading-relaxed text-black">
          <span className="font-bold text-[#2591c2]">AMTI</span>
            , pionnier marocain dans la fabrication de dispositifs médicaux,
            s&apos;engage à fournir des solutions fiables et adaptées aux
            besoins des professionnels de santé. Elle travaille chaque jour à
            améliorer les infrastructures médicales et à contribuer à une
            souveraineté industrielle renforcée.
          </p>
          <p className="mt-3 leading-relaxed text-black">
            Grâce à des équipements de haute qualité et un engagement constant
            envers l&apos;innovation, elle accompagne les acteurs de la santé
            pour offrir des soins optimaux et un meilleur confort aux patients.
          </p>
        </div>
      </Reveal>
    </section>
  );
};
