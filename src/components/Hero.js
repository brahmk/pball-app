import React from "react";

import logo from "../img/wavy-highlights.png";

export default function Hero() {
  return (
    <div className="hero-box">
      {/* <img src={heroblank} className="hero" /> */}
      <div class="bird-container bird-container--one">
        <div class="bird bird--one"></div>
      </div>

      <div class="bird-container bird-container--two">
        <div class="bird bird--two"></div>
      </div>
      <img src={logo} className="logo" />
      <div class="bird-container bird-container--three">
        <div class="bird bird--three"></div>
      </div>

      <div class="bird-container bird-container--four">
        <div class="bird bird--four"></div>
      </div>
    </div>
  );
}
