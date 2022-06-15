import React, { useContext, useEffect } from "react";
import GetUsers from "./GetUsers";
import { MyContext } from "../context/context";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";

export default function Body() {

  const { setToken, bBallCounter, tBallCounter, user, setUser } =

    useContext(MyContext) || {};

  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, [setToken]);

  useEffect(() => {
    const _localName = localStorage.getItem("localName");
    if (_localName) {
      setUser({ ...user, name: _localName });
    }
    const _localId = localStorage.getItem("localId");
    if (_localId) {
      setUser({ ...user, id: _localId });
    }

    console.log(user);
  }, [setUser]);

  return (
    <div className="big-body-box">
      <h1 id="body-header" className="body-header">

        Hi {localStorage.getItem("localName")}. There are{" "}
        {bBallCounter + tBallCounter} people at the courts right now.

      </h1>
      <h3>🎾: {tBallCounter}</h3>
      <h3>🔵: {bBallCounter}</h3>
      <div className="check-in-box">
        {!user ? (
          <h3>
            <a href="/login">Log In </a> or
            <a href="/signup">Sign Up </a> to check in
          </h3>
        ) : (
          //nested conditional render based on [here] (useEffect)
          <>
            {" "}
            <CheckIn /> <CheckOut />
          </>
        )}
      </div>
      <GetUsers />;
    </div>
  );
}
