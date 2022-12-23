import React from "react";
import UsersCard from "../components/Users/UsersCard";

function User() {
  const userData = {
    nombre: "Daniel",
    ciudad: "Cuarramba",
  };

  return (
    <div>
      <UsersCard userData={userData}></UsersCard>
    </div>
  );
}

export default User;