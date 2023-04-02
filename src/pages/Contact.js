import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
//import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="contact">
      {/* <Helmet>
        <title>Félix Bacon - Contact</title>
        <meta
          name="description"
          content="Félix Bacon - Contactez-moi - téléphone & adresse e-mail - Toulouse   "
        />
        <link rel="canonical" href="/contact" />
      </Helmet> */}
      <Navigation />
      <section className="contactContent">
        <div className="contactBox">
          <h1>Contactez-moi pour plus d'informations : </h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Toulouse</span>
            </li>
            <li>   
            <span className="text-color">Cliquez pour copier : </span></li>
            <li className="bloc-email">
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0674859941">
                <span
                  className="clickInput "
                  onClick={() => {
                    alert("Telephone copié ! ");
                  }}
                >
                  06 74 85 99 41
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="felixbacon31500@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Email copié ! ");
                  }}
                >
                  felixbacon31500@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/felixbacon/" target="_blank" rel="noopener noreferrer">
              <h2>Linkedin</h2>
              <i className = "fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/leexfe" target="_blank" rel="noopener noreferrer">
              <h2>Github</h2>
              <i className = "fab fa-github"></i>
            </a>
            {/* <a href="https://twitter.com/feldevweb" target="_blank" rel="noopener noreferrer">
              <h4>Twitter</h4>
              <i className = "fab fa-twitter"></i>
            </a>
            <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">
              <h4>Codepen</h4>
              <i className = "fab fa-codepen"></i>
            </a> */}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
