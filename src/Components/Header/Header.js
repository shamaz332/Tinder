import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import IconButton from "@material-ui/core/IconButton";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header__main">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <IconButton>
        <img
          className="header__logo"
          src="https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/tinder-512.png"
        />{" "}
      </IconButton>
      <IconButton>
        <ChatBubbleIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
};
