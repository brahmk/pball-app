import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/context";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const { user, setUser } = useContext(MyContext);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
    axios
      .post("https://pball-api-bk.web.app/login", {
        email,
        password,
      })
      .then((res) => res.data)
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        console.log(data);
        setToken(data.id);
        setUser(data);
        console.log(data.token);
        localStorage.setItem("token", data.token);
      })
      .then(() => navigate("/")) //nav to body
      .catch((err) => console.log(err));
  };

  return (
    <div className="background">
      <div className="signup-box">
        <h1>
          <u>Login</u>
        </h1>
        <form name="login" onSubmit={handleLogin}>
          email: <br />
          <input
            type="email"
            id="email"
            className="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
            autoComplete="new-off"
          />
          <br />
          <br />
          password:
          <br />
          <input
            type="password"
            id="password"
            className="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
          <br />
          <br />
          <br />
          <br />
          <button className="button bouncy" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
