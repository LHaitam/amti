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

export const LocalManufacturingSection: React.FC = () => {
  return (
    <section id="local-manufacturing" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Souveraineté&nbsp;Marocaine" dir="l" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          <span className="font-bold text-[#2591c2]">AMTI </span>
          s&apos;engage à promouvoir la souveraineté industrielle marocaine à travers une fabrication
          locale de qualité. En combinant technologies de pointe et savoir-faire local, notre objectif
          est de contribuer significativement à l&apos;économie nationale tout en répondant aux besoins
          spécifiques du secteur médical. Chaque étape de notre production reflète notre détermination
          à offrir des solutions fiables et adaptées.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">Impact Économique</h3>
            </motion.div>
            <motion.p className="leading-relaxed text-black" variants={fadeInVariants}>
              En favorisant la production locale, <span className="font-bold text-[#2591c2]">AMTI</span>{" "}
              génère des opportunités d&apos;emploi et stimule le développement économique du Maroc. Nos
              produits, conçus pour le marché national tout en respectant les normes internationales,
              jouent un rôle clé dans le soutien des infrastructures locales.
            </motion.p>

            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">Qualité et Fiabilité</h3>
            </motion.div>
            <motion.p className="leading-relaxed text-black" variants={fadeInVariants}>
              Chaque produit issu de nos installations fait l&apos;objet de contrôles de qualité
              rigoureux. Grâce à nos technologies avancées et notre expertise industrielle, nous
              offrons des dispositifs médicaux durables qui répondent aux attentes des professionnels
              de santé.
            </motion.p>
          </div>
          <motion.div
            className="relative"
            variants={fadeInVariants}
          >
            <div className="mb-12">
              <img
                src="/str2.jpg"
                alt="Made in Morocco"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocalManufacturingSection;
