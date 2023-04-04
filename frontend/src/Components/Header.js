import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState, useContext } from "react";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "../store/languageContext.js";

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
            <NavLink to="/agenda">{dictionary.navbarItems.agenda}</NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/partners">{dictionary.navbarItems.partners}</NavLink>
          </li>

          <li className={styles.navbarItem} onClick={handleShowLinks}>
            <NavLink to="/contact">{dictionary.navbarItems.contact}</NavLink>
          </li>
          <li className={styles.navbarItem}>
            <LanguageSelector/>
          </li>
        </ul>
        <button className={styles.navBurger} onClick={handleShowLinks}>
          <span className={styles.burgerLine}></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
