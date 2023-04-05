import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Error_ltr.module.scss";
import rtlStyles from "./Error_rtl.module.scss";

const Error = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { dictionary, userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <main className={styles.container}>
      <p className={styles.errorType}>{dictionary.error.errorType}</p>
      <p className={styles.errorDescription}>{dictionary.error.errorDescription}</p>
      <Link to="/">
        <p className={styles.backHome}>{dictionary.error.homeLink}</p>
      </Link>
    </main>
  );
};

export default Error;
