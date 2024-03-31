import React from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

//  this component is for input box of sending messages
const MessageInput = ({ newmsg, user }) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setMessage("");
  }, [setMessage, user]);
  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  let handleSubmit = () => {
    if (message) {
      newmsg(message);
    } else {
      alert("Type some text message before submitting");
    }
    setMessage("");
  };
  return (
    <Row className="messageInput">
      <Col sm={11}>
        <Form.Control
          value={message}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your message here..."
        />
      </Col>
      <Col sm={1}>
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "#6ae32d", border: "none" }}
        >
          Send
        </Button>
      </Col>
    </Row>
  );
};

export default MessageInput;
