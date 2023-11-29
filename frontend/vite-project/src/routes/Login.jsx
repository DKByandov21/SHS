import { useState } from "react";
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import db from "../data/db.json";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigation = useNavigate()
  const [redirectToMain, setRedirectToMain] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const authenticatedUser = db.find((u) => u.email === email && u.password === password);

    if (authenticatedUser) {
      setUser(authenticatedUser);
      console.log('Login successful');
      setRedirectToMain(true);
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <>
      {redirectToMain ? navigation('/main'): <Link to ="#" /> }

      <div className="login-form">
        <div className="login-banner">
          <div className="login-banner1">
            <Link to="/"><i className="arrow"></i></Link>
            <label>
              <h2>Students helping students, every login is a step towards shared success.</h2>
              <br />
              <p>Connecting minds, empowering learning.</p>
            </label>
          </div>
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
                  <button type="submit">Login</button>
                </form>
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
