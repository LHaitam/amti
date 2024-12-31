import React from "react";
import { SideBar } from "./nav/SideBar";
import { Header } from "./nav/Header";
import Hero from "./hero/Hero";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Strength } from "./strength/strength";
import { Contact } from "./contact/Contact";
import { Products } from "./products/products";

export const HomPage = () => {
  return (
    <div className="grid ">
      <main>
        <Header />
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
            {/* <Projects />
            <Experience />
            <Contact /> */}
          </div>
        </div>
      </main>
    </div>
  );
};