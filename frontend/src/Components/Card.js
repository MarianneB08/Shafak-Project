import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Card_ltr.module.scss";
import rtlStyles from "./Card_rtl.module.scss";

const Card = ({ filteredCreation }) => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <div className={styles.details}>
          <img
            src={filteredCreation.img.file}
            alt={`creation ${filteredCreation.title}`}
          />
          <div className={styles.detailsText}>
            <h2>{filteredCreation.title}</h2>
            <p>{filteredCreation.date}</p>
            <p>{filteredCreation.summary}</p>
          </div>
        </div>
        <div className={styles.infos}>
          <div
            className={
              filteredCreation.statut === "Passée"
                ? styles.oldCreation
                : styles.newCreation
            }
          >
            <p>
              {filteredCreation.infos.infosFirstRomanFragment}
              {filteredCreation.infos.infosFirstItalicFragment ? (
                <span>{filteredCreation.infos.infosFirstItalicFragment}</span>
              ) : null}
              {filteredCreation.infos.infosSecondRomanFragment
                ? filteredCreation.infos.infosSecondRomanFragment
                : null}
            </p>
          </div>
          {filteredCreation.img.legals !== "" ? (
            <p className={styles.legals}>{filteredCreation.img.legals}</p>
          ) : null}
          {filteredCreation.teaser !== "" ? (
            <a
              href={filteredCreation.teaser}
              target="_blank"
              rel="noopener noreferrer"
            >
              Teaser
            </a>
          ) : null}
        </div>
      </article>
    </section>
  );
};

export default Card;
