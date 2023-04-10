// La page Contact.js affiche les coordonnées de la Compagnie Shafak et certaines informations administratives.
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

import React from "react";
import ltrStyles from "./Contact_ltr.module.scss";
import rtlStyles from "./Contact_rtl.module.scss";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";

const Contact = () => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <main className={styles.container}>
      <h2>Contact</h2>
      <section className={styles.details}>
        <h2>Compagnie Shafak</h2>
        <p className={styles.directors}>{dictionary.contact.artisticDirectors}</p>
        <h3>Larbi Namouchi & Margot Libanga</h3>
        <div className={styles.directorsEmailContainer}>
          <a
            className={styles.directorsEmail}
            href="mailto:cieshafak@gmail.com"
          >
            cieshafak@gmail.com
          </a>
        </div>
        <p className={styles.administration}>{dictionary.contact.administration}</p>
        <a
          className={styles.administrationEmail}
          href="mailto:admi.shafak@gmail.com"
        >
          admi.shafak@gmail.com
        </a>
        <p className={styles.administrationPhone}>07 67 34 83 62</p>
        <div className={styles.adress}>
          <p>10, rue des Terre Neuvas</p>
          <p>22520 Binic-Étables-sur-Mer</p>
        </div>
        <div className={styles.society}>
          <p>SIRET : 851 268 672 00025</p>
          <p>APE : 9001Z</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
