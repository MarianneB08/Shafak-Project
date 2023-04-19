// Le composant KitPopupContent.js correspond au contenu du composant Popup.js qui s'affiche lorsqu'on clique sur le bouton "Kit"
// accessible au survol de la card de la création Adamah sur la page Archives du site. Il regroupe trois sliders (composant Slider.js)
// qui mettent en avant des photographies prises lors de différentes représentations de cette création. Chaque slider est accessible
// au clic sur le nom de la représentation.
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

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
      <h1 className={styles.popupTitle}>
        {dictionary.archivesPage.pastPerformances}
      </h1>
      <div className={styles.perfTitles}>
        {/* "Menu" des différentes représentations de la création Adamah et des différents sliders de photographies */}
        <p
          onClick={() => {
            setShownPerf("akropoditi");
          }}
          className={
            shownPerf === "akropoditi" ? styles.shownPerf : styles.notShownPerf
          }
        >
          {dictionary.archivesPage.adamahAkropoditi.title}
        </p>
        <span className={styles.span}>|</span>
        <p
          onClick={() => {
            setShownPerf("dansometre");
          }}
          className={
            shownPerf === "dansometre" ? styles.shownPerf : styles.notShownPerf
          }
        >
          {dictionary.archivesPage.adamahDansometre.title}
        </p>
        <span className={styles.span}>|</span>
        <p
          onClick={() => {
            setShownPerf("lecroiseur");
          }}
          className={
            shownPerf === "lecroiseur" ? styles.shownPerf : styles.notShownPerf
          }
        >
          {dictionary.archivesPage.adamahLeCroiseur.title}
        </p>
      </div>
      {dataFile
        .filter(function (creation) {
          return creation.kit !== "";
        })
        .map((archive) =>
          (
            <>
              {/* Affichage conditionnel de chaque slider en fonction du contenu du state shownPerf */}
              {shownPerf === "dansometre" ? (
                <Slider
                  pictures={archive.kit.adamahDansometre.pictures}
                  legals={archive.kit.adamahDansometre.legals}
                  key={archive.kit.adamahDansometre.legals}
                />
              ) : null}
              {shownPerf === "lecroiseur" ? (
                <Slider
                  pictures={archive.kit.adamahLeCroiseur.pictures}
                  legals={archive.kit.adamahLeCroiseur.legals}
                  key={archive.kit.adamahLeCroiseur.legals}

                />
              ) : null}
              {shownPerf === "akropoditi" ? (
                <Slider
                  pictures={archive.kit.adamahAkropoditi.pictures}
                  legals={archive.kit.adamahAkropoditi.legals}
                  key={archive.kit.adamahAkropoditi.legals}
                />
              ) : null}
            </>
          )
        )}
    </div>
  );
};

export default KitPopupContent;
