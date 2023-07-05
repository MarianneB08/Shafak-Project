// Le composant Popup.js est utilisé pour la modale qui s'ouvre au clic sur le lien "Mentions légales" qui se trouve dans le footer du site.
// Il est également utilisé sur la page Archives pour la modale qui s'ouvre au clic sur le bouton "Dossier" de chaque création.
// L'apparition de ce composant est gérée depuis le composant Footer.js avec le hook useState dont les paramètres sont passés en props
// au composant Popup.js.
// En bas de cette modale, un bouton "Fermer" gère la dissimulation de la fenêtre en utilisant le setTrigger passé en props.
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Popup_ltr.module.scss";
import rtlStyles from "./Popup_rtl.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import LegalPopupContent from "./LegalPopupContent.js";
import KitPopupContent from "./KitPopupContent.js";
import ReadMorePopupContent from "./ReadMorePopupContent.js";

const Popup = ({ trigger, setTrigger, isClicked, buttonMore }) => {
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
      <div className={styles.iconContainer}>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.icon}
          onClick={() => setTrigger(false)}
        />
      </div>
      <div className={styles.contentAndCloseButton}>
        {/* Contenu de la modale : si le state isClicked passé en props est à true (donc si on a cliqué sur le 
        bouton "Dossier" d'une archive), alors c'est la modale KitPopupContent qui s'ouvre. Si le state buttonMore passé en props est à true (donc si on a cliqué sur le bouton "En savoir plus" d'une création), alors c'est la modale ReadMorePopupContent qui s'ouvre.
        Sinon, c'est la modale LegalPopupContent qui s'ouvre.*/}
        {!isClicked ? (
          <LegalPopupContent />
        ) : buttonMore ? (
          <ReadMorePopupContent />
        ) : (
          <KitPopupContent />
        )}
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
