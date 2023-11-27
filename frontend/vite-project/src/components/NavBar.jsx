import React from "react";
import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"


function NavBar({ handleClick ,handleClick1 }){
  return (
    <div className="navbar-div">
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} />
        </div>
        <ul className="nav-links">
          <li onClick = {handleClick}><Link to="/">FEATURES</Link></li>
          <li onClick = {handleClick1}><Link to="/">ABOUT</Link></li>
          <li><Link to="/">INSTRUCTORS</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/register">REGISTER</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
