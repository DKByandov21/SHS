import { useState } from "react";
import Footer from '../components/Footer'
import Header from '../components/NavBar';

import axios from 'axios';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      const token = response.data.token;
      console.log('Token:', token);
      
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  return (
      <>
       <div className = "login-form">
       <Header></Header>

          <div className="auth-form">
            <h2>Login</h2>
            <form>
              <label>
                Username:
                <input
                  id="username"
                  
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
          <Footer></Footer>
        </div>
      </>
    );
  };
  
  export default Login;
