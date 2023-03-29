import React from "react";
import styles from './Creations.module.scss';
import Card from "../components/Card";
// import pictureEnjeux from "../assets/enjeux.jpg";
// import picturePointDeVue from '../assets/point_de_vue.jpg';
// import pictureLeLoup from '../assets/le_loup.jpg';
// import pictureTermsAndConditions from '../assets/terms_and_conditions.jpg';
// import pictureAdamah from '../assets/adamah.jpg';
// import pictureKuhlankulanah from '../assets/kuhlankulanah.jpg';

const Creations = () => {
  return (
    <main className={styles.container}>
      <h1>Les créations</h1>
      <Card/>
    </main>
  );
};

export default Creations;
