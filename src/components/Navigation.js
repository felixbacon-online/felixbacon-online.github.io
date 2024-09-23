import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="sidebar">
      <div className="id">
        <div className="idContent">
          {/* <img src="./media/photo-cv-orange.jpg"width='641' height='653' alt="profil-pic" /> */}
          {/* <img src="./media/cover-face.jpg"width='641' height='653' alt="profil-pic" /> */}
          <img
            className="toupie"
            src="./media/test-cover-4.jpg"
            width="641"
            height="653"
            alt="profil-pic"
          />
          <div class="h3">Félix Bacon</div>
        </div>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span className="scale-effect"> Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span> Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-image"></i>
              <span> Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span> Contact </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/mentions-legales" activeClassName="navActive">
              <i className="fas fa-balance-scale"></i>
              <span> Mentions légales </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/felixbacon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/felixbacon.artisanwebdeveloper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/leexfe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          {/* <li>
            <a
              href="https://twitter.com/feldevweb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
