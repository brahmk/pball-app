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
  // const [userList, setUserList] = useState([]);
  //setHere in useeffect
  //set playercounters as statevariables in context, use effect to setBBallCounter + tBall counter

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

//pass values back up to parent as state
//pass  {setTBallCounter} into component to alter state or usecontext

//court as object {} court.playerCount, court.name, court.playerNames }

// import React, { useEffect, useContext, useState } from "react";
// import CourtCard from "./CourtCard";
// import "../App.css";
// import { MyContext } from "../context/context";
// import axios from "axios";

// export default function GetUsers() {
//   const { setBBallCounter, setTBallCounter, setHere, here } =
//     useContext(MyContext);
//   const [userList, setUserList] = useState([]);
//   //setHere in useeffect
//   //set playercounters as statevariables in context, use effect to setBBallCounter + tBall counter

//   //const [tBallPlayers, setTballPlayers] = useState(0);
//   //const [bBallPlayers, setBballPlayers] = useState(0);
//   const [courtCounters, setCourtCounters] = useState({
//     a: 0,
//     b: 0,
//     c: 0,
//     d: 0,
//     e: 0,
//     f: 0,
//   });

//   const [nameArrays, setNameArrays] = useState([]);

//   let aNames = [],
//     bNames = [],
//     cNames = [],
//     dNames = [],
//     eNames = [],
//     fNames = [];
//   let a = 0,
//     b = 0,
//     c = 0,
//     d = 0,
//     e = 0,
//     f = 0,
//     tBallPlayers = 0,
//     bBallPlayers = 0;

//   useEffect(() => {
//     axios
//       .get("https://pball-api-bk.web.app/users")
//       .then((res) => setUserList(res.data))
//       .then(console.log(userList))
//       .catch(console.error);
//   }, []);

//   userList.map((user) => {
//     console.log(user);
//     if (user.atCourt) {
//       user.ball === "blue" ? bBallPlayers++ : tBallPlayers++;

//       switch (user.homeCourt) {
//         case "a":
//           a++;
//           aNames.push(user.name);
//           console.log(a);
//           console.log(aNames);
//           break;

//         case "b":
//           b++;
//           bNames.push(user.name);
//           break;
//         case "c":
//           c++;
//           cNames.push(user.name);
//           break;
//         case "d":
//           d++;
//           dNames.push(user.name);
//           break;
//         case "e":
//           e++;
//           eNames.push(user.name);
//           break;
//         case "f":
//           f++;
//           fNames.push(user.name);
//           break;
//       }
//     }
//     let bigNameArray = [];
//     bigNameArray.push(aNames, bNames, cNames, dNames, eNames, fNames);
//     setCourtCounters({ a, b, c, d, e, f });
//     setNameArrays(bigNameArray);
//   });

//   console.log(nameArrays);
//   console.log(courtCounters);

//   return (
//     <>
//       {!userList ? (
//         <h2>loading...</h2>
//       ) : (
//         <div className="card-box">
//           <CourtCard
//             key="d"
//             title="D"
//             playerCount={courtCounters.d}
//             nameList={nameArrays[3]}
//           />
//           <CourtCard
//             key="e"
//             title="E"
//             playerCount={courtCounters.e}
//             nameList={nameArrays[4]}
//           />
//           <CourtCard
//             key="f"
//             title="F"
//             playerCount={courtCounters.f}
//             nameList={nameArrays[5]}
//           />
//           <CourtCard
//             key="c"
//             title="C"
//             playerCount={courtCounters.c}
//             nameList={nameArrays[2]}
//           />
//           <CourtCard
//             key="b"
//             title="B"
//             playerCount={courtCounters.b}
//             nameList={nameArrays[2]}
//           />
//           <CourtCard
//             key="a"
//             title="A"
//             playerCount={courtCounters.aCount}
//             nameList={nameArrays[0]}
//           />
//         </div>
//       )}
//     </>
//   );
// }

//pass values back up to parent as state
//pass  {setTBallCounter} into component to alter state or usecontext

//court as object {} court.playerCount, court.name, court.playerNames }
