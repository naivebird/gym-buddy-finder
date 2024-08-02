import React, { useState, useEffect } from "react";
import "./HomePage2.css";
import Navbar from "../Navbar/NavBar";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function HomePage({ onLogout }) {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [nearbyProfiles, setNearbyProfiles] = useState([]);
  const [buddies, setBuddies] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showEvents, setShowEvents] = useState(false);

  const [profile, setProfile] = useState({});

  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8080/api/v1/profile/${encodeURIComponent(
          user.id
        )}`;
        const { data } = await axios.get(url);
        setProfile(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [user.id]);

  useEffect(() => {
    const fetchNearbyProfiles = async () => {
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

    const fetchBuddies = async () => {
      // Assuming there's an API to fetch the user's buddies
      try {
        const url = `http://localhost:8080/api/v1/buddy/${encodeURIComponent(
          user.id
        )}`;
        const { data } = await axios.get(url);
        setBuddies(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    const fetchEvents = async () => {
      // Assuming there's an API to fetch events
      try {
        const url = `http://localhost:8080/api/v1/events`;
        const { data } = await axios.get(url);
        setEvents(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchNearbyProfiles();
    fetchBuddies();
    fetchEvents();
  }, [user.id]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowEvents(true);
  };

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

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  const formatShortWeekday = (locale, date) => {
    return ["M", "T", "W", "T", "F", "S", "S"][date.getDay()];
  };

  const random = Math.floor(Math.random() * nearbyProfiles.length);

  const suggestedProfile = nearbyProfiles[random];

  return (
    <div className="home-page">
      <Navbar user={user} onLogout={onLogout} />
      <div className="home-page-layout container">
        <div className="row">
          <aside className="sidebar col-md-3 profile-sidebar">
            <div className="profile-card card">
              <img
                src={profile.profilePictureUrl}
                alt="Profile"
                className="card-img-top profile-img"
              />
              <div className="card-body text-center">
                <h5 className="card-title">
                  {profile.firstName} {profile.lastName}
                </h5>
                <p className="card-text">{profile.bio}</p>
                <div className="profile-stats d-flex justify-content-between">
                  <div>
                    <strong>8</strong> Buddies
                  </div>
                  <div>
                    <strong>0</strong> new messages
                  </div>
                  <div>
                    <strong>4</strong> Requests
                  </div>
                </div>
              </div>
            </div>
            <div className="calendar card mt-4">
              <div className="card-header">
                <h5 className="card-title">Upcoming Work Out</h5>
              </div>
              <div className="card-body">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  showNavigation={true}
                  prev2Label={null}
                  next2Label={null}
                  formatShortWeekday={formatShortWeekday}
                />
                {showEvents && (
                  <div className="events mt-3">
                    <h6>Events on {selectedDate.toDateString()}</h6>
                    <ul>
                      {events
                        .filter(
                          (event) =>
                            new Date(event.date).toDateString() ===
                            selectedDate.toDateString()
                        )
                        .map((event) => (
                          <li key={event.id}>{event.title}</li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </aside>
          <main className="feed col-md-6">
            <div className="buddies-list card mt-4">
              <div className="card-header">
                <h5 className="card-title">My Buddies</h5>
              </div>
              <ul className="buddy-list list-group-flush">
                {buddies.map((buddy) => (
                  <li key={buddy.id} className="list-group-item">
                    <a href={"/profile/" + buddy.id}>
                      <img src={buddy.profilePictureUrl} alt="Profile Photo" />
                      <p>{buddy.firstName}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </main>
          <aside className="sidebar col-md-3 suggestions-sidebar">
            <div className="who-to-follow card">
              <div className="card-header">
                <h5 className="card-title">Best Matches</h5>
              </div>
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
                        <li id="home-profile-name">
                          {suggestedProfile.firstName}
                        </li>
                        <li>
                          {getAge(suggestedProfile.dob)} -{" "}
                          {suggestedProfile.city}, {suggestedProfile.province}
                        </li>
                        <li></li>
                        <li>{suggestedProfile.bio}</li>
                        <li>
                          <a href={`/profile/${suggestedProfile.id}`}>
                            View Profile
                          </a>
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
                              <img
                                src={p.profilePictureUrl}
                                alt="Profile Photo"
                              />
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
          </aside>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
