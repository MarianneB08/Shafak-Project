import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Partners_ltr.module.scss";
import rtlStyles from "./Partners_rtl.module.scss";
import dataPartnersFr from "../data/partners_fr.json";
import dataPartnersEn from "../data/partners_en.json";

const Partners = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { dictionary, userLanguage } = useContext(LanguageContext);
  const styles = userLanguage === "ar" ? rtlStyles : ltrStyles;
  const dataPartners = userLanguage === "fr" ? dataPartnersFr : dataPartnersEn;

  return (
    <main className={styles.container}>
      <h1>{dictionary.partnersPage.firstTitle}</h1>
      <section className={styles.cardsContainer}>
        {dataPartners.map((logo) => {
          return (
            <article className={styles.card} key={logo.id}>
              <div>
                <img
                  src={logo.partnerLogo}
                  alt={`logo ${logo.partnerName}`}
                  className={styles.logo}
                />
              </div>
              <div className={styles.partnerName}>
                <a
                  href={logo.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{logo.partnerName}</p>
                </a>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Partners;
