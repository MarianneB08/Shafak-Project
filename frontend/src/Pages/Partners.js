import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Partners_ltr.module.scss";
import rtlStyles from "./Partners_rtl.module.scss";
import logo1 from "../assets/logo_region_bretagne.png";
import logo2 from "../assets/logo_binic-etable-sur-mer.png";
import logo3 from "../assets/logo_pimoff.png";
import logo4 from "../assets/logo_DRAC_auvergne_rhone-alpes.png";
import logo5 from "../assets/logo_le_croiseur.png";
import logo6 from "../assets/logo_dampfzentrale_bern.png";
import logo7 from "../assets/logo_cnd.png";
import logo8 from "../assets/logo_institut_francais_tanger.png";
import logo9 from "../assets/logo_plerin-sur-mer.png";
import logo10 from "../assets/logo_desoblique.png";
import logo11 from "../assets/logo_la_machinerie_venissieux.png";
import logo12 from "../assets/logo_dansometre.png";
import logo13 from "../assets/logo_tregueux.png";
import logo14 from "../assets/logo_lo_studio.png";
import logo15 from "../assets/logo_cite_culture_tunis.png";
import logo16 from "../assets/logo_centre_arts_dramatiques_sceniques_kef.png";

const Partners = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { dictionary, userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  const logosArray = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
  ];

  return (
    <main className={styles.container}>
      <h1>{dictionary.partnersPage.firstTitle}</h1>
      <section className={styles.logos}>
        {logosArray.map((logo) => {
          return (
            <div className={styles.logoContainer} key={logo}>
              <img src={logo} alt="" className={styles.logo} />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Partners;
