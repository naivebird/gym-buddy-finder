import React, { useState, useEffect, useContext } from "react";
import "./HomePage.css";
import Navbar from "../Navbar/NavBar";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function HomePage({ onLogout }) {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [nearbyProfiles, setNearbyProfiles] = useState([]);
  const [gyms, setGyms] = useState([]);

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

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/gym/");
        setGyms(response.data);
      } catch (error) {
        console.error("Error fetching gyms:", error);
      }
    };

    fetchGyms();
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
          <div className="home-first-column">
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
              <p id="buddy-discovery-header">
                Discover Gym Buddies In Your Area
              </p>
              <ul class="buddy-list">
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
          </div>

          <div className="gym-box">
            <ImageList sx={{ width: 500, height: 520 }}>
              <ImageListItem key="Subheader" cols={2}>
                <div className="gym-discovery-header">
                  Discover Gyms In Your Area
                </div>
              </ImageListItem>
              {gyms.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${require(`../../assets/gym_pics/${item.id}.jpg`)}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${require(`../../assets/gym_pics/${item.id}.jpg`)}?w=248&fit=crop&auto=format`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <a href={item.websiteUrl} target="_blank">
                    <ImageListItemBar
                      title={item.name}
                      subtitle={item.websiteUrl}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.name}`}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </a>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomePage;
