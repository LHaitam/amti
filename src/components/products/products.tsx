import Reveal from "../util/Reveal";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import { motion } from "framer-motion";

export const Products = () => {
  const gridItems = [
    {
      title: "Chariots Médicaux",
      description: "Ergonomiques et adaptés aux besoins des professionnels.",
      image: "/prd.jpg",
    },
    {
      title: "Lits Médicaux",
      description:
        "Confortables, durables et conçus pour répondre aux normes médicales.",
      image: "/prd1.jpg",
    },
    {
      title: "Tables Opératoires",
      description:
        "Robustes et conçues pour les environnements exigeants.",
      image: "/prd2.jpg",
    },
    {
      title: "Accessoires Médicaux",
      description: "Une gamme complète pour vos besoins spécifiques.",
      image: "/prd3.jpg",
    },
  ];

  return (
    <section id="products" className="py-16 text-black">
      <SectionHeader title="Nos&nbsp;Produits" dir="l" />
      <div className="container mx-auto px-4">
        <Reveal>
          <p className="text-center text-justify text-zinc-600 mb-12 leading-relaxed">
            Chez <span className="font-bold text-[#2591c2]">AMTI</span>, nous proposons
            une gamme variée de produits médicaux, allant des chariots et lits médicaux
            aux tables opératoires et accessoires spécialisés. En tant qu'entreprise
            industrielle, notre expertise nous permet également de concevoir des solutions
            sur mesure adaptées à vos besoins spécifiques, même hors catalogue.
          </p>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {gridItems.map((item, index) => (
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
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Details on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-300 text-center px-4">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="flex justify-center items-center">
            <a
              href="/products"
              className="text-sm text-[#2591c2] flex items-center gap-2 font-semibold hover:text-[#1066af] transition"
            >
              En savoir plus <AiOutlineArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
