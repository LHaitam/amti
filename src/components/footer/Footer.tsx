import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-200 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and Contact */}
          <div className="space-y-4 text-center md:text-left md:w-1/3">
            <img
              src="/logo.png"
              alt="AMTI Logo"
              className="h-20 mx-auto md:mx-0"
            />
            <p className="text-sm font-bold">
              Tel :{" "}
              <Link href="tel:+212522539011" className="text-zinc-200 font-bold hover:text-[#2591c2] transition">
                +212 5 22 53 90 11
              </Link>{" "}
              /{" "}
              <Link href="tel:+212661311229" className="text-zinc-200 font-bold hover:text-[#2591c2] transition">
                +212 6 61 31 12 29
              </Link>
            </p>
            <p className="text-sm font-bold ">
              E-mail :{" "}
              <Link
                href="mailto:contact@amti.ma"
                className="text-zinc-200 font-bold hover:text-[#2591c2] transition"
              >
                contact@amti.ma
              </Link>
            </p>
            <p className="text-sm font-bold">
              Adresse : Aéropôle de l'Aéroport Med V, <br />27000 Nouasseur,
              Maroc
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-center md:text-left">
            <div>
              <h4 className="font-bold text-lg mb-3 text-zinc-200">EN SAVOIR PLUS</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Qui sommes-nous
                  </Link>
                </li>
                <li>
                  <Link
                    href="/strengths"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Nos forces
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Nos produits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Nos grands projets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-zinc-200">NOUS REJOINDRE</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Formulaire de contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-zinc-200">
                INFORMATIONS LEGALES
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Conditions générales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm">
          <p className="bg-gradient-to-r from-[#2591c2] via-[#196587] to-[#003D79] bg-clip-text text-transparent font-bold">
            © {new Date().getFullYear()}{" "}
            <span className="text-zinc-200">AMTI</span>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
