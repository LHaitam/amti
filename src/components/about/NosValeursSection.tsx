import React, { useState } from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

const valeursData = [
  {
    title: "Engagement envers l'innovation",
    description:
      "AMTI se distingue par son effort constant pour développer des équipements médicaux innovants et adaptés aux besoins des professionnels de santé.",
    icon: "/str.jpg",
  },
  {
    title: "Qualité et Fiabilité",
    description:
      "La qualité est au cœur de leurs activités, avec des indicateurs tels que 98 % de fiabilité des prestataires et un taux de satisfaction client de 99 %.",
    icon: "/str1.jpg",
  },
  {
    title: "Production locale et Souveraineté industrielle",
    description:
      "L'entreprise valorise la fabrication locale, contribuant à renforcer l'économie marocaine et l'indépendance industrielle du pays.",
    icon: "/str2.jpg",
  },
  {
    title: "Orientation client",
    description:
      "AMTI place les besoins des professionnels de santé au centre de ses priorités, tout en offrant des solutions fiables et adaptées avec un taux de conversion des leads en clients de 90 %.",
    icon: "/str3.jpg",
  },
];

export const NosValeursSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="values" className="section-wrapper text-black">
      <SectionHeader title="Nos&nbsp;Valeurs" dir="l" />
      <Reveal>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl mx-auto mt-8 gap-8">
          {/* Partie Gauche */}
          <div className="flex-1 space-y-4">
            <p className="leading-relaxed text-black text-lg">
              <span className="font-bold text-2xl text-[#2591c2]">
                Des valeurs au cœur de notre mission :
              </span>
            </p>
            <p className="leading-relaxed text-black">
            <span className="font-bold text-[#2591c2]">AMTI </span>
              définit ses valeurs comme un socle fondamental qui guide ses actions au quotidien.
              Partagées par l&apos;ensemble des collaborateurs, ces valeurs assurent une cohésion au
              sein de l&apos;entreprise et renforcent ses relations avec ses clients, fournisseurs et
              partenaires. Elles incarnent l&apos;engagement d&apos;AMTI envers l&apos;innovation,
              la qualité et la fiabilité, tout en valorisant la production locale et la souveraineté
              industrielle du Maroc. En plaçant les besoins de ses clients au centre de ses priorités,
              AMTI construit chaque jour un modèle de développement durable et responsable, au service d&apos;une
              vision moderne, dynamique et engagée.
            </p>
          </div>

          {/* Partie Droite */}
          <div className="flex-1 grid grid-cols-2 gap-6 relative">
            {valeursData.map((valeur, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? "md:translate-y-4" : "md:-translate-y-4"}`}
              >
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={valeur.icon}
                    alt={valeur.title}
                    className="object-cover h-48 w-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    onClick={() => toggleAccordion(index)}
                  />
                </div>
                <div
                  className={`mt-2 p-4 text-black transition-all duration-300 overflow-hidden ${
                    activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-gray-700">{valeur.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
