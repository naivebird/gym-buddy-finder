import React, { useState, useEffect } from "react";
import "./MatchesPage.css";
import Navbar from "../Navbar/NavBar";
import axios from "axios";
import { useParams } from "react-router-dom";

function MatchesPage({ onLogout }) {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [buddies, setBuddies] = useState([]);

  const { id } = useParams();

  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
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

    fetchBuddies();
  }, [id]);


  return (
    <div className="home-page">
      <Navbar user={user} onLogout={onLogout} />
      <main className="feed col-md-6">
            <div className="buddies-list card mt-4">
              <div className="card-header">
                <h5 className="card-title">My Buddies</h5>
              </div>
              <ul className="my-buddy-list list-group-flush">
                {buddies.map((buddy) => (
                  <li key={buddy.id} className="list-group-item">
                    <p className="buddy-name">{buddy.firstName}</p>
                    <a href={"/profile/" + buddy.id}>
                      <img src={buddy.profilePictureUrl} alt="Profile Photo" />
                    </a>
                    <a className="matches-button" href={"/profile/" + buddy.id}>View Profile</a>

                    <a className="matches-button" href="/message">Message</a>
                  </li>
                ))}
              </ul>
            </div>
          </main>
    </div>
  );
}

export default MatchesPage;
