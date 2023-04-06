import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Company_ltr.module.scss";
import rtlStyles from "./Company_rtl.module.scss";
import PhotoLarbi from "../assets/portrait_Larbi.jpg";
import PhotoMargot from "../assets/portrait_Margot.jpg";

const Company = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { dictionary, userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <main className={styles.container}>
      <article className={styles.aboutCompany}>
        <h2>{dictionary.companyPage.firstTitle}</h2>
        <p>{dictionary.companyPage.aboutCompanyFirstParagraph}</p>
        <p>
          <span>
            {
              dictionary.companyPage.aboutCompanySecondParagraph
                .firstItalicSegment
            }
          </span>
          {
            dictionary.companyPage.aboutCompanySecondParagraph
              .firstRomancSegment
          }
          <span>
            {
              dictionary.companyPage.aboutCompanySecondParagraph
                .secondItalicSegment
            }
          </span>
          {
            dictionary.companyPage.aboutCompanySecondParagraph
              .secondRomanSegment
          }
        </p>
        <p>{dictionary.companyPage.aboutCompanyThirdParagraph}</p>
        <p>{dictionary.companyPage.aboutCompanyFourthParagraph}</p>
        <p>Margot Libanga & Larbi Namouchi</p>
      </article>
      <article className={styles.aboutDancers}>
        <h2>{dictionary.companyPage.secondTitle}</h2>
        <div className={styles.sectionsContainer}>
          <section className={styles.larbiSection}>
            <h3>{dictionary.companyPage.larbiArticleTitle}</h3>
            <div className={styles.pictureContainer}>
              <div className={styles.img}>
                <img src={PhotoLarbi} alt={dictionary.companyPage.larbiPhotoAlt} />
              </div>
              <div className={styles.legals}>
                <p>{dictionary.companyPage.larbiPhotoLegals}</p>
              </div>
            </div>
            <p>{dictionary.companyPage.larbiArticleFirstParagraph}</p>
            <p>{dictionary.companyPage.larbiArticleSecondParagraph}</p>
          </section>
          <section className={styles.margotSection}>
            <h3>{dictionary.companyPage.margotArticleTitle}</h3>
            <div className={styles.pictureContainer}>
              <div className={styles.img}>
                <img src={PhotoMargot} alt={dictionary.companyPage.margotPhotoAlt} />
              </div>
              <div className={styles.legals}>
                <p>{dictionary.companyPage.margotPhotoLegals}</p>
              </div>
            </div>
            <p>{dictionary.companyPage.margotArticleFirstParagraph}</p>
            <p>{dictionary.companyPage.margotArticleSecondParagraph}</p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default Company;
