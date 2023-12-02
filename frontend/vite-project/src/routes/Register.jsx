import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  // State variables to store form data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  const IsValidate = () => {
    let result = true;
    if(username === '' || username === null){
      result = false;
      toast.warning("Please Enter Username")   
      
    }
    if(email === '' || email === null){
      result = false;
      toast.warning("Please Enter Email")
    }
    if(firstName === '' || firstName === null){
      result = false;
      toast.warning("Please Enter FirstName")   
      
    }
    if(lastName === '' || lastName === null){
      result = false;
      toast.warning("Please Enter LastName")
    }
    if(password === '' || password === null){
      result = false;
      toast.warning("Please Enter Password")   
      
    }
    return result;
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    let review = {username,email,firstName,lastName,password};
    if (IsValidate()){

<<<<<<< HEAD
      fetch("http://localhost:3001/users", {
=======
      fetch("http://localhost:3000/users", {
>>>>>>> 6b06ee3fb850d11d6c140e616062b94ac019ec94
        method: "POST",
        headers: {'content-type': 'application/json'},
        body:JSON.stringify(review)
      }).then ((res) => {
        toast.success('Registered successfully.')
        navigate('/login');
      }).catch ((err)=>{
        toast.error('Failed :'+err.message);
      });
    };
    }

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
                      type="text" 
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
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
