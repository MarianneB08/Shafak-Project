// Le composant Card.js contient toutes les informations relatives aux créations de la Compagnie Shafak.
// Il est utilisé sur les pages Creations.js et Archives.js
// Une partie des informations est directement accessible. L'autre partie des informations apparaît au survol de la souris.
// Les informations affichées sont transmises par la props filteredCreation et sont stockées dans data/creations_fr.json (version
// française) et dans data/creations_en.json (version anglaise).
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

import { useState, useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Card_ltr.module.scss";
import rtlStyles from "./Card_rtl.module.scss";
import Popup from "./Popup.js";

const Card = ({ filteredCreation }) => {
  // Importation du context languageContext.js
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;
  // State pour gérer l'affichage de la popup au clic sur le bouton "Dossier"/"Kit"
  const [buttonPopup, setButtonPopup] = useState(false);
  // State pour remonter l'information que le bouton "Dossier"/"Kit" a été cliqué
  const [isClicked, setIsClicked] = useState(false);

  // Fonction pour gérer le state isClicked
  const clickHandler = () => {
    setIsClicked(true);
  };

  return (
    <section className={styles.container}>
      <article className={styles.card}>
        {/* Informations relatives à chaque création directement accessibles */}
        <div className={styles.details}>
          <img
            src={filteredCreation.img.file}
            alt={`creation ${filteredCreation.title}`}
          />
          <div className={styles.detailsText}>
            <h2>{filteredCreation.title}</h2>
            <p>{filteredCreation.date}</p>
            <p>{filteredCreation.summary}</p>
          </div>
        </div>

        {/* Informations relatives à chaque création accessibles au survol sur la card */}
        <div className={styles.infos}>
          {/* Ajustement conditionnel du style des informations au survol selon que la création est d'actualité ou bien passée */}
          <div
            className={
              filteredCreation.statut === "Passée"
                ? styles.oldCreation
                : styles.newCreation
            }
          >
            {/* Mise en place de span pour gérer l'italique sur certains mots */}
            <p>
              {filteredCreation.infos.infosFirstRomanFragment}
              {filteredCreation.infos.infosFirstItalicFragment ? (
                <span>{filteredCreation.infos.infosFirstItalicFragment}</span>
              ) : null}
              {filteredCreation.infos.infosSecondRomanFragment
                ? filteredCreation.infos.infosSecondRomanFragment
                : null}
            </p>
          </div>

          <p className={styles.legals}>{filteredCreation.img.legals}</p>

          {/* Affichage conditionnel du bouton "Teaser" dans le hover selon qu'un teaser existe ou non */}
          {filteredCreation.teaser !== "" ? (
            <a
              href={filteredCreation.teaser}
              target="_blank"
              rel="noopener noreferrer"
            >
              Teaser
            </a>
          ) : null}
          {/* Affichage conditionnel du bouton "Dossier"/"Kit" dans le hover selon qu'un kit existe ou non */}
          {filteredCreation.kit !== "" ? (
            <button
              onClick={() => {
                setButtonPopup(true);
                clickHandler();
              }}
            >
              {dictionary.archivesPage.kitButton}
            </button>
          ) : null}
        </div>
        <Popup
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          isClicked={isClicked}
        />
      </article>
    </section>
  );
};

export default Card;
