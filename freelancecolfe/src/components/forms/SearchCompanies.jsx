import React from "react";
import Container from "../components/Utils/Container";
import "./MenuClient";

import "./home.css";
import Gap from "../components/Gap";


function searchCompanies() {
  return (
    <section className="home">
      <Gap>2rem</Gap>
      <Container maxWidth="90rem" className="home">
        <h1>Bienvenido</h1>
        <h3>En FreelanceCol Company</h3>
        <p>Encuentra los mejores Developers del país</p>
      </Container>
    </section>
  );
}

export default searchCompanies;