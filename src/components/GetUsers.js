import React, { useEffect, useContext, useState, Spinner } from "react";
import { UserListContext } from "../App";
import CourtCard from "./CourtCard";
import "../App.css";

export default function GetUsers({ setTBallCounter, setBBallCounter }) {
  //const { userList, setUserList } = useContext(UserListContext);
  const [userList, setUserList] = useState([]);

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

  useEffect(() => {
    fetch("https://pball-api-bk.web.app/users")
      .then((res) => res.json())
      .then(setUserList)
      .catch(console.error);
  }, []);

  userList.map((user) => {
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
  });
  setBBallCounter(bBallPlayers);
  setTBallCounter(tBallPlayers);
  return (
    <>
      {/* {setBBallCounter(bBallCounter)}
      {setTBallCounter(tBallCounter)} this creates infinite loop XD */}

      {/********* *front page tests *****<p> 
       🎾 : {tBallCounter} </p>
      <p> 🔵 : {bBallCounter}</p> */}
      {/* <p>There are {aCourtPlayers} players on A court</p>
      <p>There are {aCourtPlayers} players on E court</p>
      <p>{aNames[0] + " and " + aNames[1]} are playing on A court</p>
      <p>{eNames[0] + " and " + eNames[1]} are playing on E court</p> */}

      <div className="card-box">
        <CourtCard title="A" playerCount={aCourtPlayers} nameList={aNames} />
        <CourtCard title="B" playerCount={bCourtPlayers} nameList={bNames} />
        <CourtCard title="C" playerCount={cCourtPlayers} nameList={cNames} />
        <CourtCard title="D" playerCount={dCourtPlayers} nameList={dNames} />
        <CourtCard title="E" playerCount={eCourtPlayers} nameList={eNames} />
        <CourtCard title="F" playerCount={fCourtPlayers} nameList={fNames} />
      </div>
    </>
  );
}

//pass values back up to parent as state
//pass  {setTBallCounter} into component to alter state or usecontext

//court as object {} court.playerCount, court.name, court.playerNames }
