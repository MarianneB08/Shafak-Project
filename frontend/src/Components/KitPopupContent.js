import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./KitPopupContent_ltr.module.scss";
import rtlStyles from "./KitPopupContent_rtl.module.scss";

const KitPopupContent = () => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return <div className={styles.container}>Hello from KitPopupContent !</div>;
};

export default KitPopupContent;
