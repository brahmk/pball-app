import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  const { setToken, setUser, user } = useContext(MyContext);

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
        console.log(data.user, "whats dis");
        setToken(data.user.token);
        setUser(data.user);
        console.log(user, "after set");
        localStorage.setItem("localId", data.user.id);
        localStorage.setItem("localName", data.user.name);
        localStorage.setItem("token", data.user.token);
      })
      .then((document.getElementById("success").style = "display:block"))
      .then(() => navigate("/")) //nav to body
      .catch((err) => setError(true));
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
        <br />
        <br />

        <h3 id="success" className="login-text">
          Success!
        </h3>
        {error ? (
          <h3 id="fail" className="login-text">
            Try Again
          </h3>
        ) : null}
      </div>
    </div>
  );
}
