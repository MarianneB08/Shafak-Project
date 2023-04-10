// Le composant Layout.js est constitué des composants Header.js et Footer.js.
// Ce composant est appelé une fois pour toutes dans le composant général App.js, où il englobe le Router.

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

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