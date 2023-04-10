import React, { useContext } from 'react';
import { languageOptions } from '../languages';
import { LanguageContext } from '../store/languageContext.js';
import styles from "./LanguageSelector.module.scss";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // Définition du langage sélectionné d'après le context
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  return (
    <select
      onChange={handleLanguageChange}
      value={userLanguage}
      className={styles.select}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  );
};