import React from "react";
import model from "../img/player3d2.png";
import ball from "../img/tball.png";

export default function CourtCard({ title, playerCount, nameList }) {
  let iconArray = [];
  for (let i = 0; i < playerCount; i++) {
    let xRand = Math.floor(Math.random() * 150) - 90;
    let yRand = Math.floor(Math.random() * 100 - 50);
    let randomizedPos = { left: xRand, top: yRand };
    if (title === "A") {
      iconArray.push(
        <p className="icon" style={randomizedPos}>
          🎾
        </p>
      );
    } else if (title === "F") {
      iconArray.push(
        <p className="icon" style={randomizedPos}>
          🟡
        </p>
      );
    } else {
      iconArray.push(
        <p className="icon" style={randomizedPos}>
          🔵
        </p>
      );
    }
  }
  return (
    <>
      <div className="flip-card">
        <div className="wall">
          <div className="line">--------------------------------</div>
        </div>
        <img src={model} className="model" />
        <img src={ball} className="ball" />
        <img src={model} className="model2" />
        {/* <img src={model} className="model3" /> */}

        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3 className="court-title">{title} Court</h3>
            <div>{iconArray}</div>
          </div>

          <div className="flip-card-back">
            <div className="name-box">
              {nameList &&
                nameList.map((name) => {
                  return <p key={name}>{name}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
