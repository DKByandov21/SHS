import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');

    if (storedUsername) {
      // If there is a username stored, clear the sessionStorage
      sessionStorage.removeItem('username');
      toast.success("Successfully Signout")
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validate()) {
      fetch("http://localhost:3000/users?username=" + username)
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp);
          console.log(resp[0]["password"]);
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (resp[0]["password"] === password) {
              toast.success("Successful");
              sessionStorage.setItem('username', username);
              navigation('/main');
            } else {
              toast.error(`Please Enter valid credentials`);
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to:" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <>

      <div className="login-form">
        <div className="login-banner">
          {/* ... (rest of your code) ... */}
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
                  <Link to="/register">
                    <p id="account">Don't you have an account?</p>
                  </Link>
                  <br />
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Include your Footer component here */}
      </div>
    </>
  );
};

export default Login;
