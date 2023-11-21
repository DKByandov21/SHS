import React from "react";
import "../styles/navbar.css";
//import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="site-title">
        SHS
      </a>
      <ul>
        <li>
          <a href="/login">Log In</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
