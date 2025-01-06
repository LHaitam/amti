import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { AiOutlineArrowDown } from "react-icons/ai";

const clientsData = [
    {
        name: "AKDITAL",
        hospitals: [
            "Hôpital Privé de Tanger",
            "Hôpital Privé de Salé",
            "Clinique Internationale de Mohammedia",
            "Hôpital privé Casablanca Ain Sebaa",
            "Clinique du Bien-Être Bouskoura",
            "Clinique de Spécialités de Safi",
        ],
        logo: "/cli.jpg",
    },
    {
        name: "Cheikh Khalifa",
        hospitals: ["Hôpital Universitaire International Cheikh Khalifa"],
        logo: "/cli1.jpg",
    },
    {
        name: "Oncologie et Diagnostic du Maroc",
        hospitals: [
            "Centre médical international de FES",
            "Centre régional d'oncologie de Béni Mellal",
        ],
        logo: "/cli2.jpg",
    },
];

export const NosReferencesSection: React.FC = () => {
    return (
        <section id="references" className="section-wrapper text-black">
            <SectionHeader title="Nos&nbsp;Références" dir="l" />
            <Reveal>
                <div className="max-w-6xl mx-auto space-y-6">
                    {/* Description */}
                    <p className="leading-relaxed text-lg text-black">
                        <span className="font-bold text-2xl text-[#2591c2]">
                            Un rayonnement national :
                        </span>
                    </p>
                    <p className="leading-relaxed text-black">
                        Depuis sa création, <span className="font-bold text-[#2591c2]">AMTI</span> a su établir un réseau de confiance avec des
                        partenaires et clients répartis sur tout le territoire marocain.
                        Notre engagement envers l&apos;innovation, la qualité, et la
                        satisfaction client nous a permis de collaborer avec des institutions
                        médicales de premier plan, des organisations internationales et des
                        cliniques privées. Ces partenariats reflètent notre ambition de
                        contribuer activement à l&apos;amélioration du système de santé au
                        Maroc.
                    </p>

                    {/* Nouveau paragraphe sur l'exportation */}
                    <p className="leading-relaxed text-lg text-black">
                        <span className="font-bold text-2xl text-[#2591c2]">
                            Une ambition internationale :
                        </span>
                    </p>
                    <p className="leading-relaxed text-black">
                        En plus de notre rayonnement national, 
                        <span className="font-bold text-[#2591c2]"> AMTI</span> s&apos;engage à 
                        étendre sa portée au-delà des frontières marocaines. Si l&apos;Afrique 
                        reste une priorité stratégique grâce à notre proximité culturelle et 
                        géographique, nous visons également à répondre aux besoins des systèmes 
                        de santé à l&apos;échelle internationale. Grâce à notre expertise et à 
                        la qualité de nos produits, notre ambition est de devenir un acteur clé 
                        dans le développement de la santé mondiale, en fournissant des dispositifs 
                        médicaux innovants et fiables.
                    </p>


                    <div className="flex items-center space-x-2 text-[#2591c2]">
                        <a
                            className="text-sm text-[#2591c2] flex items-center gap-2 font-semibold hover:text-[#1066af] transition mb-10">
                            Découvrez nos références
                            <AiOutlineArrowDown />
                        </a>
                    </div>

                    {/* Liste des clients */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clientsData.map((client, index) => (
                            <div
                                key={index}
                                className="text-center flex flex-col items-center space-y-4"
                            >
                                <div className="relative group">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-24 h-24 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                                <div className="text-center space-y-2">
                                    <p className="font-bold text-lg text-[#2591c2]">{client.name}</p>
                                    <ul className="text-sm text-gray-700 leading-relaxed">
                                        {client.hospitals.map((hospital, hospitalIndex) => (
                                            <li key={hospitalIndex}>{hospital}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

