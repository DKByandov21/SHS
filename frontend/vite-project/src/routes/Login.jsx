import { useState } from "react";
import Footer from '../components/Footer'
import Header from '../components/NavBar';

import axios from 'axios';


const Login = () => {
  

    return (
      <>
        <section className="login-UI">
          <div className="login-banner">
            <h1>Turn Your Ideas into reality</h1>
            <p>Start for free and get attractive offers from the community</p>
          </div> 
          <div className="login-content">
              <div className="login-content1">
              <h1>Registration</h1>
              <p>sdad</p>
              <form>
                <div className="login-blank">
                  <input type="text" id="fname" name="fname" placeholder="First name"></input>
                  <hr></hr>
                  <br></br>
                </div>
                <div className="login-blank">
                  <input type="text" id="fname" name="fname" placeholder="Last name"></input>
                </div>
                <div className="login-blank">
                  <input type="text" id="fname" name="fname" placeholder="Email"></input>
                </div>
                <div className="login-blank">
                  <input type="text" id="fname" name="fname" placeholder="Password"></input>
                </div>

            </form>
            </div> 
          </div> 
        </section>
      </>
    );
  };
  
  export default Login;
