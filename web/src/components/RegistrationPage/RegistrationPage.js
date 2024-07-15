import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import Header from '../Header/Header';


function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = async () => {
    try {
      const userData = {
        email,
        password,
        confirmPassword
      };

      if (password !== confirmPassword) {
        alert("Passwords don't match")
      } else {
        const response = await axios.post('http://localhost:8080/api/v1/user/add', userData);
        console.log('User registered:', response.data);
        setRegistrationSuccess(true);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  if (registrationSuccess) {
    return (
      <div className='centered-container'>
        <div className="login-container">
          <h1>Registration completed successfully!</h1>
          <h2> </h2>
          <div className="registration-link">
            <a href="/">Login here</a>
          </div>
        </div>

      </div>);
  }

  return (
    <>
      <Header />
      <div className='signup-container-wrapper'>
        <div className="centered-container">
          <div className="login-container">
            <h2>Registration</h2>
            <div className="input-container">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button className="login-button" onClick={handleRegistration}>Register</button>
            <div className="login-link">
              <p className='registration-link'>Already have an account? <a href="/">Login here</a></p>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default RegistrationPage;
