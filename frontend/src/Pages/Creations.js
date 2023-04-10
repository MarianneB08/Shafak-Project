// La page Creations.js permet l'affichage des créations en cours de la Compagnie Shafak.
// Dans les fichiers creations_fr.json et creations_en.json, ces créations sont caractérisées par le statut "En cours" ou "Active".
// Un filtrage est donc effectué parmi l'ensemble des créations pour ne retenir que celles dont le statut est "En cours"/"Active".
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Creations_ltr.module.scss";
import rtlStyles from "./Creations_rtl.module.scss";
import Card from "../components/Card";
import dataFileFr from "../data/creations_fr.json";
import dataFileEn from "../data/creations_en.json";

const Creations = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { dictionary, userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;
  // Utilisation du fichier creations_fr.json ou creations_en.json en fonction de la langue sélectionnée par l'utilisateur
  let dataFile = userLanguage === "fr" ? dataFileFr : dataFileEn;

  return (
    <main className={styles.container}>
      <h1>{dictionary.creationsPage.firstTitle}</h1>
      <p className={styles.docRequest}>{dictionary.creationsPage.documentationRequest}</p>
      <section className={styles.cards}>
        {dataFile
          .filter(function (creation) {
            return creation.statut === "En cours" || creation.statut === "Active";
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

export default Creations;
