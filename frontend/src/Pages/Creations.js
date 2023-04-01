import React from "react";
import styles from './Creations.module.scss';
import Card from "../components/Card";

const Creations = () => {
  return (
    <main className={styles.container}>
      <h1>Créations</h1>
      <Card/>
    </main>
  );
};

export default Creations;
