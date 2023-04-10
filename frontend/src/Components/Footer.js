// Le composant Footer.js est inséré dans le composant Layout.js qui est configuré dans le composant global App.js.
// Il est constitué du composant Popup.js qui permet l'affichage des mentions légales et des icônes réseaux sociaux de la Compagnie Shafak.
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

import React, { useState } from "react";
import ltrStyles from "./Footer_ltr.module.scss";
import rtlStyles from "./Footer_rtl.module.scss";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faVimeoSquare,
} from "@fortawesome/free-brands-svg-icons";
import Popup from "./Popup";

const Footer = () => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // State de gestion d'ouverture de la popup des mentions légales
  const [buttonPopup, setButtonPopup] = useState(false);

  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <footer className={styles.container}>
      {/* Copyright et mentions légales */}
      <section className={styles.legals}>
        <div className={styles.legalsDetails}>
          <p>{dictionary.footer.copyright}</p>
          {/* Lien d'ouverture de la modale des mentions légales */}
          <p onClick={() => setButtonPopup(true)}>{dictionary.footer.legals}</p>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
      </section>
      {/* Icônes réseaux sociaux */}
      <section className={styles.social}>
        <a
          href={`https://www.instagram.com/compagnie.shafak/?hl=fr`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a
          href={`https://www.facebook.com/cieshafak/?locale=hi_IN`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a
          href={`https://vimeo.com/user9763163`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faVimeoSquare} />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
