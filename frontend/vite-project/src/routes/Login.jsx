import { useState } from "react";
import Footer from '../components/Footer'
import axios from 'axios';
import { Link } from "react-router-dom";


const Login = () => {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };
    return (
      <>
       <div className = "login-form">
          <div className = "login-banner">
            <div className = "login-banner1">
            <Link to="/"><i className="arrow"></i></Link>
              <label>
                <h2>Students helping students, every login is a step towards shared success.</h2>
                <br></br>
                <p>Connecting minds, empowering learning.</p>

              </label>
            </div>
          </div>
          <div className = "login-content">
          <div className = "overlay">
            <div className = "login-content1">
              <label>
              </label>
                <h1>Welcome Back!</h1>
                <p> Please login to continue.</p>
              <div className="auth-form">
                <h2>Login</h2>
                <form>
                  <label>
                    Username:
                    <input
                      type="email"
                      placeholder="Email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      />
                  </label>
                  <br />
                  <label>
                    Password:
                    <input
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
            </div>
          </div>
          </div>
          <Footer></Footer>
        </div>
      </>
    );
  };
  
  export default Login;
