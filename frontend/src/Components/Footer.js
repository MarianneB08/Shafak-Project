import React, { useState } from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faVimeoSquare,
} from "@fortawesome/free-brands-svg-icons";
import Popup from "./Popup";

const Footer = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <footer className={styles.container}>
      <section className={styles.legals}>
        <div className={styles.legalsDetails}>
          <p>© 2023 Compagnie Shafak. Tous droits réservés.</p>
          <p onClick={() => setButtonPopup(true)}>Mentions légales</p>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
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
