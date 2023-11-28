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
       <Header></Header>

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
          <Footer></Footer>
        </div>
      </>
    );
  };
  
  export default Login;
