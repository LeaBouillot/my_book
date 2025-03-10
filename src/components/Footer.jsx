import React from "react";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-gray-200 bg-gray-900">
      <div className="max-w-[1240px] mx-auto px-6 py-10">
        {/* Section supérieure avec logo et liens */}
        <div className="grid grid-cols-1 gap-8 pb-8 mb-8 border-b border-gray-800 md:grid-cols-3">
          {/* Logo et description */}
          <div className="col-span-1">
            {/* Logo avec lien vers la page d'accueil */}
            <Link to="/" onClick={() => setActiveSection("Home")}>
              <h2 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text">
                Portfolio <span className="font-light">Léa</span>
              </h2>
            </Link>

            <p className="max-w-sm text-gray-400">
              Développeuse web passionnée, spécialisée dans la création
              d'expériences web modernes et responsives.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-medium text-white">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "Skills", "Projets", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 transition-colors hover:text-indigo-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-medium text-white">Contact</h3>
            <a
              href="mailto:leadreamcoder@gmail.com"
              className="flex items-center gap-2 mb-3 text-gray-400 transition-colors hover:text-indigo-300"
            >
              <AiOutlineMail className="text-lg" />
              leadreamcoder@gmail.com
            </a>

            {/* Réseaux sociaux */}
            <div className="flex mt-6 space-x-4">
              <a
                href="https://github.com/LeaBouillot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-indigo-700"
              >
                <AiOutlineGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/lea-bouillot-developpeur-web/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-indigo-700"
              >
                <AiOutlineLinkedin className="text-xl" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-indigo-700"
              >
                <AiOutlineTwitter className="text-xl" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Section inférieure avec copyright */}
        <div className="flex flex-col items-center justify-between pt-4 md:flex-row">
          <p className="mb-4 text-sm text-gray-500 md:mb-0">
            © {currentYear} Developed by Léa. All rights reserved.
          </p>
          <div className="text-sm text-gray-500">
            <a href="#" className="transition-colors hover:text-indigo-300">
              Mentions légales
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="transition-colors hover:text-indigo-300">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
