import NavBarSecond from '../components/NavBarSecond';
import Footer from '../components/Footer'
import {Link} from "react-router-dom"
import ProfileP from "../assets/profile.png"

function MainProfile(){


  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };
  return (
      <div style={containerStyle}>
          <>
            <div className='main-page'>
              <div className="side-menu">
                  <ul>
                    <li><Link to = "/main-profile"><h2>Profile</h2></Link></li>
                    <hr></hr>
                    <li><Link to = "/main-issue"><h2>My Issues</h2></Link></li>
                  </ul>

              </div>
              <div className="main-profile">
                <div className="main-profile1">
                  <div className='profile'>
                    <img src= {ProfileP}></img>
                  </div>
                </div>
              </div>


            </div>                
            <Footer></Footer>
        </>
      </div>
      );
};
export default MainProfile;