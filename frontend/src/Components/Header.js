// Le composant Header.js est inséré dans le composant Layout.js qui est configuré dans le composant global App.js.
// Il est constitué du nom de la compagnie et d'une barre de navigation. Celle-ci contient notamment le composant LanguageSelector.js
// qui permet à l'utilisateur de changer la langue du site (français/anglais).
// Sur les résolutions inférieures à 601px, la barre de navigation se transforme en burger menu.
// Au clic sur ce burger menu, les liens de la navbar s'affichent en pleine page.
// La structure permettant de switcher de feuille de style en fonction du langage, selon qu'il exige une lecture LTR ou RTL, a été
// mise en place mais n'est pas utilisée actuellement.

import React from "react";
import { NavLink } from "react-router-dom";
import rtlStyles from "./Header_rtl.module.scss";
import ltrStyles from "./Header_ltr.module.scss";
import { useState, useContext } from "react";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "../store/languageContext.js";

const Header = () => {
  // Utilisation du context pour récupérer les contenus en français/anglais et le choix de langage défini par l'utilisateur par
  // l'intermédiaire du composant LanguageSelector.js implémenté dans le composant Header.js.
  const { dictionary, userLanguage } = useContext(LanguageContext);
  // Gestion de l'ouverture des liens de la navbar dans la version mobile du header
  const [showLinks, setShowLinks] = useState(false);

  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  // Fonction pour faire varier le state de gestion d'affichage des liens de la navbar
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className={styles.container}>
      <h1>Compagnie Shafak</h1>

      {/* Ajustement conditionnel du style selon le statut du state showLinks */}
      <nav className={`${styles.navbar} ${showLinks ? styles.showNavbar : ""}`}>
        <ul className={styles.navbarLinks}>
          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/">{dictionary.navbarItems.home}</NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/company">{dictionary.navbarItems.company}</NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/creations">
              {dictionary.navbarItems.creations}
            </NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/archives">{dictionary.navbarItems.archives}</NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/agenda">{dictionary.navbarItems.agenda}</NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/partners">{dictionary.navbarItems.partners}</NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/contact">{dictionary.navbarItems.contact}</NavLink>
          </li>

          {/* Implémentation du sélecteur de langage qui permet à l'utilisateur de modifier la langue du site */}
          <li className={styles.navbarItem}>
            <LanguageSelector />
          </li>
        </ul>
        {/* Burger menu affiché uniquement sur les résolutions inférieures à 601px */}
        <button className={styles.navBurger} onClick={handleShowLinks}>
          <span className={styles.burgerLine}></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
