import React from "react";
import { SideBar } from "./nav/SideBar";
import FlyoutNav from "./nav/Header"; // Si exporté par défaut
import Hero from "./hero/Hero";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Strength } from "./strength/strength";
import { Contact } from "./contact/Contact";
import { Products } from "./products/products";
import BasicFAQ from "./faq/BasicFAQ";

export const HomPage = () => {
  return (
    <div className="grid bg-white min-h-screen">
      <FlyoutNav />
      <main>
        <div className="space-y-32 pb-24">
          {/* Hero section with full width */}
          <div className="w-full min-h-screen z-10 bg-black bg-opacity-50">
            <Hero />
          </div>
          {/* Rest of the content */}
          <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32">
            <About />
            <Strength />
            <Products />
            <BasicFAQ />
            {/* <Projects />
            <Experience />
            <Contact /> */}
          </div>
        </div>
      </main>
    </div>
  );
};
