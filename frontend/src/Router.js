import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Creations from './pages/Creations';
import Agenda from './pages/Agenda';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Error from './pages/Error';

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
