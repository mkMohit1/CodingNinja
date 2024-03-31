import React from "react";
import { Col } from "react-bootstrap";

const NoConversation = () => {
  return (
    <Col
      md={8}
      style={{ backgroundColor: "#6ae32d", height: "100vh", marginLeft: "12%" }}
      className="justify-content-center d-flex flex-column align-items-center"
    >
      <h2>No Conversation Started Yet</h2>
      <h5>Let's Chat...</h5>
    </Col>
  );
};

export default NoConversation;
