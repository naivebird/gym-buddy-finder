import React, { useState } from "react";
import {
  BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import "./App.css";

import LoginPage from "./components/LoginPage/LoginPage";
// import HomePage from "./components/HomePage/HomePage";
import HomePage from "./components/HomePage/HomePage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import { UserContext } from "./UserContext";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHomePage from './components/AdminPage/AdminHomePage';
import ViewUser from './components/AdminPage/ViewUser';
import ViewGyms from './components/GymListingPage/ViewGyms'
import SuspendedUser from'./components/ErrorPage/SuspendedUser'
import MatchesPage from "./components/MatchesPage/MatchesPage";

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
                  !user.suspended ? (
                    user.role === 'ADMIN' ? (
                        <AdminHomePage user={user} onLogout={handleLogout} />
                    ) : (
                        <HomePage user={user} onLogout={handleLogout} />
                    )
                  ) :(
                    <div> <SuspendedUser user={user} onLogout={handleLogout}></SuspendedUser> </div>
                  )
                )
              }
            />
            
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/home" element={<HomePage user={user} onLogout={handleLogout}/>} />
            <Route
              path="/profile/:id"
              element={<ProfilePage onLogout={handleLogout} />}
            />
            <Route path="/admin/:id" element={<ViewUser/>} />
            <Route path="/gyms" element={<ViewGyms user={user} onLogout={handleLogout}/>} />
            <Route path="/matches" element={<MatchesPage user={user} onLogout={handleLogout}/> } />


          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}



export default App;
