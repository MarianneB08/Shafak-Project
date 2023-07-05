import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./ReadMorePopupContent_ltr.module.scss";
import rtlStyles from "./ReadMorePopupContent_rtl.module.scss";
import dataFileFr from "../data/creations_fr.json";
import dataFileEn from "../data/creations_en.json";

const ReadMorePopupContent = () => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;
  // Utilisation du fichier creations_fr.json ou creations_en.json en fonction de la langue sélectionnée par l'utilisateur
  const dataFile = userLanguage === "fr" ? dataFileFr : dataFileEn;

  return (
    <div className={styles.container}>
      <h1 className={styles.popupTitle}>Point de vue : carnet de bord</h1>
    </div>
  );
};

export default ReadMorePopupContent;
