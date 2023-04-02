import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className='notFound'>
       {/* <Helmet>
        <title>Page non trouvée</title>
        <meta
          name="description"
          content="erreur - page non existante"
        />
        <link rel="canonical" href="" />
      </Helmet> */}
      <div className="notFoundContent">
        <h3>Désolé cette page n'éxiste pas ! </h3>
        <NavLink exact to ="/">
          <i className="fas fa-home"></i>
          <span> Accueil </span>
          </NavLink>
      </div>
    </div>
  );
};

export default NotFound;