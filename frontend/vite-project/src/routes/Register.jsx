import { useState } from "react";
import Footer from '../components/Footer'
import axios from 'axios';
import { Link } from "react-router-dom";


const Register = () => {

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:5000/login', {
        username,
        password,
      });


      const handleChange = (e) => {
        setFormData({ formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch("http://localhost:5173/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            console.log("User registered successfully");
          } else {
            console.error("Failed to register user");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };
      console.log(response.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };  

  return (
    <>
     <div className = "login-form">
        <div className = "login-banner2">
          <div className = "login-banner1">
          <Link to="/"><i className="arrow"></i></Link>
            <label>
              <h2>Students helping students, one login closer to success.</h2>
              <br></br>
              <p>Unite in learning.</p>

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
                <h2>Registration</h2>
                <form>
                  <label>
                    First Name:
                    <input
                      type="email"
                      placeholder="Email"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      />
                  </label>
                  <label>
                    Last Name:
                    <input
                      type="email"
                      placeholder="Email"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      />
                  </label>
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
  
export default Register;
