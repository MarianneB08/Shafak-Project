import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Compagnie Shafak</h1>
      <nav className={styles.nav}>
        <ul className={styles.navItems}>
          <div>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink to="/company">La compagnie</NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink to="/creations">Créations</NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink to="/agenda">Agenda</NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink to="/partners">Partenaires</NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
