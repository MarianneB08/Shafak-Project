import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Creations_ltr.module.scss";
import rtlStyles from "./Creations_rtl.module.scss";
import Card from "../components/Card";
import dataFile from "../data/creations.json";

const Creations = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <main className={styles.container}>
      <h1>Créations</h1>
      {dataFile
        .filter(function (creation) {
          return creation.statut === "En cours";
        })
        .map((filteredCreation) => (
          <Card filteredCreation={filteredCreation} key={filteredCreation.id} />
        ))}
    </main>
  );
};

export default Creations;
