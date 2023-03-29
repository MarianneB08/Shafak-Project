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
              <h2>
                {creation.title} – <span>{creation.date}</span>
              </h2>
              <p>{creation.summary}</p>
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
          </div>
          <div className={styles.infos}>
            <p>{creation.infos}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Card;
