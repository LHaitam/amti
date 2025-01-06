import React from "react";
import FlyoutNav from "./nav/Header"; // Si exporté par défaut
import Hero from "./hero/Hero";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Strength } from "./strength/strength";
import { Contact } from "./contact/Contact";
import { Products } from "./products/products";
import Footer from "./footer/Footer";

export const HomPage = () => {
  return (
    <div className="grid bg-white min-h-screen">
      <FlyoutNav />
      <main>
        <div className="space-y-32 pb-24">
          {/* Hero section with full width */}
          <div className="w-full min-h-screen z-10 bg-black bg-opacity-10">
            <Hero
              title={
                <>
                  <span className="text-[#2a3b8d]">ALFA MAROC TECH</span>
                  <span className="text-[#1b7cc1]">&nbsp;INDUSTRIE</span>
                </>
              }
              subtitle={
                <>
                  Souverainetés industrielle{" "}
                  <span className="font-semibold text-[#2591c2]">marocaine</span>
                </>
              }
              buttonText="Découvrez notre catalogue"
              buttonLink="/catalogue.pdf"
              bgVideo="/bg.mp4"
            />          </div>
          {/* Rest of the content */}
          <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32">
            <About />
            <Strength />
            <Products />
            <Projects />
            {/* <Contact /> */}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
