import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { Company } from "./Company";
import Link from "next/link";

export const About = () => {
  return (
    <section id="about" className="section-wrapper text-black">
      <SectionHeader title="À&nbsp;Propos" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-black">
            <span className="font-bold text-[#2591c2]">AMTI</span>
              , pionnier marocain dans la fabrication d&apos;équipements médicaux de
              pointe, transforme le paysage médical depuis 2020. En réponse à la
              pandémie de COVID-19, nous avons établi des standards d&apos;excellence
              dans le secteur.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-black">
              En combinant innovation technologique et savoir-faire local, nous
              proposons une gamme complète d&apos;équipements, incluant des chariots
              médicaux ergonomiques et des tables opératoires en inox. Notre mission :
              offrir des solutions fiables et durables.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-black">
              Avec une équipe passionnée et des infrastructures modernes, AMTI
              continue d&apos;innover pour répondre aux besoins des professionnels de
              santé. Découvrez notre impact en cliquant sur le lien ci-dessous.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-[#2591c2]">
              <Link href="/about">En savoir plus </Link>
              <AiOutlineArrowRight />
              </div>
            </div>
          </Reveal>
        </div>
        <Company />
      </div>
    </section>
  );
};
