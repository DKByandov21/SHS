import NavBarSecond from '../components/NavBarSecond';
import Footer from '../components/Footer'
import {Link} from "react-router-dom"


function MainIssue(){


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
                    <li><Link to ="/main-profile"><h2>Profile</h2></Link></li>
                    <hr></hr>
                    <li><Link to ="/main-issue"><h2>My Issues</h2></Link></li>
                  </ul>

              </div>
              <div className="blogs">
                <div className="issue">
                  <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
                <div className="issue">
                <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
                <div className="issue">
                <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
                <div className="issue">
                <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
                <div className="issue">
                <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
                <div className="issue">
                <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
                <div className="issue">
                <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
                <div className="issue">
                <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
                <div className="issue">
                <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
                <div className="issue">
                <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
                <div className="issue">
                <h3>How to code with react</h3>
                  <p>20 January 2023</p>
                </div>
              </div>

            </div>                
            <Footer></Footer>
        </>
      </div>
      );
};
export default MainIssue;