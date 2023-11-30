import React, { useState } from "react";
import Footer from '../components/Footer';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for making API requests

const Login = () => {
  const [username, setUsername] = useState(''); // Change from email to username
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [redirectToMain, setRedirectToMain] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // New state for error message
  const navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a request to your login API endpoint
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });

      const authenticatedUser = response.data.user;
      
      if (authenticatedUser) {
        console.log("Login successful");
        setRedirectToMain(true);
        }

      // If successful, setRedirectToMain to true
      setRedirectToMain(true);
    } catch (error) {
      // If login fails, set an error message
      setErrorMessage('Invalid credentials');
      console.error('Invalid credentials', error);
    }
  };

  return (
    <>
      {redirectToMain ? navigation('/main') : null}


      <div className="login-form">
        <div className="login-banner">
          
        </div>
        <div className="login-content">
          <div className="overlay">
            <div className="login-content1">
              <h1>Welcome Back!</h1>
              <p>Please login to continue.</p>
              <div className="auth-form">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                  <label>
                    <input
                      type="text" 
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </label>
                  <label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <br />
                  <button type="submit">Login</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
