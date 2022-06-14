import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import acourt from "../img/acourt.png";
import bcourt from "../img/bcourt.png";
import ccourt from "../img/ccourt.png";
import dcourt from "../img/dcourt.png";
import ecourt from "../img/ecourt.png";
import fcourt from "../img/fcourt.png";

export default function SignUp() {
  let navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    atCourt: false,
    homeCourt: "",
    ball: "blue",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    newUser.email = newUser.email.toLowerCase();
    axios
      .post("https://pball-api-bk.web.app/signup", {
        newUser,
      })
      .then(console.log("user added!")) //make user added visible to user
      .then(() => navigate("/login")) //nav to body
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNewUser({
      ...newUser,
      [e.target.name]: newValue,
    });
    console.log(newUser);
  };

  return (
    <div className="background">
      <div className="signup-box">
        <br />
        <h2>
          <u>Sign Up</u>
        </h2>
        <form name="signup" onSubmit={handleSignup}>
          email: <br />
          <input
            type="text"
            name="email"
            className="input-box"
            value={newUser.email}
            onChange={handleChange}
            autoComplete="off"
          />{" "}
          <br />
          <br />
          password: <br />
          <input
            type="password"
            name="password"
            className="input-box"
            value={newUser.password}
            onChange={handleChange}
            autoComplete="off"
          />
          <br />
          <br />
          display name: <br />
          <input
            type="text"
            name="name"
            className="input-box"
            value={newUser.name}
            onChange={handleChange}
            autoComplete="off"
          />
          <br />
          <br />
          <div>
            what do you play?
            <br />
            <input
              type="radio"
              value="blue"
              onChange={handleChange}
              name="ball"
            />{" "}
            Big Blue 🔵
            <br />
            <input
              type="radio"
              value="tennis"
              onChange={handleChange}
              name="ball"
            />{" "}
            Tennis Ball 🎾
          </div>
          <br />
          <div>
            what court do you play on most often?{" "}
            <div className="hidden-radio-box">
              <label>
                <input
                  className="hidden-radio"
                  type="radio"
                  name="homeCourt"
                  value="d"
                  onChange={handleChange}
                />
                <img src={dcourt} alt="d court" className="court-radio" />
              </label>
              <label>
                <input
                  className="hidden-radio"
                  type="radio"
                  name="homeCourt"
                  onChange={handleChange}
                  value="e"
                />
                <img src={ecourt} className="hidden-radio" />
              </label>
              <label>
                <input
                  className="hidden-radio"
                  type="radio"
                  name="homeCourt"
                  value="f"
                  onChange={handleChange}
                />
                <img src={fcourt} alt="d court" className="court-radio" />
              </label>
              <label>
                <input
                  className="hidden-radio"
                  type="radio"
                  name="homeCourt"
                  onChange={handleChange}
                  value="c"
                />
                <img src={ccourt} className="hidden-radio" />
              </label>
              <label>
                <input
                  className="hidden-radio"
                  type="radio"
                  name="homeCourt"
                  value="b"
                  onChange={handleChange}
                />
                <img src={bcourt} alt="d court" className="court-radio" />
              </label>
              <label>
                <input
                  className="hidden-radio"
                  type="radio"
                  name="homeCourt"
                  onChange={handleChange}
                  value="a"
                />
                <img src={acourt} className="hidden-radio" />
              </label>
            </div>{" "}
            <p></p>
          </div>
          <button className="button bouncy" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

//   <select name="homeCourt" onChange={handleChange}>
//   <option value="a">A</option>
//   <option value="b">B</option>
//   <option value="c">C</option>
//   <option value="d">D</option>
//   <option value="e">E</option>
//   <option value="f">F</option>
// </select>
