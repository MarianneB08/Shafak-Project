// Le composant LanguageSelector.js est implémenté dans le composant Header.js.
// Ce composant permet à l'utilisateur du site de changer la langue du site (français/anglais).
// Il s'appuie sur l'API Context de React, paramétrée dans store/languageContext.js.

import React, { useContext } from "react";
import { languageOptions } from "../languages";
import { LanguageContext } from "../store/languageContext.js";
import styles from "./LanguageSelector.module.scss";

export default function LanguageSelector() {
  // Importation du context
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // Fonction pour récupérer la valeur de la langue définie par l'utilisateur avec le sélecteur
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  return (
    // Affichage de la langue choisie par l'utilisateur, récupérée dans le context
    <select
      onChange={handleLanguageChange}
      value={userLanguage}
      className={styles.select}
    >
      {/* Affichage des options de langue possibles en mappant sur l'objet languageOptions défini dans languages/index.js */}
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
