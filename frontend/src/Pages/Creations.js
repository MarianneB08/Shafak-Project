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
  let dataFile = userLanguage === "fr" ? dataFileFr : dataFileEn;

  return (
    <main className={styles.container}>
      <h1>{dictionary.creationsPage.firstTitle}</h1>
      <section className={styles.cards}>
        {dataFile
          .filter(function (creation) {
            return creation.statut === "En cours";
          })
          .map((filteredCreation) => (
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
