import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // Duration in milliseconds
    const increment = value / (duration / 50); // Increment step

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setDisplayValue(Math.floor(start));
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return <>{displayValue}</>;
};

export const ReliabilitySection: React.FC = () => {
  return (
    <section id="reliability" className="section-wrapper text-black bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Fiabilité&nbsp;&&nbsp;Performance" dir="l" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          Chez <span className="font-bold text-[#2591c2]">AMTI</span>, nous
          plaçons la fiabilité au centre de nos priorités. Nos produits et
          services répondent aux exigences les plus strictes, garantissant des
          performances optimales et une satisfaction client exceptionnelle à
          chaque étape.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 items-center">
          {/* KPI à gauche */}
          <div className="grid grid-rows-3 gap-4 h-[300px]">
            <motion.div
              className="bg-[#2591c2] text-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center"
              variants={fadeInVariants}
            >
              <p className="text-4xl font-bold mb-2">
                <AnimatedNumber value={98} />%
              </p>
              <p className="text-base text-center">Fiabilité des prestataires</p>
            </motion.div>
            <motion.div
              className="bg-[#196587] text-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center"
              variants={fadeInVariants}
            >
              <p className="text-4xl font-bold mb-2">
                <AnimatedNumber value={99} />%
              </p>
              <p className="text-base text-center">Taux de satisfaction client</p>
            </motion.div>
            <motion.div
              className="bg-[#2591c2] text-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center"
              variants={fadeInVariants}
            >
              <p className="text-4xl font-bold mb-2">
                <AnimatedNumber value={2} />%
              </p>
              <p className="text-base text-center">Taux de retards opérationnels</p>
            </motion.div>
          </div>
          {/* Image à droite */}
          <div className="relative h-[300px]">
            <motion.div className="h-full" variants={fadeInVariants}>
              <img
                src="/str1.jpg"
                alt="Fiabilité AMTI"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReliabilitySection;
