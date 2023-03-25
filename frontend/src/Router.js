import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Company from './Pages/Company';
import Creations from './Pages/Creations';
import Agenda from './Pages/Agenda';
import Partners from './Pages/Partners';
import Contact from './Pages/Contact';
import Error from './Pages/Error';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/company" element={<Company/>}/>
                <Route path="/creations" element={<Creations/>}/>
                <Route path="/agenda" element={<Agenda/>}/>
                <Route path="/partners" element={<Partners/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </div>
    );
};

export default Router;