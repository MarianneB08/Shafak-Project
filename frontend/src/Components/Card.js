import styles from "./Card.module.scss";
import dataFile from "../data/creations.json";

const Card = () => {
  return (
    <section className={styles.container}>
      {dataFile.map((creation) => (
        <article className={styles.card}>
          <div className={styles.details}>
            <img src={creation.img.file} alt={`creation ${creation.title}`} />
            <div className={styles.detailsText}>
              <h2>{creation.title}</h2>
              <p>{creation.date}</p>
              <p>{creation.summary}</p>
            </div>
          </div>
          <div className={styles.infos}>
            <p
              className={
                creation.statut === "Passée"
                  ? styles.oldCreation
                  : styles.newCreation
              }
            >
              {creation.infos}
            </p>
            {creation.img.legals !== "" ? (
              <p className={styles.legals}>Crédits photo : {creation.img.legals}</p>
            ) : null}
            {creation.teaser !== "" ? (
              <a
                href={creation.teaser}
                target="_blank"
                rel="noopener noreferrer"
              >
                Teaser
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Card;
