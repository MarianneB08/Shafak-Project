// Le composant Layout.js est constitué des composants Header.js et Footer.js.
// Ce composant est appelé une fois pour toutes dans le composant général App.js, où il englobe le Router.

// import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  let location = useLocation();
  return (
    <div>
      {location.pathname === "/" ||
      location.pathname === "/company" ||
      location.pathname === "/creations" ||
      location.pathname === "/archives" ||
      location.pathname === "/agenda" ||
      location.pathname === "/partners" ||
      location.pathname === "/contact" ? (
        <Header />
      ) : null}
      {/* {location.pathname === "*" ? null : <Header />} */}
      {/* <Header /> */}
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
