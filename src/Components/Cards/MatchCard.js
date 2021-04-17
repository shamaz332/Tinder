import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import firebaseDB from "../../Firebase/Api.js";
import "./card.css";
const MatchCard = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unSub = firebaseDB
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unSub();
    };
  }, []);

  return (
    <div>
      <div className="card__container">
        {people.length <= 0 ? (
          <h2 className="loader">Loading.....</h2>
        ) : (
          people.map((person) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default MatchCard;
