import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
export const Header = ({ backBtn }) => {
  const history = useHistory();

  return (
    <div className="header__main">
      {backBtn ? (
        <IconButton onClick={() => history.replace(backBtn)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <IconButton>
        <img
          className="header__logo"
          src="https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/tinder-512.png" alt="icon"
        />{" "}
      </IconButton>
      <Link to="/chat">
        <IconButton>
          <ChatBubbleIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};
