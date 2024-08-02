import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import { UserContext } from "./UserContext";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MessagesPage from "./components/MessagesPage/Messages";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const handleLogin = (userData) => {
    setUser(userData);
    window.localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser("");
    window.localStorage.setItem("user", "");
  };

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route
              path="/"
              element={
                !user ? (
                  <LoginPage onLogin={handleLogin} />
                ) : (
                  <HomePage onLogout={handleLogout} />
                )
              }
            />
            <Route path="/register" element={<RegistrationPage />} />
            <Route
              path="/profile/:id"
              element={<ProfilePage onLogout={handleLogout} />}
            />
            <Route
              path="/messages"
              element={<MessagesPage user={user} onLogout={handleLogout} />}
            />
          </Routes>
          {/* <div>
          {!user && (
            <AuthLink />
          )}
        </div> */}
        </UserContext.Provider>
      </div>
    </Router>
  );
}

function AuthLink() {
  const location = useLocation();
  if (location.pathname !== "/register") {
    return (
      <p class="registration-link">
        Don't have an account?{" "}
        <Link to="/register">Click here to register</Link>
      </p>
    );
  }
  return null;
}

export default App;
