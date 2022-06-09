import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import GetUsers from "./components/GetUsers";

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
  }, []);

  return (
    <UserListContext.Provider value={{ userList, setUserList }}>
      <div className="App">
        <h1> </h1>
        <div className="check-in-box">
          {token ? (
            <>
              <Login setToken={setToken} /> <SignUp />
            </>
          ) : (
            <h3>Check in / Check Out</h3>
          )}
        </div>
        <GetUsers
          setTBallCounter={setTBallCounter}
          setBBallCounter={setBBallCounter}
        />
      </div>
    </UserListContext.Provider>
  );
}

export default App;

//in court card for (i = 0; i <= aPlayer; i++){
//generate random x/y within coordinates
// return <p style={"x:ranX, y:ranY"}>🎾</p>
// }

//players to display on home page get from  tball + pball pass context
