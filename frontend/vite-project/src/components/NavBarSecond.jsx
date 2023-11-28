import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"
import React, { useState, useEffect } from 'react';



function NavBarSecond(){

  return (
    <div className="navbar-div" >
      <nav className="navbar">
        <div className="logo">

          <Link to= "/"><img src={Logo} /></Link>
        </div>
        <ul className="nav-links">
          <li>HOME</li>
          <li>PROFILE</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarSecond;
