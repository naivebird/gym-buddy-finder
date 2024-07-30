import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './LoginPage.css'


function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const url = `http://localhost:8080/api/v1/user/get?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
      const response = await axios.get(url).catch(function (error) {
        if (error.response) {
          alert("Incorrect username or password, please try again!");
        }
      });;
      const userData = response.data;
      onLogin(userData);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <Header />
      <div className='login-container-wrapper'>
        <div className='login-container'>
          
          <div className="login-form">
            <h2>Sign in to your account</h2>
            <div className="input-container">
              <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="login-button" type="button" onClick={handleLogin}>Login</button>
          </div>
          <div className="login-link">
            <p className='registration-link'>Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </div>
      </div>
    </>

  );
}

export default LoginPage;