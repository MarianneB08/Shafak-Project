import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Card_ltr.module.scss";
import rtlStyles from "./Card_rtl.module.scss";
import dataFile from "../data/creations.json";

const Card = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <section className={styles.container}>
      {dataFile.map((creation) => (
        <article className={styles.card} key={creation.id}>
          <div className={styles.details}>
            <img src={creation.img.file} alt={`creation ${creation.title}`} />
            <div className={styles.detailsText}>
              <h2>{creation.title}</h2>
              <p>{creation.date}</p>
              <p>{creation.summary}</p>
            </div>
          </div>
          <div className={styles.infos}>
            <p
              className={
                creation.statut === "Passée"
                  ? styles.oldCreation
                  : styles.newCreation
              }
            >
              {creation.infos}
            </p>
            {creation.img.legals !== "" ? (
              <p className={styles.legals}>
                Crédits photo : {creation.img.legals}
              </p>
            ) : null}
            {creation.teaser !== "" ? (
              <a
                href={creation.teaser}
                target="_blank"
                rel="noopener noreferrer"
              >
                Teaser
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Card;
