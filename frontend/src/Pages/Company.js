import React from "react";
import styles from "./Company.module.scss";

const Company = () => {
  return (
    <main className={styles.container}>
      <article className={styles.aboutCompany}>
        <h2>La compagnie</h2>
        <p>
          La Compagnie Shafak, a été fondée en octobre 2017 à Lyon, de la
          rencontre d'artistes partageant un même désir créatif. La compagnie se
          délocalise et s’installe en Bretagne, à Binic-Etables-sur-Mer, début
          2022.
        </p>
        <p>
          <span>Shafak</span>, ou <span>crépuscule</span>, c’est l’ambition de
          n’appartenir ni au jour ni à la nuit, métis d’idées et de créativité.
          La Compagnie Shafak cherche à faire sens dans son authenticité, dans
          une démarche honnête avec le public et ses collaborateurs.
        </p>
        <p>
          Pour la compagnie, le corps est une zone crépusculaire, un véhicule
          d’émotions, de sensations, de cicatrices, de poésie. Le corps n’est
          pas une zone neutre, il est à lui-même un paysage sensible et capable
          de dire beaucoup. Plus qu’une carcasse, c’est une création commune et
          unique à la fois, donc un fantastique moyen d’échanger, de rencontrer,
          de comprendre et d’explorer. C’est à travers ce fantastique outil que
          les artistes de la compagnie déploient leur créativité.
        </p>
        <p>
          Larbi Namouchi et Margot Libanga, tous deux co-directeurs artistiques
          de la compagnie, se sont rencontrés en tant qu’interprètes auprès de
          la Compagnie La Baraka en 2019. Depuis leur rencontre, les projets
          s’enchaînent et affirment un peu plus, chaque fois, leur acharnement
          artistique.
        </p>
        <p>Margot Libanga & Larbi Namouchi</p>
      </article>
      <article className={styles.aboutDancers}>
        <h2>Les directeurs artistiques</h2>
        <div className={styles.sectionsContainer}>
          <section className={styles.larbiSection}>
            <h3>Larbi Lamouchi</h3>
            <p>
              Né en 1984 à Tunis, fasciné très tôt par le Cirque et les arts
              martiaux, Larbi Namouchi, enfant, débute par les danses de la
              culture hip-hop, les danses traditionnelles et Soufi. Entre 1998
              et 2005, il rejoint des compagnies comme celles de Syhem
              Belkhodja, Imed Jemaa. En 2005, il obtient une bourse et étudie à
              l’Académie Internationale de la Danse de Paris, au sein d’une
              formation multidisciplinaire.
            </p>
            <p>
              Depuis il travaille et multiplie les rencontres, échanges et
              collaborations avec de nombreux chorégraphes et artistes provenant
              de disciplines différentes comme Yann Lheureux, Fabienne Berger,
              Boris Charmatz, Benoît Lachambre, Tonia Shilling, Abou Lagraa,
              Sandra Martinez Dahou, Omar Ghayatt, Christophe Honoré, Ashley
              Wright, Hafiz Dhaou et Aïcha M’Barek. Larbi Namouchi participe à
              plusieurs festivals, projets vidéo-danse, films et performances.
              En 2017, il fonde à Lyon la Compagnie Shafak. Il ne cesse depuis
              de travailler et d’explorer à travers ses œuvres et celles
              d’autrui, tout en restant libre et mobile, de corps et d’esprit.
            </p>
          </section>
          <section className={styles.margotSection}>
            <h3>Margot Libanga</h3>
            <p>
              Versatile, elle s’intéresse très tôt à diverses formes d’arts
              vivants, comme le théâtre contemporain et classique, le chant
              gospel, ainsi que les danses hip-hop et jazz. Formée entre la
              France et l’Allemagne en danse contemporaine et en lettres
              modernes, elle a depuis travaillé pour diverses chorégraphes, tous
              aux extrêmes du genre : Abou Lagraa et Nawal Aït Benalla
              (Compagnie La Baraka), Abdou N’Gom, Anna Anderegg (Asphalt
              Piloten), Franka Marlene Foth (FMKF) et Johana Malédon (Compagnie
              Mâle).
            </p>
            <p>
              Sa danse est hybride, de par ses multiples influences. Son univers
              s’exprime dans le contraste des rythmes, les qualités plurielles
              en force et niveaux, l’adresse multidirectionnelle du corps et
              l’usage de la voix. Elle s’adresse aux corps comme partie commune
              aux individus, comme terrain de jeux pour exprimer sa singularité.
              Margot Libanga est danseuse, artiste du mouvement et, depuis 2020,
              chorégraphe, co-directrice artistique et directrice de production
              pour la Compagnie Shafak, aux côtés de Larbi Namouchi.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default Company;
