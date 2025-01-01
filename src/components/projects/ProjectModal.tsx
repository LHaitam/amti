import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineArrowRight, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/50 backdrop-blur overflow-y-scroll flex justify-center cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <button className="absolute top-4 md:top-6 text-xl right-4">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-zinc-900 shadow-lg cursor-auto"
      >
        <img
          className="w-full"
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className="p-8">
          <h4 className="text-3xl font-bold mb-2">{title}</h4>

          <div className="space-y-4 my-6 leading-relaxed text-sm text-zinc-300">
            {modalContent}
          </div>

          <div className="flex items-center gap-4 text-sm text-[#2591c2]">
            <span>En savoir plus </span>
            <AiOutlineArrowRight />
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
