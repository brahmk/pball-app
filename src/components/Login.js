import React, { useState } from "react";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
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

  return (
    <div>
      <h1>Login</h1>
      <form name="login" onSubmit={handleLogin}>
        <input
          type="email"
          id="email"
          className="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
          autoComplete="off"
        />
        <input
          type="password"
          id="password"
          className="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
