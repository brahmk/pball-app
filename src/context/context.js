import { createContext, useState } from "react";

export const MyContext = createContext({});

export function MyContextProvider({ children }) {
  const { Provider } = MyContext;
  const [token, setToken] = useState();
  const [user, setUser] = useState({});
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [userList, setUserList] = useState([]);
  const [bBallCounter, setBBallCounter] = useState(0);
  const [tBallCounter, setTBallCounter] = useState(0);
  const [playerList, setPlayerList] = useState({});
  const [here, setHere] = useState(false);
  const [localUser, setLocalUser] = useState({});

  const value = {
    token,
    setToken,
    user,
    setUser,
    totalPlayers,
    setTotalPlayers,
    userList,
    setUserList,
    bBallCounter,
    setBBallCounter,
    tBallCounter,
    setTBallCounter,
    here,
    setHere,
    localUser,
    setLocalUser,
    playerList,
    setPlayerList,
  };

  return <Provider value={value}>{children}</Provider>;
}
