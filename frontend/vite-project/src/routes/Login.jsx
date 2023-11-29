import { useState } from "react";
import Footer from '../components/Footer'
import axios from 'axios';
import { Link } from "react-router-dom";


const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username:username,
        password:password,
      });

      console.log('Token:', response.data.token);
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

                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
