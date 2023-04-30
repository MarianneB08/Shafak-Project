import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Creations from "./pages/Creations";
import Agenda from "./pages/Agenda";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Error from "./pages/404";
import Archives from "./pages/Archives";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/creations" element={<Creations />} />
        <Route exact path="/archives" element={<Archives />} />
        <Route exact path="/agenda" element={<Agenda />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Router;
