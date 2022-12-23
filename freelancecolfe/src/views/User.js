import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { name } = useParams();
  return (<h1>Usuario: {name}</h1>);
}

export default User;