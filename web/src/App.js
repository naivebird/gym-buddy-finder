import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';              
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import AdminHomePage from './components/AdminPage/AdminHomePage';
import ViewUser from './components/AdminPage/ViewUser';

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
                user.role === 'ADMIN' ? (
                  <AdminHomePage user={user} onLogout={handleLogout} />
                ) : (
                  <HomePage user={user} onLogout={handleLogout} />
                )
              )
            }
          />
          <Route path="/register" element={<RegistrationPage />} />
          {/* <Route path="/admin" element={<AdminHomePage user={user} onLogout={handleLogout} />} /> */}
          <Route path="/admin/:id" element={<ViewUser/>} />
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