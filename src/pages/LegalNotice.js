import React from "react";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet-async";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LegalNotice = () => {
  return (
    <div className="legalNotice">
      <Helmet>
        <title>Félix Bacon - Mentions Légales</title>
        <meta
          name="description"
          content="Mentions Légales - identification site - informatique et liberté -"
        />
        <link
          rel="canonical"
          href="https://felixbacon.online/mentions-legales"
        />
      </Helmet>
      <Navigation />
      <section className="legalNoticeContent">
        <div className="content">
          <div className="container-header">
            <img
              src="./media/logo-felixbacon.png"
              width="100px"
              alt="logo-felixbacon-cut"
            />
            <h1>MENTIONS LÉGALES </h1>
          </div>
          {/* <p class="h2">Création de sites web</p> */}
          <div className="bloc-container">
            {/* <div className="container-identification"> */}
              <h2>Identification du site</h2>
              <h3>Responsable de publication</h3>
              <p className="paragraphe">
                Félix Bacon 31200 Toulouse | email :{" "}
                <b>
                  <CopyToClipboard text="felixbacon.dev@gmail.com">
                    <span
                      className="clickInput"
                      onClick={() => {
                        alert("Email copié ! ");
                      }}
                    >
                      felixbacon.dev@gmail.com
                    </span>
                  </CopyToClipboard>{" "}
                </b>
                | tel :{" "}
                <b>
                  <CopyToClipboard text="0674859941">
                    <span
                      className="clickInput "
                      onClick={() => {
                        alert("Telephone copié ! ");
                      }}
                    >
                      +33 (0)6 74 85 99 41
                    </span>
                  </CopyToClipboard>
                </b>
              </p>
              <h3>Hébergement</h3>
              <p className="paragraphe">
                L’hébergement de ce site est assuré par la société HOSTINGER
                INTERNATIONAL LTD, dont le siège social se situe 61 Lordou
                Vironos Street, 6023 Larnaca, Chypre, joignable par le moyen
                suivant : https://www.hostinger.fr/contact.
              </p>
              <h3>Conception du site</h3>
              <p className="paragraphe">
                Félix Bacon – Création de site internet
              </p>
            {/* </div> */}
            {/* <div className="container-informatique"> */}
              <h2>Informatique et liberté</h2>
              <h3>Protection de la vie privée</h3>
              <p className="paragraphe">
              La protection de la vie privée est un droit fondamental pour chaque individu. En tant que propriétaire de ce site internet, nous prenons très au sérieux la protection de vos données personnelles. Conformément à la loi Informatique et Libertés du 6 janvier 1978, nous nous engageons à respecter la confidentialité de vos données personnelles. Ces dernières ne sont collectées que dans le but de vous fournir les services que vous avez demandés et ne seront jamais divulguées à des tiers sans votre consentement. Vous avez également le droit de demander l'accès, la rectification, ou la suppression de vos données personnelles à tout moment. Si vous souhaitez exercer ce droit et obtenir communication des
                informations vous concernant, veuillez vous adresser à :{" "}
                <b>
                  {" "}
                  <CopyToClipboard text="felixbacon.dev@gmail.com">
                    <span
                      className="clickInput"
                      onClick={() => {
                        alert("Email copié ! ");
                      }}
                    >
                      felixbacon.dev@gmail.com
                    </span>
                  </CopyToClipboard>
                </b>
              </p>
              <h3>Utilisation de cookies</h3>
              <p className="paragraphe">
                Les « cookies » sont de petits fichiers texte que votre
                navigateur stocke sur votre ordinateur. Le processus de stockage
                des cookies est également appelé « utilisation de cookies ».
                Vous pouvez modifier les paramètres de votre navigateur en
                fonction de vos souhaits pour être informé de l’utilisation de
                cookies, pour décider de les accepter au cas par cas ou encore
                de les accepter ou refuser de manière générale. Les cookies
                peuvent être utilisés à des fins différentes, p. ex. pour
                déterminer si votre PC a déjà été connecté à une page Internet
                (cookies permanents) ou pour stocker la page visitée en dernier
                lieu (cookies de session).
              </p>
              <p className="paragraphe">
                Nous utilisons des cookies sur différentes pages afin de rendre
                le site plus attrayant pour nos visiteurs et de permettre
                l’utilisation de certaines fonctions. La plupart des cookies que
                nous utilisons sont supprimés de votre disque dur à la fin de la
                session de navigation (cookies de session). D’autres cookies
                demeurent sur votre ordinateur et nous permettent de reconnaître
                votre appareil lors de votre prochaine visite sur notre site
                (cookies permanents). Nous veillons à ce que notre utilisation
                de cookies n’entraîne aucun inconvénient ou risque à votre
                détriment. Nous vous recommandons d’accepter l’utilisation de
                cookies sur notre site afin de profiter du confort de nos
                fonctions
              </p>
            </div>
          </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default LegalNotice;
