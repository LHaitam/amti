import Reveal from "../util/Reveal";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="relative text-slat-100 overflow-hidden min-h-screen flex items-center">
      {/* Content */}
      <div className="relative z-10 mx-auto px-4 md:px-8">
        <Reveal>
          <h1 className="pointer-events-auto font-bold text-6xl sm:text-6xl font-black text-zinc-100 md:text-7xl">
            <span
              className="text-[#2a3b8d]"
              style={{
                // textShadow: "0 0 .5px white, 0 0 .5px white",
              }}
            >
              ALFA MAROC TECH
            </span>
            <span
              className="text-[#1b7cc1]"
              style={{
                // textShadow: "0 0 .5px white, 0 0 .5px white",
              }}
            >
              &nbsp;INDUSTRIE
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <h2
            className="pointer-events-auto text-3xl sm:text-2xl text-white md:my-6 md:text-4xl"
            style={{
              // textShadow: "0 0 .5px white, 0 0 .5px white",
            }}
          >
            Souverainetés industrielle{" "}
            <span
              className="font-semibold text-[#2591c2]"
              style={{
                // textShadow: "0 0 .5px white, 0 0 .5px white",
              }}
            >
              marocaine
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
