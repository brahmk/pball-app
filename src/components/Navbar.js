import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="#body-header">Courts</Link>
    </div>
  );
}
