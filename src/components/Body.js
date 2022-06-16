import React, { useContext, useEffect } from "react";
import { MyContextProvider } from "../context/context";
import GetUsers from "./GetUsers";
import Login from "./Login";
import { MyContext } from "../context/context";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import userEvent from "@testing-library/user-event";

export default function Body() {
  const {
    token,
    setToken,
    bBallCounter,
    tBallCounter,
    user,
    userList,
    setUser,
    here,
  } = useContext(MyContext) || {};
  console.log(user);

  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token); //call login function ?
    }
  }, [setToken]);

  useEffect(() => {
    const _localName = localStorage.getItem("localName");
    if (_localName) {
      setUser((prevState) => ({ ...prevState, name: _localName }));
    }
    const _localId = localStorage.getItem("localId");
    if (_localId) {
      setUser((prevState) => ({ ...prevState, id: _localId }));
    }

    console.log(user, "set from body!");
  }, [setUser]);
  return (
    <>
      <div className="big-body-box">
        <h1 id="body-header" className="body-header">
          Hi {user.name}
          <br /> There are {bBallCounter + tBallCounter} people at the courts
          right now.
        </h1>

        {!user.id ? (
          <h3>
            <a href="/login">Log In </a> or
            <a href="/signup"> Sign Up </a> to check in
          </h3>
        ) : (
          //nested conditional render based on [here] (useEffect)
          <>
            {" "}
            <CheckIn /> <CheckOut />
          </>
        )}
      </div>

      <div>
        <h3>🎾: {tBallCounter}</h3>
        <h3>🔵: {bBallCounter}</h3>
      </div>
      <div className="get-users">
        <GetUsers />;
      </div>
    </>
  );
}
