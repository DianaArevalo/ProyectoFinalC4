import React, { useState } from "react";
import Card from "../components/utils/Card";
import Button from "../components/forms/Button";
import Gap from "../components/utils/Gap";
import Input from "../components/forms/Input";
import { Link } from "react-router-dom";

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
        <h1 className="h13">LOGIN</h1>
        <Gap>2rem</Gap>
        <Input value={user} onChange={(v) => setUser(v.target.value)}>
          User Name
        </Input>
        <Gap>2rem</Gap>
        <Input
          type="password"
          value={password}
          onChange={(v) => setPassword(v.target.value)}
        >
          Password
        </Input>
        <Gap>2rem</Gap>
        <Link to="/panel">  <Button type="submit">
          <b>Ingresar</b>
        </Button></Link>
      </Card>
    </form>
  );
}
