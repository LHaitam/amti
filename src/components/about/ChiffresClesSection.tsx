import React, { useEffect, useState } from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

const chiffresData = [
  {
    value: 2,
    suffix: "%",
    description: "Taux de retards opérationnels.",
  },
  {
    value: 98,
    suffix: "%",
    description: "Fiabilité des prestataires",
  },
  {
    value: 88,
    suffix: "%",
    description: "Fluidité des opérations.",
  },
  {
    value: 99,
    suffix: "%",
    description: "Taux de satisfaction client.",
  },
  {
    value: 90,
    suffix: "%",
    description: "Taux de conversion des leads en clients.",
  },
];

const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({
  value,
  suffix = "",
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 4000; // Animation duration in milliseconds
    const increment = value / (duration / 50); // Increment step (every 50ms)

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setDisplayValue(Math.round(start));
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

export const ChiffresClesSection: React.FC = () => {
  return (
    <section id="key-figures" className="section-wrapper text-black">
      <SectionHeader title="Chiffres&nbsp;Clés" dir="l" />
      <Reveal>
        <p className="leading-relaxed text-black">
          <span className="font-bold text-[#2591c2]">AMTI</span>
          , depuis sa création, a su confirmer sa position en tant que leader
          marocain dans la fabrication de dispositifs médicaux. Grâce à son
          engagement envers l&apos;innovation, la qualité et la production
          locale,{" "}
          <span className="font-bold text-[#2591c2]">AMTI</span> est devenue un
          partenaire de confiance pour les professionnels de santé, tout en
          renforçant la souveraineté industrielle du Maroc. Nos chiffres clés
          témoignent de notre performance et de notre dévouement.
        </p>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-6 max-w-6xl mx-auto mt-8">
          {/* Ligne 1 */}
          <div className="bg-[#2591c2] text-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-bold mb-1">
              <AnimatedNumber value={chiffresData[0].value} suffix={chiffresData[0].suffix} />
            </p>
            <p className="text-base">{chiffresData[0].description}</p>
          </div>
          <div className="bg-[#196587] text-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-bold mb-1">
              <AnimatedNumber value={chiffresData[1].value} suffix={chiffresData[1].suffix} />
            </p>
            <p className="text-base">{chiffresData[1].description}</p>
          </div>
          <div className="bg-[#2591c2] text-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-bold mb-1">
              <AnimatedNumber value={chiffresData[2].value} suffix={chiffresData[2].suffix} />
            </p>
            <p className="text-base">{chiffresData[2].description}</p>
          </div>

          {/* Ligne 2 */}
          <div className="row-span-2 col-span-1 sm:col-span-2">
            <img
              src="/company.jpg"
              alt="Entreprise"
              className="w-full h-64 sm:h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="bg-[#196587] text-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-bold mb-1">
              <AnimatedNumber value={chiffresData[3].value} suffix={chiffresData[3].suffix} />
            </p>
            <p className="text-base">{chiffresData[3].description}</p>
          </div>

          {/* Ligne 3 */}
          <div className="bg-[#2591c2] text-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-bold mb-1">
              <AnimatedNumber value={chiffresData[4].value} suffix={chiffresData[4].suffix} />
            </p>
            <p className="text-base">{chiffresData[4].description}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
