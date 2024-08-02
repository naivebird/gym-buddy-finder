import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import Navbar from "../Navbar/NavBar";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProfilePage({ onLogout }) {
  const [profile, setProfile] = useState({});
  const [preferences, setPreferences] = useState([]);

  const { id } = useParams();

  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const url = `http://localhost:8080/api/v1/profile/${encodeURIComponent(id)}`;
        const { data } = await axios.get(url);
        setProfile(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProfile();
  }, [id]);

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const url = `http://localhost:8080/api/v1/preferences/${encodeURIComponent(id)}`;
        const { data } = await axios.get(url);
        setPreferences(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPreferences();
  }, [id]);

  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="home-page">
      <Navbar user={user} onLogout={onLogout} />
      <div className="profile-container">
        <table className="profile-table">
          <tbody>
            <tr>
              <td colSpan="2" className="profile-photo-cell">
                <a href={`/profile/${profile.id}`}>
                  <img alt="profile-photo" src={profile.profilePictureUrl} className="profile-photo" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="profile-label">Name:</td>
              <td>{profile.firstName} {profile.lastName}</td>
            </tr>
            <tr>
              <td className="profile-label">Gender, Age:</td>
              <td>{profile.gender}, {getAge(profile.dob)}</td>
            </tr>
            <tr>
              <td className="profile-label">Location:</td>
              <td>{profile.city}, {profile.province}, {profile.country}</td>
            </tr>
            <tr>
              <td className="profile-label">Bio:</td>
              <td>{profile.bio}</td>
            </tr>
            {user.id !== profile.id && (
              <tr>
                <td className="profile-label">Send Buddy Invite?</td>
                <td>
                  <button className="invite-button">Yes</button>
                  <button className="invite-button">No</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <table className="preferences-table">
          <thead>
            <tr>
              <th colSpan="2">More About Me:</th>
            </tr>
          </thead>
          <tbody>
            {preferences.map((p) => (
              <tr key={p.id}>
                <td className="preference-question">{p.question}</td>
                <td>{p.answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfilePage;
