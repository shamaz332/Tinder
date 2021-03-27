import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import "./SwipeBtn.css";
import { IconButton } from "@material-ui/core";

const SwipeButton = () => {
  return (
    <div className="swipe__btn">
      <IconButton style={{color:"orange"}}>
        {" "}
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton style={{color:"pink"}}>
        {" "}
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton style={{color:"blue"}}>
        {" "}
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton style={{color:"violet"}}>
        {" "}
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton style={{color:"red"}}>
        {" "}
        <FlashOnIcon fontSize="large" />{" "}
      </IconButton>
    </div>
  );
};

export default SwipeButton;
