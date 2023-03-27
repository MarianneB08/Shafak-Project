import React from "react";
import video from "../assets/background_video.mp4";
import styles from "./BackgroundVideo.module.scss";

const BackgroundVideo = () => {
  return (
    <section className={styles.container}>
      <video src={video} autoPlay loop muted />
    </section>
  );
};

export default BackgroundVideo;
