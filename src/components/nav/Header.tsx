import Link from "next/link";
import React from "react";
import { SiLinkedin, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      {/* <MyLinks /> */}
      <div className="flex-shrink-0">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Logo AMTI"
            className="w-20 h-auto mx-auto"
          />
        </Link>
      </div>
      <OutlineButton onClick={() => window.open("/catalogue.pdf")}>
        Notre Catalogue
      </OutlineButton>
    </header>
  );
};

// export const MyLinks = () => (
//   <div className="flex items-center text-lg gap-4">
//     <Link
//       className="text-zinc-300 hover:text-[#2591c2] transition-colors"
//       href="https://www.linkedin.com"
//       target="_blank"
//       rel="nofollow"
//     >
//       <SiLinkedin />
//     </Link>
//     <Link
//       className="text-zinc-300 hover:text-[#2591c2] transition-colors"
//       href="https://www.instagram.com"
//       target="_blank"
//       rel="nofollow"
//     >
//       <SiInstagram />
//     </Link>
//     <Link
//       className="text-zinc-300 hover:text-[#2591c2] transition-colors"
//       href="https://www.facebook.com"
//       target="_blank"
//       rel="nofollow"
//     >
//       <SiFacebook />
//     </Link>
//     <Link
//       className="text-zinc-300 hover:text-[#2591c2] transition-colors"
//       href="https://www.youtube.com"
//       target="_blank"
//       rel="nofollow"
//     >
//       <SiYoutube />
//     </Link>
//   </div>
// );
