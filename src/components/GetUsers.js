import React, { useEffect, useContext } from "react";
import CourtCard from "./CourtCard";
import "../App.css";
import { MyContext } from "../context/context";
import axios from "axios";

export default function GetUsers() {
  const {
    setBBallCounter,
    setTBallCounter,
    playerList,
    setPlayerList,
    userList,
    setUserList,
  } = useContext(MyContext);

  useEffect(() => {
    axios
      .get("https://pball-api-bk.web.app/users")
      .then((res) => setUserList(res.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    let tBallPlayers = 0,
      bBallPlayers = 0,
      aCourtPlayers = 0,
      bCourtPlayers = 0,
      cCourtPlayers = 0,
      dCourtPlayers = 0,
      eCourtPlayers = 0,
      fCourtPlayers = 0;
    let aNames = [],
      bNames = [],
      cNames = [],
      dNames = [],
      eNames = [],
      fNames = [];

    userList &&
      userList.forEach((user) => {
        if (user.atCourt) {
          user.ball === "blue" ? bBallPlayers++ : tBallPlayers++;

          switch (user.homeCourt) {
            case "a":
              aCourtPlayers++;
              aNames.push(user.name);

              break;
            case "b":
              bCourtPlayers++;
              bNames.push(user.name);
              break;
            case "c":
              cCourtPlayers++;
              cNames.push(user.name);
              break;
            case "d":
              dCourtPlayers++;
              dNames.push(user.name);
              break;
            case "e":
              eCourtPlayers++;
              eNames.push(user.name);
              break;
            case "f":
              fCourtPlayers++;
              fNames.push(user.name);
              break;
          }
        }
        setPlayerList({
          tBallPlayers,
          bBallPlayers,
          aCourtPlayers,
          bCourtPlayers,
          cCourtPlayers,
          dCourtPlayers,
          eCourtPlayers,
          fCourtPlayers,
          aNames,
          bNames,
          cNames,
          dNames,
          eNames,
          fNames,
        });
      });
  }, [userList]);

  if (!userList) {
    return <p>Loading...</p>;
  }

  setBBallCounter(playerList.bBallPlayers);
  setTBallCounter(playerList.tBallPlayers);
  return (
    <>
      <div className="card-box">
        <CourtCard
          title="D"
          playerCount={playerList.dCourtPlayers}
          nameList={playerList.dNames}
        />
        <CourtCard
          title="E"
          playerCount={playerList.eCourtPlayers}
          nameList={playerList.eNames}
        />
        <CourtCard
          title="F"
          playerCount={playerList.fCourtPlayers}
          nameList={playerList.fNames}
        />
        <CourtCard
          title="C"
          playerCount={playerList.cCourtPlayers}
          nameList={playerList.cNames}
        />
        <CourtCard
          title="B"
          playerCount={playerList.bCourtPlayers}
          nameList={playerList.bNames}
        />
        <CourtCard
          title="A"
          playerCount={playerList.aCourtPlayers}
          nameList={playerList.aNames}
        />
      </div>
    </>
  );
}
