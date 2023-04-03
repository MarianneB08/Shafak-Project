import React, { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from "../languages";

// Mise en place d'un context pour le langage avec le français comme langue par défaut
export const LanguageContext = createContext({
  userLanguage: "fr",
  dictionary: dictionaryList.fr,
});

// Apport du contexte linguistique à l'application
export function LanguageProvider({ children }) {
  // Récupération du langage par défaut dans le localStorage
  const defaultLanguage = window.localStorage.getItem("rcml-lang");
  // Stockage du langage par défaut dans un state
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || "fr");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "fr";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("rcml-lang", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

// Récupération du texte en fonction de l'id et du langage courant
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[tid] || tid;
}
