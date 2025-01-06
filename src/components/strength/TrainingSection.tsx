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

export const TrainingSection: React.FC = () => {
  return (
    <section id="training" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Formation&nbsp;&&nbsp;Accompagnement" dir="r" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          Chez <span className="font-bold text-[#2591c2]">AMTI</span>, nous
          comprenons que la réussite de nos solutions passe par une utilisation
          optimale de nos équipements. C&apos;est pourquoi nous offrons une
          formation complète et un accompagnement personnalisé à nos clients et
          partenaires.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Image à gauche */}
          <div className="relative">
            <motion.div className="mb-12" variants={fadeInVariants}>
              <img
                src="/str6.jpg"
                alt="Formation chez AMTI"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
          {/* Points-clés à droite */}
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Formation des Équipes
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Nous assurons des formations sur mesure pour garantir une prise
                en main rapide et efficace de nos équipements. Ces formations
                incluent des démonstrations pratiques et des sessions
                d&apos;apprentissage adaptées aux besoins de nos clients.
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Support Technique et Fonctionnel
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Nos équipes restent disponibles pour offrir un support continu
                et résoudre les problématiques rencontrées. Nous travaillons en
                étroite collaboration avec nos clients pour garantir leur
                satisfaction à chaque étape.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrainingSection;
