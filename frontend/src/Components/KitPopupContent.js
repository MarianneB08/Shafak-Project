import React, { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./KitPopupContent_ltr.module.scss";
import rtlStyles from "./KitPopupContent_rtl.module.scss";
import dataFileFr from "../data/creations_fr.json";
import dataFileEn from "../data/creations_en.json";
import Slider from "./Slider.js";

const KitPopupContent = () => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;
  // Utilisation du fichier creations_fr.json ou creations_en.json en fonction de la langue sélectionnée par l'utilisateur
  const dataFile = userLanguage === "fr" ? dataFileFr : dataFileEn;
  // State pour gérer l'affichage conditionnel des différents sliders
  const [shownPerf, setShownPerf] = useState("akropoditi");

  return (
    <div className={styles.container}>
      <h1 className={styles.popupTitle}>{dictionary.archivesPage.pastPerformances}</h1>
      <div className={styles.perfTitles}>
        <p
          onClick={() => {
            setShownPerf("akropoditi");
          }}
          className={shownPerf === "akropoditi" ? styles.shownPerf : styles.notShownPerf}
        >
          {dictionary.archivesPage.adamahAkropoditi.title}
        </p>
        <span className={styles.span}>|</span>
        <p
          onClick={() => {
            setShownPerf("dansometre");
          }}
          className={shownPerf === "dansometre" ? styles.shownPerf : styles.notShownPerf}
        >
          {dictionary.archivesPage.adamahDansometre.title}
        </p>
        <span className={styles.span}>|</span>
        <p
          onClick={() => {
            setShownPerf("lecroiseur");
          }}
          className={shownPerf === "lecroiseur" ? styles.shownPerf : styles.notShownPerf}
        >
          {dictionary.archivesPage.adamahLeCroiseur.title}
        </p>
      </div>
      {dataFile
        .filter(function (creation) {
          return creation.kit !== "";
        })
        .map((archive, index) => (
          <>
          {/* Affichage conditionnel de chaque slider en fonction du contenu du state shownPerf */}
            {shownPerf === "dansometre" ? (
              <Slider
                title={archive.kit.adamahDansometre.title}
                pictures={archive.kit.adamahDansometre.pictures}
                legals={archive.kit.adamahDansometre.legals}
                index={index}
              />
            ) : null}
            {shownPerf === "lecroiseur" ? (
              <Slider
                title={archive.kit.adamahLeCroiseur.title}
                pictures={archive.kit.adamahLeCroiseur.pictures}
                legals={archive.kit.adamahLeCroiseur.legals}
                index={index}
              />
            ) : null}
            {shownPerf === "akropoditi" ? (
              <Slider
                title={archive.kit.adamahAkropoditi.title}
                pictures={archive.kit.adamahAkropoditi.pictures}
                legals={archive.kit.adamahAkropoditi.legals}
                index={index}
              />
            ) : null}
          </>
        ))}
    </div>
  );
};

export default KitPopupContent;
