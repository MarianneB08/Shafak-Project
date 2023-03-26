import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faVimeoSquare,
} from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.legals}>
        <p>© 2023 Compagnie Shafak. Tous droits réservés.</p>
        <p>Mentions légales</p>
      </section>
      <section className={styles.social}>
        <a
          href={`https://www.instagram.com/compagnie.shafak/?hl=fr`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a
          href={`https://www.facebook.com/cieshafak/?locale=hi_IN`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a
          href={`https://vimeo.com/user9763163`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faVimeoSquare} />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
