import React from 'react';
import {Login} from "./components/forms/Login.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Register from "./components/forms/Register";


export default function App(){
    return (
        <Router>
            <Routes>
            <Route exact path="/" element={<Login/>}/>
             <Route path = "/crear-cuenta" element= {<Register/>}/>
            <Route path = "/perfil" element = {<ProfileClient/>}/>
             <Route path = "/puntaje" element = {<ScoreClient/>}/>
             <Route path = "/reservas" element = {<ReservationClient/>}/>
            </Routes>
        </Router>
    );
}

 //App;