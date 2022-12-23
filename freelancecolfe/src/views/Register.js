import React, { useState } from "react";
import Card from "../components/utils/Card";
import Button from "../components/forms/Button";
import Gap from "../components/utils/Gap";
import Input from "../components/forms/Input";

export default function Login() {
  async function onSubmit(e) {
    e.preventDefault();

    const res = fetch("http://localhost:8081/professionals/login", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application.json",
        user: user,
        password: password,
      },
    });

    alert(res.message);
  }

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <Card padding="2rem" borderRadius="1rem">
        <h1 className="h13">REGISTRO</h1>
        <Gap>2rem</Gap>
        <Input>Nombre de usuario</Input>
        <Gap>1rem</Gap>
        <Input>Edad</Input>
        <Gap>1rem</Gap>
        <Input>Profesion</Input>
        <Gap>1rem</Gap>
        <Input>Correo</Input>
        <Gap>1rem</Gap>
        <Input>Telefono</Input>
        <Gap>1rem</Gap>
        <Input type="password">
          Password
        </Input>
        <Gap>2rem</Gap>
        <Button type="submit">
          <b>CONFIRMAR</b>
        </Button>
      </Card>
    </form>
  );
}