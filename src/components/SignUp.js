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
    ball: "",
  });

  const handleSignup = (newUser) => {
    //fetch POST here
    //.then(() => navigate('/home')
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
    <div>
      <h3>Sign up </h3>
      <form name="signup" onSubmit={handleSignup}>
        email:{" "}
        <input
          type="email"
          name="email"
          className="input-box"
          placeholder="email"
          value={newUser.email}
          onChange={handleChange}
          autoComplete="off"
        />{" "}
        <br />
        Password:{" "}
        <input
          type="password"
          name="password"
          className="input-box"
          placeholder="password"
          value={newUser.password}
          onChange={handleChange}
          autoComplete="off"
        />
        <br />
        First Name:{" "}
        <input
          name="name"
          className="input-box"
          value={newUser.name}
          onChange={handleChange}
          autoComplete="off"
        />
        <div>
          <h4>What do you play?</h4>
          <input
            type="radio"
            value="ball"
            onChange={handleChange}
            name="blue"
          />{" "}
          Big Blue 🔵
          <br />
          <input
            type="radio"
            value="ball"
            onChange={handleChange}
            name="tennis"
          />{" "}
          Tennis Ball 🎾
        </div>
      </form>
    </div>
  );
}
