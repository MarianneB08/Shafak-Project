// Le composant BackgroundVideo.js permet l'affichage de la vidéo de la page d'accueil, du texte affiché par-dessus et 
// de l'icône de gestion du son de la vidéo.
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été 
// mise en place mais n'est pas utilisée actuellement.

import React, { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import video from "../assets/background_video.mp4";
import ltrStyles from "./BackgroundVideo_ltr.module.scss";
import rtlStyles from "./BackgroundVideo_rtl.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const BackgroundVideo = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { dictionary, userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  // State pour la gestion du son de la vidéo
  const [isMute, setIsMute] = useState(false);
  // Fonction pour faire varier le state de gestion du son de la vidéo
  const muteHandle = () => {
    setIsMute((isMute) => !isMute);
  };

  return (
    <section className={styles.container}>
      {/* Condition en fonction du state de gestion du son de la vidéo */}
      {isMute ? (
        <video src={video} autoPlay loop />
      ) : (
        <video src={video} autoPlay loop muted />
      )}
      {/* Affichage conditionnel de l'icône muted/unmuted selon le state de gestion du son de la vidéo */}
      {isMute ? (
        <FontAwesomeIcon
          icon={faVolumeHigh}
          onClick={muteHandle}
          className={styles.muteIcon}
        />
      ) : (
        <FontAwesomeIcon
          icon={faVolumeXmark}
          onClick={muteHandle}
          className={styles.muteIcon}
        />
      )}
      {/* Texte de présentation de la Compagnie Shafak */}
      <p className={styles.text}>
        {dictionary.homePage.textVideo}
      </p>
    </section>
  );
};

export default BackgroundVideo;
