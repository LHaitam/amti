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

export const GlobalVisionSection: React.FC = () => {
  return (
    <section id="global-vision" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Une&nbsp;Vision&nbsp;Internationale" dir="l" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          <span className="font-bold text-[#2591c2]">AMTI</span> ne se limite
          pas au marché national. Forts de notre expertise et de la qualité de
          nos produits, nous nous engageons à étendre notre rayonnement à
          l&apos;international. L&apos;Afrique reste une priorité stratégique, mais
          nous visons également à répondre aux besoins des systèmes de santé
          dans d&apos;autres régions du monde.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          {/* Points-clés à gauche */}
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Une Priorité : l&apos;Afrique
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Grâce à notre proximité culturelle et géographique, nous avons
                établi des bases solides pour soutenir les systèmes de santé
                africains. Nos produits fiables et innovants sont conçus pour
                répondre aux besoins spécifiques du continent, tout en renforçant
                les infrastructures médicales locales.
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Une Ambition Globale
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Notre vision dépasse les frontières. Nous visons à collaborer
                avec des institutions de santé à l&apos;échelle internationale, en
                apportant notre expertise et nos solutions pour contribuer à
                l&apos;amélioration des soins de santé à travers le monde.
              </p>
            </motion.div>
          </div>
          {/* Image à droite */}
          <div className="relative">
            <motion.div className="mb-12" variants={fadeInVariants}>
              <img
                src="/str7.jpg"
                alt="Vision internationale d'AMTI"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GlobalVisionSection;
