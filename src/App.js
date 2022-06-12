import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import GetUsers from "./components/GetUsers";
import Hero from "./components/Hero";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export const UserListContext = createContext(null);

function App() {
  const [userList, setUserList] = useState([]);
  const [tBallCounter, setTBallCounter] = useState(0);
  const [bBallCounter, setBBallCounter] = useState(0);
  const [token, setToken] = useState();
  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, [setToken]);

  return (
    <BrowserRouter>
      <UserListContext.Provider value={{ userList, setUserList }}>
        <div className="App">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Home />} />
          </Routes>
          <Navbar />
          <Hero />
          <div className="check-in-box">
            {!token ? (
              <h3>Check in / Check Out</h3>
            ) : (
              <>logged in{/* <Login setToken={setToken} /> <SignUp /> */}</>
            )}
          </div>
          <GetUsers
            setTBallCounter={setTBallCounter}
            setBBallCounter={setBBallCounter}
          />
        </div>
      </UserListContext.Provider>
    </BrowserRouter>
  );
}

export default App;

//in court card for (i = 0; i <= aPlayer; i++){
//generate random x/y within coordinates
// return <p style={"x:ranX, y:ranY"}>🎾</p>
// }

//players to display on home page get from  tball + pball pass context
