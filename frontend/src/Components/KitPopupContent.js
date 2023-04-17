import React from "react";
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

  return (
    <div className={styles.container}>
      <h1>{dictionary.archivesPage.pastPerformances}</h1>
      {dataFile
        .filter(function (creation) {
          return creation.kit !== "";
        })
        .map((archive) => (
          <>
            <Slider
              title={archive.kit.adamahDansometre.title}
              pictures={archive.kit.adamahDansometre.pictures}
            />
            <Slider
              title={archive.kit.adamahLeCroiseur.title}
              pictures={archive.kit.adamahLeCroiseur.pictures}
            />
            <Slider
              title={archive.kit.adamahAkropoditi.title}
              pictures={archive.kit.adamahAkropoditi.pictures}
            />
          </>
        ))}
    </div>
  );
};

export default KitPopupContent;
