import { useState } from "react";
import Footer from '../components/Footer'
import Header from '../components/NavBar';
import handleLogin from '../components/handleLogin';



const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleHandleLogin = (e) => {
      e.preventDefault(); 
      handleLogin({ username,password });
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
                  type="text"
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
              <button type="button" onClick={handleHandleLogin}>
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
