import React from "react";
import ltrStyles from "./CloseButton_ltr.module.scss";
import rtlStyles from "./CloseButton_rtl.module.scss";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";

const CloseButton = ({setTrigger}) => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <div className={styles.container}>
      {/* La fermeture de la modale au clic sur le bouton "Fermer" est gérée par le setter du hook useState passé en props au composant Popup.js
        depuis le composant parent. */}
      <button className={styles.closeButton} onClick={() => setTrigger(false)}>
        {dictionary.legalNotice.closeButton}
      </button>
    </div>
  );
};

export default CloseButton;
