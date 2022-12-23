import React from "react";
import "./assets/global.css";

import Login from "./views/Login";
import Gap from "./components/utils/Gap";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Users from "./views/Users";
import User from "./views/User";
import Register from "./views/Register";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "./assets/Logo";
import Flex from "./components/Utils/Flex";
import ProfessionalPanel from "./views/Panel/ProfessionalPanel";

export default function App() {


    return (
      <div>
  
       <Nav>
          <Flex>
          <Link to="/"><Logo></Logo></Link>
          <Link to="/"><b className="h1l">Profesional</b></Link>
          <Gap>0.5rem</Gap>
          <Link to="/register">REGISTRARME</Link>
          <Gap>0.5rem</Gap>
          <Link to="/login"><b>Entry</b></Link>
          </Flex>
       </Nav>
  
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route> 
          <Route path="panel" element={<ProfessionalPanel></ProfessionalPanel>}></Route> 
          <Route path="/user" element={<Users></Users>}></Route>
          <Route path="/user/:name" element={<User></User>}></Route>
          <Route path="/*" element={<h1> 404 Not Found</h1>}></Route>
        </Routes>
      </div>
    );
  }