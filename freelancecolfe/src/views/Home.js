import React from "react";
import Container from "../components/Utils/Container";
import "./home.css";
import Gap from "../components/Utils/Gap";


function Home() {
  return (
    <section className="home">
      <Gap>2rem</Gap>
      <Container maxWidth="90rem" className="home">
        <h1>Bienvenido</h1>
        <h3>En FreelanceCol</h3>
        <p>Encuentra los mejores empleos como freelance y cursos de desarrolo del país</p>
      </Container>
    </section>
  );
}

export default Home;
