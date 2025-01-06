import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

export const CustomizationSection: React.FC = () => {
  return (
    <section id="customization" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Personnalisation&nbsp;&&nbsp;Adaptabilité" dir="r" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          <span className="font-bold text-[#2591c2]">AMTI</span> se distingue par
          sa capacité à offrir des solutions personnalisées pour répondre aux
          besoins uniques de ses clients. Grâce à notre expertise, nous
          adaptons nos équipements médicaux aux exigences spécifiques des
          établissements de santé.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Image à gauche */}
          <div className="relative">
            <motion.div className="mb-12" variants={fadeInVariants}>
              <img
                src="/str4.jpg"
                alt="Personnalisation chez AMTI"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
          {/* Points clés à droite */}
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Conception sur mesure
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Que ce soit pour des chariots médicaux, des tables opératoires
                ou des supports en inox, nos produits peuvent être adaptés en
                fonction des spécifications techniques et opérationnelles de nos
                clients.
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Flexibilité et Réactivité
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Notre équipe travaille en étroite collaboration avec nos clients
                pour identifier leurs besoins et proposer des solutions rapides
                et adaptées. Nous nous engageons à fournir des équipements sur
                mesure tout en respectant les délais.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CustomizationSection;
