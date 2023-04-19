// Le composant Slider.js est appelé dans le composant KitPopupContent.js. Il permet l'affichage sous forme de carousel de photographies
// prises lors de différentes représentations de la création Adamah qui figure parmi les archives de la Compagnie Shafak.
// Le défilement des images est infini : on revient à la première image après la dernière image.
// Un compteur affiche l'index de la photo en cours de visionnage et s'actualise à chaque clic sur la flèche droite ou la flèche gauche.
// Au survol sur chaque image, les crédits photos apparaissent.
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

import React from "react";
import { useContext, useState } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Slider_ltr.module.scss";
import rtlStyles from "./Slider_rtl.module.scss";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = ({ pictures, legals }) => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  // Le hook useState permet de faire varier l'index de l'array pictures
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);

  // La fonction goToPrevious actualise l'index de l'array pictures au clic sur la flèche "précédente" du carousel
  const goToPrevious = () => {
    const isFirstPicture = currentArrayIndex === 0;
    const newIndex = isFirstPicture
      ? pictures.length - 1
      : currentArrayIndex - 1;
    setCurrentArrayIndex(newIndex);
  };

  // La fonction goToNext actualise l'index de l'array pictures au clic sur la flèche "suivante" du carousel
  const goToNext = () => {
    const isLastPicture = currentArrayIndex === pictures.length - 1;
    const newIndex = isLastPicture ? 0 : currentArrayIndex + 1;
    setCurrentArrayIndex(newIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pictureContainer}>
        <a
          href={pictures[currentArrayIndex]}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imgLink}
        >
          <img
            className={styles.img}
            src={pictures[currentArrayIndex]}
            alt={pictures.title}
          />
          <div className={styles.legals}>
            <p>{legals}</p>
          </div>
        </a>
      </div>
      <div className={styles.arrowsAndCounter}>
        {/* Affichage conditionnel de la flèche "précédent" en fonction du nombre d'images dans l'array pictures */}
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={
            pictures.length === 1 ? styles.hiddenArrow : styles.leftArrow
          }
          // Appel de la fonction goToPrevious au clic sur la flèche
          onClick={goToPrevious}
        />
        <div className={styles.counter}>
          {currentArrayIndex + 1}/{pictures.length}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={
            pictures.length === 1 ? styles.hiddenArrow : styles.rightArrow
          }
          // Appel de la fonction goToNext au clic sur la flèche
          onClick={goToNext}
        />
      </div>
    </div>
  );
};

export default Slider;
