import React, { useState } from "react";
import video from "../assets/background_video.mp4";
import styles from "./BackgroundVideo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const BackgroundVideo = () => {
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
        Compagnie de danse contemporaine et arts performatifs ayant pour but la
        production, l’exploration, la promotion et la diffusion des créations
        des chorégraphes Larbi Namouchi & Margot Libanga.
      </p>
    </section>
  );
};

export default BackgroundVideo;
