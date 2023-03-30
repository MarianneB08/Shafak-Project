import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <header className={styles.container}>
      <h1>Compagnie Shafak</h1>
      <nav className={`${styles.navbar} ${showLinks ? styles.showNavbar : ""}` }>
        <ul className={styles.navbarLinks}>
          <li className={styles.navbarItem}>
            <NavLink to="/">Accueil</NavLink>
          </li>

          <li className={styles.navbarItem}>
            <NavLink to="/company">La compagnie</NavLink>
          </li>

          <li className={styles.navbarItem}>
            <NavLink to="/creations">Créations</NavLink>
          </li>

          <li className={styles.navbarItem}>
            <NavLink to="/agenda">Agenda</NavLink>
          </li>

          <li className={styles.navbarItem}>
            <NavLink to="/partners">Partenaires</NavLink>
          </li>

          <li className={styles.navbarItem}>
            <NavLink to="/contact">Contact</NavLink>
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
