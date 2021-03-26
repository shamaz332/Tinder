import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./card.css";
const MatchCard = () => {
  const [people, serPeople] = useState([
    {
      name: "Shamaz",
      url:
        "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    },

    {
      name: "usama",
      url:
        "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    },
  ]);

  return (
    <div>
      <div className="card__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default MatchCard;
