import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <main className={styles.container}>
      <h2>Contact</h2>
      <section className={styles.details}>
        <h2>Compagnie Shafak</h2>
        <p className={styles.directors}>Directeurs artistiques</p>
        <h3>Larbi Namouchi & Margot Libanga</h3>
        <div className={styles.directorsEmailContainer}>
          <a
            className={styles.directorsEmail}
            href="mailto:cieshafak@gmail.com"
          >
            cieshafak@gmail.com
          </a>
        </div>
        <p className={styles.administration}>Administration</p>
        <a
          className={styles.administrationEmail}
          href="mailto:admi.shafak@gmail.com"
        >
          admi.shafak@gmail.com
        </a>
        <p className={styles.administrationPhone}>07 67 34 83 62</p>
        <div className={styles.adress}>
          <p>10, rue des Terre Neuvas</p>
          <p>22520 Binic-Étables-sur-Mer</p>
        </div>
        <div className={styles.society}>
          <p>SIRET : 851 268 672 00025</p>
          <p>APE : 9001Z</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
