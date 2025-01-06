import Reveal from "../util/Reveal";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import { motion } from "framer-motion";
import Link from "next/link";

export const Products = () => {
  const projectCategories = [
    {
      title: "Cabinets Médicaux",
      description: "Des solutions adaptées aux besoins des professionnels.",
      image: "/cabinet.jpg",
    },
    {
      title: "Hôpitaux",
      description: "Une expertise complète pour les grandes infrastructures.",
      image: "/hopital.jpg",
    },
    {
      title: "Cliniques Privées",
      description: "Des équipements modernes et sur mesure.",
      image: "/clinique.jpg",
    },
    {
      title: "Centres de Santé",
      description: "Un accompagnement optimal pour les projets communautaires.",
      image: "/centre.jpg",
    },
  ];

  return (
    <section id="projects" className="text-black">
      <SectionHeader title="Accompagnement&nbsp;Sur&nbsp;Mesure" dir="l" />
      <div className="container mx-auto px-4">
        <Reveal>
          <p className="text-center text-justify text-black mb-12 leading-relaxed">
            <span className="font-bold text-[#2591c2]">AMTI</span>, fort de son expertise industrielle, accompagne vos projets d&apos;installation sur mesure. Que vous soyez un cabinet médical, un hôpital, une clinique privée ou un centre de santé, nous vous proposons des solutions adaptées à vos besoins spécifiques, avec un accompagnement complet de la conception à l&apos;installation.
          </p>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {projectCategories.map((category, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Details on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-sm text-zinc-300 text-center px-4">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="flex justify-center items-center">
            <Link
              href="/projects"
              className="text-sm text-[#2591c2] flex items-center gap-2  hover:text-[#1066af] transition"
            >
              En savoir plus <AiOutlineArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
