import React, { Component } from "react";
import ProfileP from "../assets/profile.png";
import {Link} from "react-router-dom"


class Profile extends Component {

  render() {
    return (
      <>
        <div className="main-profile">
          <div className="main-profile1">
            <div className='profile'>
              <img src={ProfileP} className="profile" alt="Profile Picture" />
              <Link to="/login">Signout</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
