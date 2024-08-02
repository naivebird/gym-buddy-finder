import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";
import "./ViewGyms.css";
import Button from "@mui/material/Button";

const CardContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const Card = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  overflow: "hidden",
  width: "340px", // Fixed width
  height: "100%", // Fixed height
}));

const CardImage = styled("img")({
  width: "100%",
  height: "150px",
  objectFit: "cover",
});

const CardBody = styled("div")({
  padding: "16px",
  position: "relative",
});

const Description = styled("p")(({ expanded }) => ({
  height: expanded ? "auto" : "60px", // Adjust based on your needs
  overflow: expanded ? "visible" : "hidden",
  textOverflow: "ellipsis",
  whiteSpace: expanded ? "normal" : "nowrap",
  transition: "height 0.3s ease",
}));

const ReadMoreButton = styled("button")({
  background: "none",
  border: "none",
  color: "blue",
  cursor: "pointer",
  position: "absolute",
  bottom: "16px",
  right: "16px",
});

export default function ViewGyms() {
  const [gyms, setGyms] = useState([]);

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
  }, []);

  const handleReadMoreToggle = (index) => {
    setGyms(
      gyms.map((gym, i) =>
        i === index ? { ...gym, expanded: !gym.expanded } : gym
      )
    );
  };

  return (
    <CardContainer>
      {gyms.map((gym, index) => {
        const imageUrl = require(`../../../assets/gym_pics/${gym.id}.jpg`);
        return (
          <Card key={gym.id}>
            <CardImage src={imageUrl} alt={`Gym ${gym.id}`} />
            <CardBody>
              <h5 className="card-title">{gym.name}</h5>
              <p className="card-city">City: {gym.city}</p>
              <Description expanded={gym.expanded}>
                {gym.description}
              </Description>
              <ReadMoreButton onClick={() => handleReadMoreToggle(index)}>
                {gym.expanded ? "Read Less" : "Read More"}
              </ReadMoreButton>
              <Button variant="contained">Edit</Button>{" "}
              {/* Material UI Button */}
            </CardBody>
          </Card>
        );
      })}
    </CardContainer>
  );
}
