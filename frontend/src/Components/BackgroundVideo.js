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

  const [isMute, setIsMute] = useState(false);

  const muteHandle = () => {
    setIsMute((isMute) => !isMute);
  };
  console.log(isMute);

  return (
    <section className={styles.container}>
      {isMute ? (
        <video src={video} autoPlay loop />
      ) : (
        <video src={video} autoPlay loop muted />
      )}
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

      <p className={styles.text}>
        {dictionary.homePage.textVideo}
      </p>
    </section>
  );
};

export default BackgroundVideo;
