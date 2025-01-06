import React from "react";
import Reveal from "../util/Reveal";
import { OutlineButton } from "../buttons/OutlineButton";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  buttonText?: string;
  buttonLink?: string; // Anchor or internal link
  bgVideo?: string;
  overlayOpacity?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  bgVideo = "/bg.mp4",
  overlayOpacity = "bg-black/50",
}) => {
  const handleScroll = () => {
    if (buttonLink && buttonLink.startsWith("#")) {
      const element = document.querySelector(buttonLink);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative text-slat-100 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center">
        <Reveal>
          <h1 className="pointer-events-auto font-bold text-4xl sm:text-6xl font-black text-zinc-100 md:text-7xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal>
            <h2 className="pointer-events-auto text-xl sm:text-2xl text-white md:my-6 md:text-4xl mt-4">
              {subtitle}
            </h2>
          </Reveal>
        )}
        {buttonText && buttonLink && (
          <Reveal>
            <OutlineButton
              onClick={handleScroll}
              className="pointer-events-auto px-8 py-4 before:bg-[#1066af] hover:text-white hover:border-[#1066af] mt-6 md:mt-8 bg-[#2591c2] text-zinc-100 border-[#2591c2]"
            >
              {buttonText}
            </OutlineButton>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Hero;
