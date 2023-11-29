import Footer from '../components/Footer'
import {Link} from "react-router-dom"
import Profile from '../components/Profile';
import Issue from '../components/Issue';
import React, { useState } from 'react'; 


function mainPage(){

  const containerStyle = {   
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const [showProfile, setShowProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const toggleComponent = () => {
    setShowProfile(!showProfile);
  };
  return (
      <div style={containerStyle}>
          <>
            <div className='main-page'>
              <div className="side-menu">
                  <ul>
                    <li><Link to="#" onClick={toggleComponent}><h2>Profile</h2></Link></li>
                    <hr></hr>
                    <li><Link to="#" onClick={toggleComponent} ><h2>My Issues</h2></Link></li>
                  </ul>

              </div>
              {showProfile ? <Profile /> : <Issue />}

            </div>                
            <Footer></Footer>
        </>
      </div>
      );
};
export default mainPage;