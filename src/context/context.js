import { createContext, useState } from "react";

export const MyContext = createContext({});

export function MyContextProvider({ children }) {
  const { Provider } = MyContext;
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [totalPlayers, setTotalPlayers] = useState();
  const [userList, setUserList] = useState([]);

  const value = {
    token,
    setToken,
    user,
    setUser,
    totalPlayers,
    setTotalPlayers,
    userList,
    setUserList,
  };

  return <Provider value={value}>{children}</Provider>;
}
