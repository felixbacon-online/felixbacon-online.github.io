import React from "react";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="contact">
      <Helmet>
        <title>Félix Bacon - Contact</title>
        <meta
          name="description"
          content="Félix Bacon - Contactez-moi - téléphone & adresse e-mail - Toulouse   "
        />
        <link rel="canonical" href="https://felixbacon.online/contact" />
      </Helmet>
      <Navigation />
      <section className="contactContent">
        <div className="contactBox">
          <h1>Contactez-moi pour plus d'informations : </h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Toulouse</span>
            </li>
         
            <li className="bloc-email">
              <i className="fas fa-mobile-alt"></i>
              <span>
                <a className="contact-block"href="tel:0674859941"> 06 74 85 99 41</a>
              </span>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <span>
                <a className="contact-block"href="mailto:felixbacon.dev@gmail.com"> félixbacon.dev@gmail.com</a>
              </span>
            </li>
            <li>
            
            <i class="fas fa-solid fa-globe"></i>
              <span><a className="contact-block"href="https://felixbacon.fr/contact/" target="_blank"
                rel="noopener noreferrer">felixbacon.fr (Page de contact)</a></span>
            </li>
          </ul>
        </div>
   
      </section>
    </div>
  );
};

export default Contact;
