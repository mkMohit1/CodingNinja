import React from "react";
import { Image } from "react-bootstrap";
import userImg from "../../mohit.jpg";

// messages from my sides is in right side so below is the ui for that
const RightChatBubble = ({ message }) => {
  return (
    <div className="d-flex flex-row justify-content-end">
      <div>
        <p
          className="small p-2 me-3 mb-1 text-white rounded-3"
          style={{ backgroundColor: "#6ae32d" }}
        >
          {message.text}
        </p>
        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
          {message.timestamp}
        </p>
      </div>
      <Image src={userImg} roundedCircle width="55px" height="55px" />
    </div>
  );
};

export default RightChatBubble;
