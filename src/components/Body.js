import React, { useContext, useEffect } from "react";
import { MyContextProvider } from "../context/context";
import GetUsers from "./GetUsers";
import Login from "./Login";
import { MyContext } from "../context/context";

export default function Body() {
  const { token, setToken } = useContext(MyContext) || {};

  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, [setToken]);

  return (
    <div>
      <h1>There are 22 people at the courts right now.</h1>
      <div className="check-in-box">
        {!token ? (
          <h3>
            <Login />
          </h3>
        ) : (
          <>Check in / Check out</>
        )}
      </div>
      <GetUsers />
    </div>
  );
}
