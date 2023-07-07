import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./ReadMorePopupContent_ltr.module.scss";
import rtlStyles from "./ReadMorePopupContent_rtl.module.scss";
import dataFileFr from "../data/creations_fr.json";
import dataFileEn from "../data/creations_en.json";
import add from "../assets/point_de_vue_manifestation.jpg";
import workshop from "../assets/atelier.jpg";
import CloseButton from "./CloseButton.js";

const ReadMorePopupContent = ({setTrigger}) => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;
  // Utilisation du fichier creations_fr.json ou creations_en.json en fonction de la langue sélectionnée par l'utilisateur
  const dataFile = userLanguage === "fr" ? dataFileFr : dataFileEn;
  const facebookPlerin =
    "https://www.facebook.com/events/1300487307255636/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22%5B%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A226435170228393%7D%7D%5D%22%7D";
  const facebookBinic =
    "https://www.facebook.com/events/171298972603503/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22%5B%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A234342489401926%7D%7D%5D%22%7D";

  return (
    <section className={styles.container}>
      <h1 className={styles.popupTitle}>Point de vue : carnet de bord</h1>
      <article className={styles.logbookArticle}>
        <img
          className={styles.addPicture}
          src={add}
          alt="Point de vue manifestation chorégraphique de territoire pour danseuses amateurs"
        />
        <div className={styles.logbookText}>
          <p>
            C'est en 2022 que l'écriture de ce projet débute, initiée par la
            volonté du chorégraphe Larbi Namouchi de créer un premier projet
            participatif de la compagnie à destination d'un public amateur, sans
            niveau requis, pour des participants à partir de 16 ans et plus dans
            les Côtes d'Armor. A la suite d'un appel à participation diffusé
            dans les réseaux de la région et dans les lieux publics, les
            réponses offrent à la compagnie l'opportunité de créer avec des
            participantes venant de toute la Bretagne.
          </p>
          <p>
            L'écriture de l'œuvre, s'est trouvée être un challenge au niveau
            organisationnel, du fait de l'éloignement des participantes. Il a
            fallu trouver diverses partenaires et multiplier les répétitions en
            petit groupe afin de pouvoir se réunir suffisamment pour les besoins
            de la création, sans obliger les participantes à passer trop de
            temps sur les routes.
          </p>
          <p>
            Ce projet s'ancre particulièrement dans le territoire
            costarmoricain, car il a tissé un réseau départementale spontané
            pour son développement, en allant à la rencontre de nouveaux
            partenaires : les communes de Trégueux, Lannion, Perros-Guirec et
            Saint-Brieuc-Armor-Agglo; en plus de ses partenaires déjà présents :
            les communes de Binic-Etables-sur-Mer et Plérin. Cette création
            existe donc grâce au soutien de ces partenaires, mais aussi par
            l'investissement des 10 danseuses prenant part au projet. Ce
            spectacle peut également voir le jour grâce à la capacité
            d'adaptation et de conversion des difficultés en avantages, des
            directeurs artistiques de la compagnie.
          </p>
          <p>
            Après une vingtaine de répétitions dispatchés dans tout le
            département, l'équipe est fière de pouvoir, dans quelques jours,
            présenter le résultat d'un travail à dimension humaine et locale.
            Arrivant lentement à terme de ce projet, les directeurs artistiques
            sont désireux de faire durer cette expérience, en convertissant ce
            projet en version professionnelle. Il s'agit d'une conversion
            hors-norme, où habituellement se sont les pièces jouées par des
            professionnels qui sont transmises aux publics, ici, la compagnie
            envisage une transmission du projet amateur à des danseurs
            professionnels. Dans cette démarche, la compagnie souhaite intégrer
            à la version professionnelle 3 des danseuses participantes du projet
            initial. Ainsi, la compagnie offre une opportunité de
            professionnalisation à des danseuses dites "amateurs" lors d'un
            projet qu'elles maîtrisent, pour une diffusion prochaine à plus
            grande échelle.
          </p>
        </div>
      </article>
      <h2 className={styles.workshopTitle}>
        L'Atelier Tandem danse & peinture
      </h2>
      <article className={styles.workshopArticle}>
        <p>
          Le chorégraphe transmettra aux participants des fragments
          chorégraphiques de la pièce. Ces fragments seront des outils de jeu
          dans l'espace pour les participants. Entourés de participants
          peintres, les participants dansants, devront, à travers les mouvements
          appris et leur propre sensibilité, trouver leur façon de se déployer.
          En parallèle, les participants peintres, disposés en cercle autour des
          participants dansants, auront l'occasion de capturer ce qui se dessine
          devant eux: un spectacle éphémère et inouï. En présence de l'artiste
          peintre du projet, Bernadette Vallin, ils trouveront de quoi créer à
          travers les mouvements et pauses marqués par les participants
          dansants. La confrontation spatiale entre danseurs et peintres offrira
          à ce moment de partage, un caractère multidimensionnel, entremêlant
          les "Point(s) de vue" et les singularités. Cet instant suspendu sera
          amené en musique par le compositeur de la pièce Obvious. (Léo
          Libanga). Cette expérience de partage artistique sensible, est une
          belle opportunité pour rencontrer les artistes de la pièce et
          l'esthétique qui la constituent. A la suite de cette heure récréative,
          les participants sont invités à discuter avec les artistes du projet
          lors d'un goûter. La participation à l'atelier est gratuite et ouverte
          à tous, sans niveau requis. Inscriptions ouvertes par mail à
          cieshafak@gmail.com ou via Facebook :{" "}
          <a href={facebookPlerin} target="_blank" rel="noopener noreferrer">
            Plérin
          </a>{" "}
          /{" "}
          <a href={facebookBinic} target="_blank" rel="noopener noreferrer">
            Binic
          </a>
        </p>
        <img
          className={styles.workshopPicture}
          src={workshop}
          alt="Atelier Tandem danse & peinture Compagnie Shafak Binic Plérin"
        />
      </article>
      <h2 className={styles.distributionTitle}>Distribution</h2>
      <article className={styles.distributionArticle}>
        <p>Chorégraphie et conception : Larbi Namouchi</p>
        <p>Création sonore : Obvious. (Léo Libanga)</p>
        <p>
          Interprétation, danse : Alizée-Marie Provost, Audrey Chaen, Bernadette
          Vallin, Delphine Léo, Emmelyne Perrot, Léa Ropars, Lubna Mokhtar,
          Véronique Riehl
        </p>
        <p>Art sur toile : Bernadette Vallin</p>
        <p>Production : Compagnie Shafak</p>
        <p>Chargée de production : Margot Libanga</p>
      </article>
      <h2 className={styles.partnersTitle}>Partenaires</h2>
      <article className={styles.partnersArticle}>
        <ul className={styles.partnersList}>
          <li>
            Ministère de la Culture/Drac Bretagne dans le cadre de l'Été
            Culturel 2023
          </li>
          <li>Saint-Brieuc Armor Agglo</li>
          <li>Plérin-sur-Mer</li>
          <li>Binic-Étables-sur-Mer</li>
          <li>Perros-Guirec</li>
          <li>Lannion</li>
          <li>Trégueux</li>
        </ul>
      </article>
      <CloseButton setTrigger={setTrigger}/>
    </section>
  );
};

export default ReadMorePopupContent;
