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
  const dataFile = userLanguage === "fr" ? dataFileFr : dataFileEn; 

  return (
    <main className={styles.container}>
      <h1>Archives</h1>
      <section className={styles.cards}>
        {dataFile
          .filter(function (creation) {
            return creation.statut === "Passée";
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

export default Archives;
