import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

const historiqueData = [
    {
        year: "2020",
        title: "Fondation",
        description:
            "Fondation de la société AMTI en réponse à la pandémie de COVID-19.",
    },
    {
        year: "2021",
        title: "Développement",
        description:
            "Développement des équipements médicaux innovants et de haute qualité.",
    },
    {
        year: "2022",
        title: "Élargissement",
        description: "Élargissement de sa gamme de produits.",
    },
    {
        year: "2023",
        title: "Investissement",
        description:
            "Investissement dans la recherche pour développer des produits innovants, tels que des lits d'hôpitaux.",
    },
];

export const HistoriqueSection: React.FC = () => {
    return (
        <section id="history" className="section-wrapper text-black">
            <SectionHeader title="Notre&nbsp;Historique" dir="l" />
            <ul className="relative border-l-4 border-[#2591c2] max-w-2xl mx-auto">
                {historiqueData.map((item, index) => (
                    <li
                        key={index}
                        className="mb-10 ml-4 relative pl-8 pb-8 last:pb-0"
                    >
                        {/* Circle */}
                        <div className="absolute w-3 h-3 bg-[#2591c2] rounded-full top-0 left-[-9px]"></div>
                        {/* Year */}
                        <span className="absolute text-sm text-[#6c6d6d] top-0 left-[-110px] font-bold">
                            {item.year}
                        </span>
                        {/* Title */}
                        <h3 className="text-lg font-bold text-black">{item.title}</h3>
                        {/* Description */}
                        <p className="text-[#6c6d6d]">{item.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
