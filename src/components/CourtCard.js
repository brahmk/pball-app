import React from "react";

export default function CourtCard({ title, playerCount, nameList }) {
  //for loop here, calculate random co-ords, push to array? push jsx to array also, then down in
  //jsx do <div className=icon-box>iconArray</div>
  let iconArray = [];
  for (let i = 0; i < playerCount; i++) {
    let xRand = Math.floor(Math.random() * 110);
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
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3 className="court-title">{title} Court</h3>
          <div>{iconArray}</div>
        </div>
        <div class="flip-card-back">
          <div class="name-box">
            {nameList.map((name) => {
              return <li>{name}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
