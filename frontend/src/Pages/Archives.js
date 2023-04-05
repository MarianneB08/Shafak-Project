import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext.js";
import ltrStyles from "./Archives_ltr.module.scss";
import rtlStyles from "./Archives_rtl.module.scss";

const Archives = () => {
  const { userLanguage } = useContext(LanguageContext);
  let styles = userLanguage === "ar" ? rtlStyles : ltrStyles;

  return (
    <main className={styles.container}>
      <h1>Archives</h1>
    </main>
  );
};

export default Archives;
