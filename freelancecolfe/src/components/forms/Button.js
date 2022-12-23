import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "./forms.css";

function Button(props) {
  const { children, type, onClick, } = props;

  return (
    <button className="btn btn-primary" type={type} onClick={onClick}>
    {children}
    </button>
  );
}

export default Button;