import React, { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./WaitingScreen_ltr.module.scss";
import rtlStyles from "./WaitingScreen_rtl.module.scss";
import picture from "../assets/CARTHAGE 16.jpg";

const WaitingScreen = () => {
    const { dictionary, userLanguage } = useContext(LanguageContext);
    let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;


return (
<section className={styles.container}>
        <img src={picture} className={styles.picture} alt="Pièce « Le Loup » au Festival Carthage Dance"/>
      <p className={styles.text}>
        {dictionary.waitingScreenText.text}
      </p>
    </section>
)
}   

export default WaitingScreen;