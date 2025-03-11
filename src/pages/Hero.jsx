import { useState, useEffect } from "react";
import profilepic from "../assets/profilepic5.jpg";
import cvFile from "../assets/cv.pdf";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiEnvelope } from "react-icons/hi2";

const Hero = () => {
  const [showDownload, setShowDownload] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  // S'exécute uniquement côté client
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleShowCV = () => {
    if (isBrowser) {
      window.open(cvFile, "_blank");
      setShowDownload(true);
    }
  };
  

  return (
    <header className="pt-32 pb-16 bg-gradient-to-br from-white to-indigo-100">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texte et boutons */}
          <div className="order-2 space-y-6 lg:order-1">
            <div className="inline-block px-4 py-1 mb-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
              Développeur Web & application
            </div>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Hello, I&apos;m <span className="text-indigo-600">Léa</span>
            </h1>

            <h2 className="max-w-lg text-xl text-gray-600 md:text-2xl">
              Junior enthousiaste, prête à coder l&apos;avenir.
            </h2>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button
                onClick={handleShowCV}
                className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white transition-all bg-indigo-600 rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Voir mon CV
              </button>

              <a
                href="/projets"
                className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-indigo-600 transition-all bg-white border border-indigo-200 rounded-full hover:bg-indigo-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
                Découvrir mes projets
              </a>
            </div>

            {showDownload && (
              <button className="flex items-center gap-2 mt-4 font-medium text-indigo-600 transition-colors hover:text-indigo-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>
                Télécharger mon CV
              </button>
            )}

            <div className="flex flex-wrap justify-start gap-6 mt-8 ">
              <a href="https://www.linkedin.com/in/lea-bouillot-developpeur-web/"
               target="_blank"
               rel="noopener noreferrer">
                <AiFillLinkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a href="https://github.com/LeaBouillot"
               target="_blank"
               rel="noopener noreferrer">
                <AiFillGithub className="w-5 h-5 text-gray-600" />
              </a>
              <a href="mailto:leadreamcoder@gmail.com"
               target="_blank"
               rel="noopener noreferrer">
                <HiEnvelope className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Image de profil */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 transform -translate-x-10 translate-y-10 bg-indigo-200 rounded-full -z-10 blur-3xl opacity-30"></div>
              <img
                src={profilepic}
                alt="Profile de Léa"
                className="object-cover w-full h-auto shadow-xl aspect-square rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
