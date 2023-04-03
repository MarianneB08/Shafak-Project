import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState, useContext } from "react";
import LanguageSelector from "./LanguageSelector";
import { Text, LanguageContext } from "../store/languageContext.js";

const Header = () => {
  const { dictionary } = useContext(LanguageContext);
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className={styles.container}>
      <h1>Compagnie Shafak</h1>
      <nav className={`${styles.navbar} ${showLinks ? styles.showNavbar : ""}`}>
        <ul className={styles.navbarLinks}>
          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/"><Text tid="Home"/></NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/company">{dictionary.Company}</NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/creations"><Text tid="Creations"/></NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/agenda"><Text tid="Agenda"/></NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/partners"><Text tid="Partners"/></NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/contact"><Text tid="Contact"/></NavLink>
          </li>
        </ul>
        <button className={styles.navBurger} onClick={handleShowLinks}>
          <span className={styles.burgerLine}></span>
        </button>
        <LanguageSelector />
      </nav>
    </header>
  );
};

export default Header;
