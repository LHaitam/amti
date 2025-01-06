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

export const InnovationSection: React.FC = () => {
  return (
    <section id="innovation" className="section-wrapper text-black ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Innovation" dir="r" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          <span className="font-bold text-[#2591c2]">AMTI</span> place
          l&apos;innovation au cœur de ses activités. En investissant dans la
          recherche et le développement, nous créons des solutions qui répondent
          aux besoins des professionnels de santé tout en anticipant les défis de
          demain.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Image à gauche */}
          <motion.div
            className="relative"
            variants={fadeInVariants}
          >
            <div className="mb-12">
              <img
                src="/str.jpg"
                alt="Innovation chez AMTI"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Texte à droite */}
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Produits Innovants
              </h3>
            </motion.div>
            <motion.p
              className="leading-relaxed text-black"
              variants={fadeInVariants}
            >
              <span className="font-bold text-[#2591c2]">- Lits d&apos;hôpitaux avancés :</span> conçus pour offrir confort et
              praticité.
              <br />
              <span className="font-bold text-[#2591c2]">- Chariots médicaux ergonomiques :</span> répondant aux normes
              internationales et aux exigences des professionnels de santé.
              <br />
              <span className="font-bold text-[#2591c2]">- Tables opératoires en inox :</span> intégrant des fonctionnalités
              modernes et robustes.
            </motion.p>

            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Investissements en Recherche et Développement
              </h3>
            </motion.div>
            <motion.p
              className="leading-relaxed text-black"
              variants={fadeInVariants}
            >
              Nous déployons des ressources considérables pour explorer de
              nouvelles technologies et intégrer des innovations telles que
              l&apos;intelligence artificielle (IA) et l&apos;ergonomie avancée
              dans nos produits. Cet effort soutient notre objectif de fournir
              des solutions de pointe.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InnovationSection;
