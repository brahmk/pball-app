import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import GetUsers from "./components/GetUsers";
import Hero from "./components/Hero";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Body from "./components/Body";
import { MyContextProvider } from "./context/context";

export const UserListContext = createContext(null);

function App() {
  const [tBallCounter, setTBallCounter] = useState(0);
  const [bBallCounter, setBBallCounter] = useState(0);
  const [token, setToken] = useState();

  return (
    <BrowserRouter>
      <MyContextProvider>
        <div className="App">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
