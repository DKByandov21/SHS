import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import Issue from '../components/Issue';

function MainPage() {
  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const [showProfile, setShowProfile] = useState(true);
  const [showIssue, setShowIssue] = useState(false);

  const toggleProfile = () => {
    setShowProfile(true);
    setShowIssue(false); // Close the Issue component when opening the Profile component
  };

  const toggleIssue = () => {
    setShowIssue(true);
    setShowProfile(false); // Close the Profile component when opening the Issue component
  };

  return (
    <div style={containerStyle}>
      <div className="main-page">
        <div className="side-menu">
          <ul>
            <li>
              <Link to="#" onClick={toggleProfile}>
                <h2>Profile</h2>
              </Link>
            </li>
            <hr />
            <li>
              <Link to="#" onClick={toggleIssue}>
                <h2>My Issues</h2>
              </Link>
            </li>
          </ul>
        </div>
        {showProfile && <Profile />}
        {showIssue && <Issue />}
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
