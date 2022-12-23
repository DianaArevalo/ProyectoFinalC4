import React from "react";
import "./global";
import logo from "./logo"

function Logo(props) {
  return (
   <div>
      <img src = {logo}></img>
      <h1 className="logo-title">FreelanceCol</h1>
   </div>  
  );
}

export default Logo;