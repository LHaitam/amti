import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import Reveal from "../util/Reveal";

interface Props {
  modalContent: JSX.Element;
  description: string;
  imgSrc: string;
  title: string;
}

export const Project = ({
  modalContent,
  description,
  imgSrc,
  title,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded"
          />
        </div>
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">
                {title}
              </h4>
              <div className="w-full h-[1px] bg-zinc-600" />

            </div>
          </Reveal>
          <Reveal>
            <p className="text-zinc-500 leading-relaxed">
              {description}{" "}
              <span
                className="inline-block text-sm text-[#2591c2] cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Lire la suite{">"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
      />
    </>
  );
};
