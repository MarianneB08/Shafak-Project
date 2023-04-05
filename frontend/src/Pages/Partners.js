import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Partners_ltr.module.scss";
import rtlStyles from "./Partners_rtl.module.scss";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.png";
import logo10 from "../assets/10.png";
import logo11 from "../assets/11.png";
import logo12 from "../assets/12.png";
import logo13 from "../assets/13.png";

const Partners = () => {
  // Utilisation de la feuille de style RTL ou LTR en fonction de la langue sélectionnée par l'utilisateur
  const { dictionary, userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <main className={styles.container}>
      <h1>{dictionary.partnersPage.firstTitle}</h1>
      <section className={styles.logos}>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" className={styles.logo7} />
        <img src={logo8} alt="" className={styles.logo8} />
        <img src={logo9} alt="" />
        <img src={logo10} alt="" />
        <img src={logo11} alt="" />
        <img src={logo12} alt="" />
        <img src={logo13} alt="" />
      </section>
    </main>
  );
};

export default Partners;
