import React, { Component } from "react";
import ProfileP from "../assets/profile.png";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="main-profile">
          <div className="main-profile1">
            <div className='profile'>
              <img src={ProfileP} alt="Profile Picture" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;