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
  const { dictionary, userLanguage } = useContext(LanguageContext);
  const [buttonPopup, setButtonPopup] = useState(false);

  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <footer className={styles.container}>
      <section className={styles.legals}>
        <div className={styles.legalsDetails}>
          <p>{dictionary.footer.copyright}</p>
          <p onClick={() => setButtonPopup(true)}>{dictionary.footer.legals}</p>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
      </section>
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
