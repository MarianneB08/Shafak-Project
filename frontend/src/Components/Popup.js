// Le composant Popup.js correspond à la modale qui s'ouvre au clic sur le lien "Mentions légales" qui se trouve dans le footer du site.
// L'apparition de ce composant est gérée depuis le composant Footer.js avec le hook useState dont les paramètres sont passés en props
// au composant Popup.js.
// En bas de cette modale, un bouton "Fermer" gère la dissimulation de la fenêtre en utilisant le setTrigger passé en props.
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été 
// mise en place mais n'est pas utilisée actuellement.

import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Popup_ltr.module.scss";
import rtlStyles from "./Popup_rtl.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";


const Popup = ({ trigger, setTrigger }) => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  // Si le state trigger passé en props est à true, affichage de la modale
  return trigger ? (
    <div className={styles.popupContainer}>
      {/* Icône croix pour gérer la fermeture de la modale, grâce au setter du hook useState passé en props au composant Popup.js
        depuis le composant parent Footer.js. */}
      <FontAwesomeIcon icon={faXmark} className={styles.icon} onClick={() => setTrigger(false)}/>
      {/* Titre de la modale */}
      <h3 className={styles.popupTitle}>{dictionary.legalNotice.popupTitle}</h3>
      {/* Contenu de la modale */}
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
        {/* La fermeture de la modale au clic sur le bouton "Fermer" est gérée par le setter du hook useState passé en props au composant Popup.js
        depuis le composant parent Footer.js. */}
        <button
          className={styles.closeButton}
          onClick={() => setTrigger(false)}
        >
          {dictionary.legalNotice.closeButton}
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
