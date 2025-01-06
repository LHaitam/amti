import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { motion } from "framer-motion";

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
    const timelineItemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2, // Décalage pour chaque élément
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section id="history" className="section-wrapper text-black">
            <SectionHeader title="Notre&nbsp;Historique" dir="l" />
            <ul className="relative border-l-4 border-[#2591c2] max-w-2xl mx-auto">
                {historiqueData.map((item, index) => (
                    <motion.li
                        key={index}
                        className="mb-10 ml-4 relative pl-8 pb-8 last:pb-0"
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={timelineItemVariants}
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
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};
