// La page Error.js est la page sur laquelle est renvoyé l'utilisateur en cas d'erreur de saisie dans l'URL d'une des pages du site.
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./404_ltr.module.scss";
import rtlStyles from "./404_rtl.module.scss";
import backgroundImg from "../assets/error_background.jpg";

const Error = () => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <main className={styles.container}>
      <img src={backgroundImg} alt="Larbi Namouchi by Garance Li" />
      <section className={styles.text}>
        <p className={styles.errorType}>{dictionary.error.errorType}</p>
        <div className={styles.details}>
          <p className={styles.errorDescription}>
            {dictionary.error.errorDescription}
          </p>
          {/* Lien de retour vers la page d'accueil du site */}
          <Link to="/">
            <p className={styles.backHome}>{dictionary.error.homeLink}</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Error;
