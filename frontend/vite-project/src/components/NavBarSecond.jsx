import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"
import React, { useState, useEffect } from 'react';



function NavBarSecond(){

  return (
    <div className="navbar-div" style={{ top: visible ? '0' : '-95px' }}>
      <nav className="navbar">
        <div className="logo">

          <Link to= "/"><img src={Logo} /></Link>
        </div>
        <ul className="nav-links">
          <li onClick = {handleClick}><Link to="/">FEATURES</Link></li>
          <li onClick = {handleClick1}><Link to="/">ABOUT</Link></li>
          <li onClick = {handleClick2}><Link to="/">INSTRUCTORS</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/register">REGISTER</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarSecond;
