import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <HashLink to="/#wrapper">Courts</HashLink>
    </div>
  );
}
