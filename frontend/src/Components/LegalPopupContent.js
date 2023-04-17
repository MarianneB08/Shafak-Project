// Le composant LegalPopupContent contient les mentions légales du site. Ce composant est appelé de manière conditionnelle dans le
// composant parent Popup.js qui contient la structure de la modale.

import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./LegalPopupContent_ltr.module.scss";
import rtlStyles from "./LegalPopupContent_rtl.module.scss";

const LegalPopupContent = () => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;
  return (
    <section className={styles.legalPopupContentContainer}>
      <h3 className={styles.popupTitle}>{dictionary.legalNotice.popupTitle}</h3>
      <div className={styles.popupText}>
        <div className={styles.popupTextIdentity}>
          <h4>{dictionary.legalNotice.popupIdentity.identityTitle}</h4>
          <ul>
            <li>{dictionary.legalNotice.popupIdentity.siteName}</li>
            <li>{dictionary.legalNotice.popupIdentity.siteUrl}</li>
            <li>{dictionary.legalNotice.popupIdentity.siteOwner}</li>
            <li>{dictionary.legalNotice.popupIdentity.siteEditor}</li>
            <li>{dictionary.legalNotice.popupIdentity.siteDesigner}</li>
            <li>{dictionary.legalNotice.popupIdentity.siteHosting}</li>
          </ul>
        </div>
        <div className={styles.popupTextConditions}>
          <h4>{dictionary.legalNotice.popupConditions.conditionsTitle}</h4>
          <p>{dictionary.legalNotice.popupConditions.conditionsText}</p>
        </div>
        <div className={styles.popupTextInformations}>
          <h4>{dictionary.legalNotice.popupInformations.informationsTitle}</h4>
          <p>{dictionary.legalNotice.popupInformations.informationsText}</p>
        </div>
        <div className={styles.popupTextProperty}>
          <h4>{dictionary.legalNotice.popupProperty.propertyTitle}</h4>
          <p>{dictionary.legalNotice.popupProperty.propertyParagraph}</p>
          <ol>
            <li>
              {dictionary.legalNotice.popupProperty.propertyFirstListItem}
            </li>
            <li>
              {dictionary.legalNotice.popupProperty.propertySecondListItem}
            </li>
            <li>
              {dictionary.legalNotice.popupProperty.propertyThirdListItem}
            </li>
          </ol>
        </div>
        <div className={styles.popupTextLinks}>
          <h4>{dictionary.legalNotice.popupLinks.linksTitle}</h4>
          <p className={styles.outLinks}>
            {dictionary.legalNotice.popupLinks.outLinksTitle}
          </p>
          <p>{dictionary.legalNotice.popupLinks.outLinksText}</p>
          <p className={styles.inLinks}>
            {dictionary.legalNotice.popupLinks.inLinksTitle}
          </p>
          <p>{dictionary.legalNotice.popupLinks.inLinksText}</p>
        </div>
        <div className={styles.popupTextConfidentiality}>
          <h4>{dictionary.legalNotice.popupPrivacy.privacyTitle}</h4>
          <p>{dictionary.legalNotice.popupPrivacy.privacyText}</p>
        </div>
        <div className={styles.popupTextCredits}>
          <h4>{dictionary.legalNotice.popupCredits.creditsTitle}</h4>
          <p>
            {dictionary.legalNotice.popupCredits.creditsText}
            <br />
            {dictionary.legalNotice.popupCredits.creditsComplement}
          </p>
          <p>{dictionary.legalNotice.popupCredits.creditsIcons}</p>
        </div>
      </div>
    </section>
  );
};

export default LegalPopupContent;
