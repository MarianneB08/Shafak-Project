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

const Slider = ({ title, pictures }) => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  // Le hook useState permet de faire varier l'index de l'array pictures
  const [currentIndex, setCurrentIndex] = useState(0);

  // La fonction goToPrevious actualise l'index de l'array pictures au clic sur la flèche "précédente" du carousel
  const goToPrevious = () => {
    const isFirstPicture = currentIndex === 0;
    const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // La fonction goToNext actualise l'index de l'array pictures au clic sur la flèche "suivante" du carousel
  const goToNext = () => {
    const isLastPicture = currentIndex === pictures.length - 1;
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <img
        className={styles.img}
        // L'index de l'array, matérialisé par 'currentIndex', est rendu dynamique grâce au hook useState
        src={pictures[currentIndex]}
        alt={pictures.title}
        key={currentIndex}
      />
      <div className={styles.arrowsAndCounter}>
        {/* Affichage conditionnel de la flèche "précédent" en fonction du nombre d'images dans l'array pictures */}
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={
            pictures.length === 1 ? styles.hiddenArrow : styles.leftArrow
          }
          // Appel de la fonction goToPrevious au clic sur la flèche
          onClick={() => goToPrevious()}
        />
        <div className={styles.counter}>
          {currentIndex + 1}/{pictures.length}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={
            pictures.length === 1 ? styles.hiddenArrow : styles.rightArrow
          }
          // Appel de la fonction goToNext au clic sur la flèche
          onClick={() => goToNext()}
        />
      </div>
    </div>
  );
};

export default Slider;
