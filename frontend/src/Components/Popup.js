// Le composant "Popup" correspond à la modale qui s'ouvre au clic sur le lien "Mentions légales" qui se trouve dans le footer du site.
// L'apparition de ce composant est géré depuis le composant "Footer" avec le hook useState dont les paramètres sont passés en props
// au composant "Popup".
// En bas de cette modale, un bouton "Fermer" gère la dissimulation de la fenêtre en utilisant le setTrigger passé en props.

import React from "react";
import styles from "./Popup.module.scss";

const Popup = ({ trigger, setTrigger }) => {
  return trigger ? (
    <div className={styles.popupContainer}>
      <h3 className={styles.popupTitle}>Mentions légales</h3>
      <div className={styles.popupText}>
        <div className={styles.popupTextIdentity}>
          <h4>Identité</h4>
          <ul>
            <li>Nom du site web : Compagnie Shafak</li>
            <li>Adresse : </li>
            <li>Propriétaire : Compagnie Shafak</li>
            <li>Responsable de publication : Compagnie Shafak</li>
            <li>Conception et réalisation : Marianne Boyer</li>
            <li>Hébergement : Netlify</li>
          </ul>
        </div>
        <div className={styles.popupTextConditions}>
          <h4>Conditions d'utilisation</h4>
          <p>
            L’utilisation du présent site implique l’acceptation pleine et
            entière des conditions générales d’utilisation décrites ci-après.
            Ces conditions d’utilisation sont susceptibles d’être modifiées ou
            complétées à tout moment.
          </p>
        </div>
        <div className={styles.popupTextInformations}>
          <h4>Informations</h4>
          <p>
            Les informations et documents du site sont présentés à titre
            indicatif, sans de caractère exhaustif, et ne peuvent engager la
            responsabilité du propriétaire du site. Le propriétaire du site ne
            peut être tenu responsable des dommages directs et indirects
            consécutifs à l’accès au site.
          </p>
        </div>
        <div className={styles.popupTextProperty}>
          <h4>Propriété intellectuelle</h4>
          <p>
            Sauf mention contraire, tous les éléments accessibles sur le site
            (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
            restent la propriété exclusive de leurs auteurs, en ce qui concerne
            les droits de propriété intellectuelle ou les droits d’usage.
          </p>
          <ol>
            <li>
              Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite, sauf autorisation
              écrite préalable de l’auteur.
            </li>
            <li>
              Toute exploitation non autorisée du site ou de l’un quelconque des
              éléments qu’il contient est considérée comme constitutive d’une
              contrefaçon et passible de poursuites.
            </li>
            <li>
              Les marques et logos reproduits sur le site sont déposés par les
              sociétés qui en sont propriétaires.
            </li>
          </ol>
        </div>
        <div className={styles.popupTextLinks}>
          <h4>Liens</h4>
          <p>
            <em>Liens sortants</em>
          </p>
          <p>
            Le propriétaire du site décline toute responsabilité et n’est pas
            engagé par le référencement via des liens hypertextes, de ressources
            tierces présentes sur le réseau Internet, tant en ce qui concerne
            leur contenu que leur pertinence.
          </p>
          <p>
            <em>Liens entrants</em>
          </p>
          <p>
            Le propriétaire du site autorise les liens hypertextes vers l’une
            des pages de ce site, à condition que ceux-ci ouvrent une nouvelle
            fenêtre et soient présentés de manière non équivoque afin d’éviter :
            tout risque de confusion entre le site citant et le propriétaire du
            site ainsi que toute présentation tendancieuse, ou contraire aux
            lois en vigueur. Le propriétaire du site se réserve le droit de
            demander la suppression d’un lien s’il estime que le site source ne
            respecte pas les règles ainsi définies.
          </p>
        </div>
        <div className={styles.popupTextConfidentiality}>
          <h4>Confidentialité</h4>
          <p>
            Tout utilisateur dispose d’un droit d’accès, de rectification et
            d’opposition aux données personnelles le concernant, en effectuant
            sa demande écrite et signée, accompagnée d’une preuve d’identité. Le
            site ne recueille pas d’informations personnelles, et n’est pas
            assujetti à déclaration à la CNIL.
          </p>
        </div>
        <div className={styles.popupTextCredits}>
          <h4>Crédits</h4>
          <p>
            Les auteurs des photographies utilisées pour illustrer ce site web
            sont mentionnés au survol de chaque photographie.
          </p>
          <p>
            Les icônes utilisées sur ce site sont chargées depuis le site
            https://fontawesome.com.
          </p>
        </div>
        {/* La fermeture de la modale au clic sur le bouton "Fermer" est gérée par le setter du hook useState passé en props au composant "Popup"
        depuis le composant parent "Footer". */}
        <button
          className={styles.closeButton}
          onClick={() => setTrigger(false)}
        >
          Fermer
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
