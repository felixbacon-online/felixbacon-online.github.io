// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./styles/styles.scss";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.scss";
import { HelmetProvider } from "react-helmet-async"; //voir  index.html -> data-rh="true" dans meta description


ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      {/* <Helmet>
        <title>Félix Bacon - Accueil</title>
        <meta
          name="description"
          content="Félix Bacon - Création de site Web - Développeur web - Webmaster - Télécharger CV - Toulouse"
        />
        <link rel="canonical" href="felixbacon.online"/>
      </Helmet>  */}
      <App />
     </HelmetProvider> 
  </React.StrictMode>,
  document.getElementById("root")
);


