import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import Navbar from "../Navbar/NavBar";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProfilePage({ onLogout }) {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [profile, setProfile] = useState("");
  const [preferences, setPreferences] = useState([]);

  const { id } = useParams();

  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8080/api/v1/profile/${encodeURIComponent(
          id
        )}`;
        const { data } = await axios.get(url);
        setProfile(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8080/api/v1/preferences/${encodeURIComponent(
          id
        )}`;
        const { data } = await axios.get(url);
        setPreferences(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [id]);

  console.log(preferences);
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className="home-page">
      <Navbar user={user} onLogout={onLogout} />
      {user.id !== profile.id ? (
        <>
          <div className="profile-page-profile-box">
            <a className="home-profile-photo" href={`/profile/${profile.id}`}>
              <img alt="profile-photo" src={profile.profilePictureUrl} />
            </a>
            <div className="home-profile-info">
              <ul className="home-profile-info-list">
                <li id="home-profile-name">
                  {profile.firstName} {profile.lastName}
                </li>
                <li>
                  {profile.gender}, {getAge(profile.dob)} - {profile.city},{" "}
                  {" " + profile.province}, {" " + profile.country}
                </li>
                <li></li>
                <li>{profile.bio}</li>
                <li id="home-interest">
                  <p>Send Buddy Invite?</p>
                  <div className="home-button">
                    <button id="home-button-yes">Yes</button>
                    <button id="home-button-no">No</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="user-preferences">
            <p id="user-preference-header">More About Me:</p>
            <table id="user-preference-list">
              {preferences.map((p) => (
                <tr key={p.id}>
                  <td className="user-preference-question">{p.question}</td>{" "}
                  <td>{p.answer}</td>
                </tr>
              ))}
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="home-profile-box">
            <a className="home-profile-photo" href={`/profile/${profile.id}`}>
              <img alt="profile-photo" src={profile.profilePictureUrl} />
            </a>
            <div className="home-profile-info">
              <ul className="home-profile-info-list">
                <li id="home-profile-name">
                  {profile.firstName} {profile.lastName}
                </li>
                <li>
                  {profile.gender}, {getAge(profile.dob)} - {profile.city},{" "}
                  {" " + profile.province}, {" " + profile.country}
                </li>
                <li></li>
                <li>{profile.bio}</li>
              </ul>
            </div>
          </div>
          <div className="user-preferences">
            <p id="user-preference-header">More About Me:</p>
            <table id="user-preference-list">
              {preferences.map((p) => (
                <tr key={p.id}>
                  <td className="user-preference-question">{p.question}</td>{" "}
                  <td>{p.answer}</td>
                </tr>
              ))}
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
