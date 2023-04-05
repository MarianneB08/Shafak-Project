import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Error_ltr.module.scss";
import rtlStyles from "./Error_rtl.module.scss";

const Error = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <main className={styles.container}>
      <p className={styles.errorType}>Erreur 404</p>
      <p className={styles.errorDescription}>La page que vous demandez n'existe pas.</p>
      <Link to="/">
        <p className={styles.backHome}>Retour à la page d'accueil</p>
      </Link>
    </main>
  );
};

export default Error;
