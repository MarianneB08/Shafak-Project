// La page Archives.js permet l'affichage des créations passées de la Compagnie Shafak.
// Dans les fichiers creations_fr.json et creations_en.json, ces créations sont caractérisées par le statut "Passée" ou "Passed".
// Un filtrage est donc effectué parmi l'ensemble des créations pour ne retenir que celles dont le statut est "Passée"/"Passed".
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Archives_ltr.module.scss";
import rtlStyles from "./Archives_rtl.module.scss";
import Card from "../components/Card.js";
import dataFileFr from "../data/creations_fr.json";
import dataFileEn from "../data/creations_en.json";

const Archives = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { userLanguage } = useContext(LanguageContext);
  const styles = userLanguage === "ar" ? rtlStyles : ltrStyles;
  // Utilisation du fichier creations_fr.json ou creations_en.json en fonction de la langue sélectionnée par l'utilisateur
  const dataFile = userLanguage === "fr" ? dataFileFr : dataFileEn; 

  return (
    <main className={styles.container}>
      <h1>Archives</h1>
      <section className={styles.cards}>
        {dataFile
          .filter(function (creation) {
            return creation.statut === "Passée" || creation.statut === "Passed";
          })
          .map((filteredCreation) => (
            // Les informations relatives à chaque création sont transmises en props au composant Card.js 
            <Card
              filteredCreation={filteredCreation}
              key={filteredCreation.id}
            />
          ))}
      </section>
    </main>
  );
};

export default Archives;
