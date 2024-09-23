 import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet-async";

const Home = () => {
  //---1ere version  neon activ --------------------------------------------------------
//    useEffect(() => {
// function toggleNeon() {
//   const text = document.getElementById("neon-text");
//   const screenWidth = window.innerWidth;
//   const isMobile = screenWidth < 850;

//   if (isMobile) {
//     text.classList.remove("neon");
//   } else {
//     text.classList.toggle("neon");
//   }
// }

// const intervalId = setInterval(toggleNeon, 500);

// return () => {
//   clearInterval(intervalId);
// };
// }, []);

//---2eme version test neon--------------------------------------------------------
// const [isNeonEnabled, setIsNeonEnabled] = useState(false);

// useEffect(() => {
//   function toggleNeon() {
//     const text = document.getElementById("neon-text");
//     text.classList.toggle("neon");
//   }

//   function checkScreenWidth() {
//     setIsNeonEnabled(window.innerWidth >= 550);
//   }

//   checkScreenWidth();

//   window.addEventListener("resize", checkScreenWidth);

//   return () => {
//     window.removeEventListener("resize", checkScreenWidth);
//   };
// }, []);

// useEffect(() => {
//   if (isNeonEnabled) {
//     const intervalId = setInterval(toggleNeon, 2500);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }
// }, [isNeonEnabled]);
//--------------------------------------------------------------
  return (
    <div className="home">
      <Helmet>
        <title>Félix Bacon - Création de site web</title>
        <meta
          name="description"
          content="Félix Bacon - Création de site Web - Développeur web - Webmaster - Télécharger CV - Toulouse"
        />
        <link rel="canonical" href="https://felixbacon.online/" />
      </Helmet>
      <Navigation />
      <section className="homeContent">
        <div className="content">
          <div className="container-header">
             <img
              src="./media/logo-felixbacon.png"width="140px"height="140px"
             
              alt="logo-felixbacon-round"
            /> 
             {/* <style id="neon-animation"></style>  */}
            <h1 id="neon-text" className="neon title-wordpress"> 
            {/* <h1 id="neon-text" className={isNeonEnabled ? "neon title-wordpress" : "title-wordpress"}> */}
              <a className="title-wordpress"
                href="https://felixbacon.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <div class="bottom-marge">Création de sites web WordPress</div> sites vitrine & e-commerce  <span class="lowercase">(Cliquez ici !)</span>
              </a>
            </h1>
          </div>
          <h2 class="h2">Développeur web Freelance - Webmaster</h2>
          <h2 class="h2bis">Intégrateur React / Vue.js /Node.js</h2>
          <div className="pdf">
            <a
              href="./media/CV-Félix-Bacon-2023-vf.pdf"
              target="_blank"
              alt="CV-Félix-Bacon"
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
