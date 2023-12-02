import React, { useRef, useEffect } from 'react'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import { Link, Navigate } from "react-router-dom"
import ProfileIcon from "../assets/profile.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the desired effect
import mac from "../assets/Mac Studio.png"
import iphone from "../assets/iPhone-13-Pro-Front.png"

function HomePage() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);



  const handleClick_section1 = () => {
    if (section1Ref.current) {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClick_section2 = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClick_section3 = () => {
    if (section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };
  
  return (
    <div style={containerStyle}>
      <NavBar handleClick={handleClick_section1} handleClick1={handleClick_section2} handleClick2={handleClick_section3}/>

      <div>
        <div className='content-banner'>
          <div className='content-banner1'>
            <h1>Complete Solution For Your Education Needs!</h1>
            <Link to="/register"><button type="button">Register</button></Link>
          </div>
        </div>
      </div>

      <section className="section"> 
        <div className="section-content">
          <div className="steps">
            <div className="steps-content">
              <p>STEP 1</p>
              <h3>REGISTER</h3>
            </div>
          </div>
          <div className="steps">
            <div className="steps-content">
              <p>STEP 2</p>
              <h3>POST YOUR PROBLEM</h3>
            </div>
          </div>
          <div className="steps">
            <div className="steps-content">
              <p>STEP 3</p>
              <h3>FIND INSTRUCTOR</h3>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-2" ref={section1Ref} id="section-2">
        <div className="section__title">
          <h4>Features</h4>
          <h1>What does SHS offer?</h1>
          <br></br>
          <hr></hr>
        </div>              
        <div className="section-content2">
          <br></br>
          <ul>
            <li id="special"><b>Peer Tutoring:</b> Connect with classmates for academic help in specific subjects.</li>            <li><b>Study Groups:</b> Form virtual study groups to collaborate on projects and share resources. </li>
            <li><b>Q&A Forum:</b> Ask and answer questions in an interactive forum. </li>
            <li><b>Resource Hub:</b> Access and share study materials and notes. </li>
            <li><b>Mentorship:</b> Connect with experienced students for guidance on academics and career choices. </li>
          </ul>

        
        

          <img src = {mac} className='mac'></img>
        </div>



      </section>
      
      <section className="section-3" ref={section2Ref}>
        <div className="section__title">
          <h4>ABOUT</h4>
          <h1>About Our Team</h1>
          <br></br>
          <hr></hr>
        </div>
        <div className='section__3content'>
          <p>
          Welcome to SHS – Students Help Students, where collaboration fuels success. Our diverse team is united by a common goal: empowering fellow students in their academic journeys. Through open communication and a commitment to excellence, SHS provides a supportive platform where knowledge meets community. Join us in a space where students help students thrive.
          </p>
        </div>
      </section>
      
      <section className="section-1" ref={section3Ref} id="section-1">
        <div className="section__title">
          <h4>Instructors</h4>
          <h1>Popular Instructors</h1>
          <br></br>
          <hr></hr>
        </div>
        <div className="section-content1">
          <div className='section-card'>
            <img src={ProfileIcon} alt="Profile Icon" />
            <h3>Dimitar Byandov</h3>
            <p>Frontend Developer</p>
          </div>
          <div className='section-card'>
            <img src={ProfileIcon} alt="Profile Icon" />
            <h3>Ivan Delchilov</h3>
            <p>Backend Developer</p>
          </div>
        </div>
      </section>
      
      <Footer />  
    </div>
  );
}

export default HomePage;
