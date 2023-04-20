// La page Agenda.js regroupe les prochaines dates de représentation de la Compagnie Shafak
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Agenda_ltr.module.scss";
import rtlStyles from "./Agenda_rtl.module.scss";

const Agenda = () => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <main className={styles.container}>
      <h1>Agenda</h1>
      <div className={styles.datesList}>
        <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>
              {dictionary.agendaPage.firstDate.firstDateMonthAndYear}
            </span>{" "}
            –{" "}
            <span className={styles.title}>
              {dictionary.agendaPage.firstDate.firstDateTitle}
            </span>{" "}
            – {dictionary.agendaPage.firstDate.firstDateLocation}
          </p>
        </section>
        <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>
              {dictionary.agendaPage.secondDate.secondDateMonthAndYear}
            </span>{" "}
            –{" "}
            <span className={styles.title}>
              {dictionary.agendaPage.secondDate.secondDateTitle}
            </span>{" "}
            – {dictionary.agendaPage.secondDate.secondDateLocation}
          </p>
        </section>
        {/* <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>
              {dictionary.agendaPage.thirdDate.thirdDateMonthAndYear}
            </span>{" "}
            –{" "}
            <span className={styles.title}>
              {dictionary.agendaPage.thirdDate.thirdDateTitle}
            </span>{" "}
            – {dictionary.agendaPage.thirdDate.thirdDateLocation}
          </p>
        </section>  */}
        {/* <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>
              {dictionary.agendaPage.fourthDate.fourthDateMonthAndYear}
            </span>{" "}
            –{" "}
            <span className={styles.title}>
              {dictionary.agendaPage.fourthDate.fourthDateTitle}
            </span>{" "}
            – {dictionary.agendaPage.fourthDate.fourthDateLocation}
          </p> 
        </section> */}
      </div>
    </main>
  );
};

export default Agenda;
