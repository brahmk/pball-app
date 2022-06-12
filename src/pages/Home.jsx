import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      {" "}
      <Navbar />
      <Hero />
      <Body />
    </div>
  );
}
