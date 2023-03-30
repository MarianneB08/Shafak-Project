import React from "react";
import styles from "./Agenda.module.scss";

const Agenda = () => {
  return (
    <main className={styles.container}>
      <h1>Agenda</h1>
      <div className={styles.datesList}>
        <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>avril 2023</span> – <span className={styles.title}>Le loup</span> – Festival Rabi-Al-Jasad, Tunis,
            Tunisie
          </p>
        </section>
        <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>avril 2023</span> – <span className={styles.title}>Le loup</span> – 24h-du-théâtre-non-stop, Kef,
            Tunisie
          </p>
        </section>
        <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>juin 2023</span> – <span className={styles.title}>Le loup</span> – Festival de danse de Carthage,
            Tunis, Tunisie
          </p>
        </section>
        <section className={styles.date}>
          <p>
            <span className={styles.monthAndYear}>juillet 2023</span> – <span className={styles.title}>Point de vue</span> – Lieux dévoilés
            prochainement
          </p>
        </section>
      </div>
    </main>
  );
};

export default Agenda;
