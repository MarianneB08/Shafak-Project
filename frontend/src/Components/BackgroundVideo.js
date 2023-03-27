import React from "react";
import video from "../assets/background_video.mp4";
import styles from "./BackgroundVideo.module.scss";

const BackgroundVideo = () => {
  return (
    <section className={styles.container}>
      <video src={video} autoPlay loop muted />
      <p className={styles.text}>
        Compagnie de danse contemporaine et arts performatifs ayant pour but la
        production, l’exploration, la promotion et la diffusion des créations de
        artistes chorégraphiques Larbi Namouchi & Margot Libanga.
      </p>
    </section>
  );
};

export default BackgroundVideo;
