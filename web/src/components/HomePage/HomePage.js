import React, { useState, useEffect, useContext } from "react";
import "./HomePage.css";
import Navbar from "../Navbar/NavBar";
import axios from "axios";

function HomePage({ onLogout }) {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [nearbyProfiles, setNearbyProfiles] = useState([]);

  const user = JSON.parse(window.localStorage.getItem("user"));

  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8080/api/v1/profile/nearby?id=${encodeURIComponent(
          user.id
        )}`;
        const { data } = await axios.get(url);
        setNearbyProfiles(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [user.id]);

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

  const random = Math.floor(Math.random() * nearbyProfiles.length);

  const suggestedProfile = nearbyProfiles[random];



  return (
    <div className="home-page">
      <Navbar user={user} onLogout={onLogout} />
      {user.id && nearbyProfiles.length > 0 ? (
        <>
          <div className="home-profile-box">
            <a
              className="home-profile-photo"
              href={`/profile/${suggestedProfile.id}`}
            >
              <img
                alt="profile-photo"
                src={suggestedProfile.profilePictureUrl}
              />
            </a>
            <div className="home-profile-info">
              <ul className="home-profile-info-list">
                <li id="home-profile-name">{suggestedProfile.firstName}</li>
                <li>
                  {getAge(suggestedProfile.dob)} - {suggestedProfile.city},{" "}
                  {suggestedProfile.province}
                </li>
                <li></li>
                <li>{suggestedProfile.bio}</li>
                <li>
                  <a href={`/profile/${suggestedProfile.id}`}>View Profile</a>
                </li>
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
          <div className="home-buddy-discovery">
            <p id="buddy-discovery-header">Discover Gym Buddies In Your Area</p>
            <ul id="nearby-buddy-list">
              {nearbyProfiles
                .filter((p) => p.id !== suggestedProfile.id)
                .map((p) => (
                  <li key={p.id}>
                    <a href={"/profile/" + p.id}>
                      <img src={p.profilePictureUrl} alt="Profile Photo" />
                      <p>{p.firstName}</p>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomePage;
