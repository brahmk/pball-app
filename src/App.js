import React from "react";
import "./App.css";
import "./App.scss";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { MyContextProvider } from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <MyContextProvider>
        <div className="App">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
