import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import GetUsers from "./components/GetUsers";

export const UserListContext = createContext(null);

function App() {
  const [userList, setUserList] = useState([]);
  const [tBallCounter, setTBallCounter] = useState(0);
  const [bBallCounter, setBBallCounter] = useState(0);

  return (
    <UserListContext.Provider value={{ userList, setUserList }}>
      <div className="App">
        <h1> </h1>
        {/* if token/logged in <Checkin> else <Login> */}
        <GetUsers
          tBallCounter={tBallCounter}
          bBallCounter={bBallCounter}
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
