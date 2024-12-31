import Reveal from "../util/Reveal";
import Link from "next/link";

export const Strengths = () => {
  return (
    <div className="relative">
      <Reveal>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 mb-12">
          {/* Ligne 1 */}
          <Link
            href="/"
            className="bg-gray-300 aspect-square flex items-center justify-center transition-all hover:bg-[#2591c2] hover:grayscale hover:brightness-90 rounded-lg"
          >
            <img
              src="/str.jpg"
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
          <div className="bg-[#012946] aspect-square"></div>
          <Link
            href="/"
            className="bg-gray-300 aspect-square flex items-center justify-center transition-all hover:bg-[#2591c2] hover:grayscale hover:brightness-90 rounded-lg"
          >
            <img
              src="/str1.jpg"
              alt="Image 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>

          {/* Ligne 2 */}
          <div className="bg-[#012946] aspect-square"></div>
          <Link
            href="/"
            className="bg-gray-300 aspect-square flex items-center justify-center transition-all hover:bg-[#2591c2] hover:grayscale hover:brightness-90 rounded-lg"
          >
            <img
              src="/logo.jpg"
              alt="Image 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
          <div className="bg-[#012946] aspect-square"></div>

          {/* Ligne 3 */}
          <Link
            href="/"
            className="bg-gray-300 aspect-square flex items-center justify-center transition-all hover:bg-[#2591c2] hover:grayscale hover:brightness-90 rounded-lg"
          >
            <img
              src="/str2.jpg"
              alt="Image 4"
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
          <div className="bg-[#012946] aspect-square"></div>
          <Link
            href="/"
            className="bg-gray-300 aspect-square flex items-center justify-center transition-all hover:bg-[#2591c2] hover:grayscale hover:brightness-90 rounded-lg"
          >
            <img
              src="/str3.jpg"
              alt="Image 5"
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
        </div>
      </Reveal>
    </div>
  );
};
