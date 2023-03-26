import React from "react";
import Footer from "./Footer";
import Header from "./Header";

// Composant Layout constitué des composants Header.js et Footer.js et appelé une fois pour toutes dans le composant général App.js
const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
