import { useState } from "react";
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
import handleLogin from '../components/handleLogin';



const Register = () => {
  
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [grade, setGrade] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUserRegister = (e) => {
      e.preventDefault(); 
      handleLogin({ firstname,lastname,email,grade,username,password });
    };
  
    return (
      <>
      <div className= 'container'>
        <div className='row main'>
          <div className = "register-page">
            <NavBar />

              <div className="register-form">
                <h2>Register</h2>
                <form action="{{ url_for('register') }}" method="post" autoComplete="off">              
                  <div className='form-group'>
                    <label htmlFor='firstname' className='cols-sm-2 control-label'>
                    First name
                    </label>
                    <input
                        type="text"
                        className='form-control'
                        name='firstname'
                        id='firstname'
                        placeholder='Enter your first name'
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='lastname' className='cols-sm-2 control-label'>
                    Last name
                    </label>
                    <input
                        type="text"
                        className='form-control'
                        name='lastname'
                        id='lastname'
                        placeholder='Enter your lastname'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                  </div>   
                  
                  <br />
                  <div className='form-group'>
                    <label htmlFor='email' className='cols-sm-2 control-label'>
                    Email
                    </label>
                    <input
                        type="email"
                        className='form-control'
                        name='email'
                        id='email'
                        placeholder='Enter your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
                  
                  <br />

                  <div className='form-group'>
                    <label htmlFor='number' className='cols-sm-2 control-label'>
                    Grade
                    </label>
                    <input
                        type="number"
                        className='form-control'
                        name='number'
                        id='number'
                        placeholder='Enter your grade'
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                      />
                  </div>
                  
                  <br />
                  <div className='form-group'>
                    <label htmlFor='username' className='cols-sm-2 control-label'>
                    Username
                    </label>
                    <input
                        type="text"
                        className='form-control'
                        name='username'
                        id='username'
                        placeholder='Enter your username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                  </div>
                  

                  <br />
                  <div className='form-group'>
                    <label htmlFor='password' className='cols-sm-2 control-label'>
                    Password
                    </label>
                    <input
                        type="password"
                        className='form-control'
                        name='password'
                        id='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>

                  <br />
                  <div className="form-group">
                    <button type="submit" onClick={handleUserRegister}>
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Register;
