import React, { useState } from 'react';
import Footer from '../components/Footer'
import Header from '../components/NavBar';


const Register = ({ handleLogin }) => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [classI, setClassI] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
  
    const handleUserLogin = () => {
      handleLogin({ firstname,lastname,email,classI,username, cpassword,password });
    };
  
    return (
      <>
       <div className = "register-page">
       <Header></Header>

          <div className="register-form">
            <h2>Login</h2>
            <form>              
              <label>
                First name:
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>              
              <label>
                 Last name:
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              <br />
              <label>
                 Email:
                <input
                  type="email"
                  value={firstname}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <br />
              <label>
                class:
                <input
                  type="number"
                  value={classI}
                  onChange={(e) => setClassI(e.target.value)}
                />
              </label>
              <br />

              </label>
              <br />
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
              <label>
                Conform Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="submit" onClick={handleUserLogin}>
                Register
              </button>
            </form>
          </div>
          <Footer></Footer>
        </div>
      </>
    );
  };
  
  export default Register;