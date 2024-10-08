import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  return (
     <div className='portfolio'>
       <Helmet>
        <title>Félix Bacon - Portfolio</title>
        <meta
          name="description"
          content="Réaliser un site vitrine à partir d'une maquette - Dynamiser et optimiser un site web - Créer un site e-commerce - Crée une API - Créer un réseau social d'entreprise"
        />
        <link rel="canonical" href="https://felixbacon.online/portfolio" />
      </Helmet> 
      <Navigation/>
      <h1 className="non-visible">Page de travaux et réalisations web de Félix Bacon</h1> 
      <ProjectList/>
    </div>
  );
};

export default Portfolio;