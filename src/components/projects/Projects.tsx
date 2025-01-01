import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
import { AiOutlineArrowRight } from "react-icons/ai";
import Reveal from "../util/Reveal";

export const Projects = () => {
  return (
    <section className="section-wrapper text-black" id="projects">
      <SectionHeader title="Nos&nbsp;Grand&nbsp;Projets" dir="l" />
      <Reveal>
        <p className="text-center text-justify text-zinc-600 mb-12 leading-relaxed">
        <span className="bg-[#2591c2] text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                AMTI
              </span> est fier de contribuer à des projets médicaux d'envergure à travers le Maroc.
          Grâce à notre expertise et nos solutions innovantes, nous avons collaboré avec des institutions prestigieuses pour améliorer les infrastructures
          et les services de santé dans différentes régions. Découvrez nos projets les plus marquants.
        </p>
      </Reveal>
      <div className="grid gap-12 grid-cols-1 mb-12 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
      <Reveal>
        <div className="flex justify-center items-center">
          <a
            href="/#"
            className="text-sm text-[#2591c2] flex items-center gap-2 font-semibold hover:text-[#1066af] transition"
          >
            En savoir plus <AiOutlineArrowRight />
          </a>
        </div>
      </Reveal>

    </section>
  );
};

const projects = [
  {
    title: "Centre Régional d'Oncologie - Beni Mellal",
    imgSrc: "projet.jpg",
    description:
      "Un projet clé visant à améliorer l'accès aux soins pour les patients atteints de cancer grâce à des équipements médicaux innovants.",
      modalContent: (
        <>
          <p>
            Le Centre Régional d'Oncologie de Beni Mellal a été conçu pour
            répondre aux besoins des patients atteints de cancer. AMTI a fourni
            des équipements médicaux modernes pour assurer des traitements de
            qualité.
          </p>
        </>
      ),
  },
  {
    title: "Hôpital Universitaire International Cheikh Khalifa",
    imgSrc: "projet1.jpg",
    description:
      "Aménagement des départements avec des dispositifs médicaux répondant aux standards internationaux à Casablanca.",
      modalContent: (
        <>
          <p>
            Situé à Casablanca, cet hôpital est une référence en matière de soins
            médicaux. AMTI a collaboré pour fournir des dispositifs médicaux
            modernes et adaptés aux besoins des patients.
          </p>
        </>
      ),
  },
  {
    title: "Clinique Internationale de Mohammedia",
    imgSrc: "projet2.jpg",
    description:
      "Renforcement des capacités de la clinique avec des solutions médicales modernes et innovantes adaptées à ses besoins spécifiques.",
      modalContent: (
        <>
          <p>
            AMTI a contribué à moderniser les infrastructures de la Clinique
            Internationale de Mohammedia en fournissant des équipements médicaux
            de haute performance.
          </p>
        </>
      ),
  },
  {
    title: "Clinique de Spécialités de Safi",
    imgSrc: "projet3.jpg",
    description:
      "Fourniture d'équipements spécialisés pour améliorer les soins et le confort des patients de la région de Safi.",
      modalContent: (
        <>
          <p>
            Ce projet visait à offrir des services spécialisés de santé à Safi.
            AMTI a fourni des équipements adaptés pour garantir des soins de
            qualité aux patients.
          </p>
        </>
      ),
  },
];
