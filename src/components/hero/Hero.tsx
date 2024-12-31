import Reveal from "../util/Reveal";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="relative text-slat-100 overflow-hidden min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto  px-4 md:px-8">
        <Reveal>
          <h1 className="pointer-events-auto text-6xl sm:text-6xl font-black text-zinc-100 md:text-8xl">
            <span className="text-[#2591c2]"> Amti</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="pointer-events-auto  text-3xl sm:text-2xl text-zinc-300 md:my-6 md:text-4xl">
            L&apos;innovation médicale,{" "}
            <span className="font-semibold text-[#2591c2]">
              Made in Morocco
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <OutlineButton
            onClick={() => window.open("/catalogue.pdf")}
            className="pointer-events-auto px-8 py-4  before:bg-[#1066af] hover:text-white hover:border-[#1066af] mt-6 md:mt-8 bg-[#2591c2] text-zinc-100 border-[#2591c2]"
          >
            Découvrez notre catalogue
          </OutlineButton>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
