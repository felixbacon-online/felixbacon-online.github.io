import React from "react";
import Navigation from "../components/Navigation";
//import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="home">
      {/* <Helmet>
        <title>Félix Bacon - Accueil</title>
        <meta
          name="description"
          content="Félix Bacon - Création de site Web - Développeur web - Webmaster - Télécharger CV - Toulouse"
        />
        <link rel="canonical" href="/" />
      </Helmet> */}
      <Navigation />
      <section className="homeContent">
        <div className="content">
          <h1>Félix Bacon - Création de sites web </h1>
          {/* <p class="h2">Création de sites web</p> */}
          <p class="h2">Développeur web</p>
          <p class="h3">Webmaster</p>

          <div className="pdf">
            <a
              href="./media/CV-Félix-Bacon-Developpeur-Web-2023.pdf"
              target="_blank"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
