import React, { useState } from "react";

import bcrypt from "bcryptjs";
import mySalt from "../salt";

const salt = mySalt;

export default function Login({ setToken }) {
  //const [email, setEmail] = useState("");
  const [state, setState] = useState({ email: "", password: "" });

  const handleLogin = ({ email, password }) => {
    console.log(email, password);
    //const hash = bcrypt.hashSync(password, salt);
    //console.log(hash);
    fetch("https://pball-api-bk.web.app/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        setToken(data.token);
        console.log(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form name="login" onSubmit={handleLogin(state)}>
        <input
          type="email"
          id="email"
          className="email"
          placeholder="email"
          value={state.email}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="password"
          id="password"
          className="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
