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

export const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Développement&nbsp;Durable" dir="l" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          Chez <span className="font-bold text-[#2591c2]">AMTI</span>, nous
          plaçons la durabilité au cœur de nos opérations. Notre engagement
          envers l&apos;environnement se reflète dans nos processus de
          fabrication, nos matériaux, et notre approche responsable pour un
          avenir plus durable.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          {/* Points clés à gauche */}
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Matériaux Écologiques
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Nous utilisons de l&apos;inox recyclable pour nos équipements
                médicaux, garantissant non seulement la qualité mais aussi une
                empreinte écologique réduite.
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Processus de Fabrication Responsable
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Nos installations de production optimisent l&apos;utilisation des
                ressources pour minimiser les déchets et réduire les émissions de
                carbone, tout en maintenant les normes de qualité les plus
                élevées.
              </p>
            </motion.div>
          </div>
          {/* Image à droite */}
          <div className="relative">
            <motion.div className="mb-12" variants={fadeInVariants}>
              <img
                src="/str5.jpg"
                alt="Développement durable chez AMTI"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SustainabilitySection;
