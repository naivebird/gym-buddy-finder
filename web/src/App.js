import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));

  const handleLogin = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    window.localStorage.setItem("user", user);
  }, [user]);

 

  const handleLogout = () => {
    setUser('');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              !user ? (
                <LoginPage onLogin={handleLogin} />
              ) : (
                <HomePage user={user} onLogout={handleLogout} />
              )
            }
          />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
        {/* <div>
          {!user && (
            <AuthLink />
          )}
        </div> */}
      </div>
    </Router>
  );
}

function AuthLink() {
  const location = useLocation();
  if (location.pathname !== '/register') {
    return (
      <p class = "registration-link">
        Don't have an account? <Link to="/register">Click here to register</Link>
      </p>
    );
  }
  return null;
}

export default App;