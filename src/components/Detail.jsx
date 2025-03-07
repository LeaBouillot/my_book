import React from "react";
import { useParams, Link } from "react-router-dom";
import { listProjets } from "../api/listProjets";

const Detail = () => {
  // Utilisation de useParams() pour récupérer l'ID dynamique du projet dans l'URL
  const { id } = useParams(); // Modifier ici pour utiliser 'id' au lieu de 'projectId'
  
  // Obtenir les données du projet 
  const project = listProjets.find(proj => proj.id === parseInt(id)); // Utiliser parseInt pour convertir en nombre

  // Gestion du cas où le projet n'est pas trouvé
  if (!project) {
    return (
      <section className="min-h-screen py-24 text-center mt-11">
        <h1 className="text-4xl font-bold text-gray-900">Projet non trouvé</h1>
        <Link 
          to="/projets" 
          className="inline-block px-5 py-2 mt-6 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Retour aux projets
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-24 mt-11">
      {/* En-tête du projet */}
      <div className="container max-w-4xl px-20 py-10 mx-auto mb-20 text-center bg-gradient-to-br from-white to-indigo-100">
        <h3 className="mb-6 text-3xl font-bold text-gray-900 uppercase">{project.title}</h3>
        <p className="max-w-3xl mx-auto mb-12 text-gray-600">
          {project.summary}
        </p>
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 text-white transition-colors duration-300 bg-indigo-600 rounded-md font-xs hover:bg-indigo-700"
        >
          LIEN DU PROJET
        </a>
      </div>

      {/* Image du projet */}
      <div className="container max-w-4xl px-4 mx-auto mb-20">
        <div className="w-full overflow-hidden bg-gray-200 rounded-lg">
          <img
            src={project.img}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Description */}
      <div className="container max-w-4xl px-4 mx-auto mb-7">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Description</h2>
        <p className="text-gray-600">{project.desc}</p>
      </div>

      {/* Sections de contenu dynamiques */}
      {project.content && project.content.map((paragraph, index) => (
        <div key={index} className="container max-w-4xl px-4 mx-auto mb-7">
          <p className="text-gray-600">{paragraph}</p>
        </div>
      ))}

      {/* Technologies utilisées */}
      <div className="container max-w-4xl px-4 mx-auto mb-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Technologies Utilisées</h2>
        <div className="flex flex-wrap gap-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-6 py-2 text-gray-700 bg-gray-200 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Voir en direct et retour */}
      <div className="container max-w-4xl px-4 mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Voir en Direct</h2>
        <div className="flex justify-center gap-4">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            LIEN DU PROJET
          </a>
          <Link
            to="/projets"
            className="inline-block px-5 py-2 font-medium text-gray-700 transition-colors duration-300 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          >
            RETOUR
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Detail;