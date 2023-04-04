import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Agenda_ltr.module.scss";
import rtlStyles from "./Agenda_rtl.module.scss";


const Agenda = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <main className={styles.container}>
      <h1>Agenda</h1>
      <div className={styles.datesList}>
        <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>avril 2023</span> –{" "}
            <span className={styles.title}>Le loup</span> – Festival
            Rabi-Al-Jasad, Tunis, Tunisie
          </p>
        </section>
        <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>avril 2023</span> –{" "}
            <span className={styles.title}>Le loup</span> –
            24h-du-théâtre-non-stop, Kef, Tunisie
          </p>
        </section>
        <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>juin 2023</span> –{" "}
            <span className={styles.title}>Le loup</span> – Festival de danse de
            Carthage, Tunis, Tunisie
          </p>
        </section>
        <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>juillet 2023</span> –{" "}
            <span className={styles.title}>Point de vue</span> – Lieux dévoilés
            prochainement
          </p>
        </section>
      </div>
    </main>
  );
};

export default Agenda;
