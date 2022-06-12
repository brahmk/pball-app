import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  let navigate = useNavigate;
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    atCourt: false,
    homeCourt: "",
    ball: "blue",
  });

  const handleSignup = () => {
    newUser.email = newUser.email.toLowerCase();
    fetch("https://pball-api-bk.web.app/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(newUser),
    })
      .then(console.log("user added!"))
      .catch((err) => console.log(err));
  };

  //fetch POST here
  //.then(() => navigate('/login')

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNewUser({
      ...newUser,
      [e.target.name]: newValue,
    });
    console.log(newUser);
  };

  return (
    <div>
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
          <div>
            <select name="homeCourt" onChange={handleChange}>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
            <p></p>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

/* <div> hidden radios
          <label>
            <input
              className="hidden-radio"
              type="radio"
              name="homeCourt"
              value="a"
              onChange={handleChange}
            />
            <img src="https://m.media-amazon.com/images/I/61R9e+OIEFS._AC_SY679_.jpg" />
          </label>

          <label>
            <input
              className="hidden-radio"
              type="radio"
              name="homeCourt"
              onChange={handleChange}
              value="b"
            />
            <img src="https://m.media-amazon.com/images/I/61R9e+OIEFS._AC_SY679_.jpg" />
          </label>
        </div> */
