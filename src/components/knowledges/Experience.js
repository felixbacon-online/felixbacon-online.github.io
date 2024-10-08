import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h2>Expérience</h2>
      <div className="exp-1">
        <h3>Openclassrooms | formation développeur web junior </h3>
        <h4> 03/2022 - 11/2022 </h4>
        <ul>
          <li>Transformer une maquette en site web (html/css)</li>
          <li>Dynamiser une page web avec des animations css</li>
          <li>Optimiser un site web existant (SEO, WCAG)</li>
          <li>Construire un site e-commerce(html/css/javascript)</li>
          <li>Construire une API sécurisée (nodeJs, Express)</li>
          <li>
            {" "}
            Créer un réseau social d'entreprise (html/css/javascript/VueJS)
          </li>
        </ul>
      </div>
      <div className="exp-2">
        <h3>Cours d'Openclassrooms</h3>
        <h4> 04/2021 - 03/2022</h4>
        <ul>
          <li>
            Découper et intégrer une maquette, créer un site web responsive avec
            HTML5 et CSS3
          </li>
          <li>
            Découvrir le CSS avec Sass, créer des sites web responsive avec
            Bootstrap
          </li>
          <li>Programmer avec JavaScript, VueJs3, React...</li>
          <li> Utiliser Git et GitHub pour des projets de développement </li>
          <li> Créer un site moderne et professionnel avec WordPress 5, 6 </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
