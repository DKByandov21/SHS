import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Issue from '../components/Issue';
import Profile from '../components/Profile';

function MainPage() {

  const navigation = useNavigate();
  useEffect (()=> {
    let username = sessionStorage.getItem('username');
    if(username === '' || username === null){
        navigation('/login')
    }
  },[]);

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
              <Link to="#" onClick={toggleIssue}>
                <h2>My Issues</h2>
              </Link>
            </li>
          </ul>
        </div>
        {showIssue && <Issue />}
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
