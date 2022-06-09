import React from "react";

export default function CourtCard({ title, playerCount, nameList }) {
  let iconArray = [];
  for (let i = 0; i < playerCount; i++) {
    let xRand = Math.floor(Math.random() * 150) - 90;
    let yRand = Math.floor(Math.random() * 164);
    let randomizedPos = { left: xRand, top: yRand };
    if (title === "A") {
      iconArray.push(
        <p className="icon" style={randomizedPos}>
          🎾
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
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3 className="court-title">{title} Court</h3>
          <div>{iconArray}</div>
        </div>
        <div className="flip-card-back">
          <div className="name-box">
            {nameList.map((name) => {
              return <li>{name}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
