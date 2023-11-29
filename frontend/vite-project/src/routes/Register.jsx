import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from '../components/Footer';


const Register = () => {
  // State variables to store form data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  // React Router navigate hook for redirection
  const navigate = useNavigate();

  // Event handler for form submission
  const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:3000/users', {
      username,
      firstName,
      lastName,
      email,
      password,
    });

    if (response.data.success) {
      console.log("User registered successfully");
      
      // Redirect to the "main" page
      navigate('/main', {
        state: {
          claes: response.data.user.classNames,
          inputs: { username, firstName, lastName, email, password },
        },
      });
    } else {
      console.error("Failed to register user:", response.data.error);
    }
  } catch (error) {
    console.error('Registration failed', error);
  }
};

  return (
    <>
      <div className="login-form">
        <div className="login-banner2">
          <div className="login-banner1">
            <Link to="/"><i className="arrow"></i></Link>
            <label>
              <h2>Students helping students, one login closer to success.</h2>
              <br />
              <p>Unite in learning.</p>
            </label>
          </div>
        </div>
        <div className="login-content">
          <div className="overlay">
            <div className="register-content1">
              <label></label>
              <h1>Welcome!</h1>
              <p>Begin your journey now.</p>
              <div className="auth-form1">
                <h2>Registration</h2>
                <form onSubmit={handleRegister}>
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
                      type="name"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                  <label>
                    <input
                      type="name"
                      placeholder="Last Name"
                      className="input"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                  <label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <br />
                  <button type="submit">
                    Register
                  </button>
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

export default Register;
