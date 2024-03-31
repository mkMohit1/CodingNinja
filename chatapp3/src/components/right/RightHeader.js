import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { contactSelector } from "../../reducers/ContextReducer";

// this is right header in which we have chatlog
const RightHeader = () => {
  const contactsState = useSelector(contactSelector);
  const { id } = useParams();
  const uid = parseInt(id);

  const user = contactsState.find((u) => u.id === uid);
  console.log("right header:-", user);
  return (
    <Row className="p-4" style={{ backgroundColor: "#6ae32d" }}>
      <Col sm={1}>
        <Image src={user.image} roundedCircle width="50px" height="50px" />
      </Col>
      <Col sm={3}>
        <h2>{user.name}</h2>
      </Col>
    </Row>
  );
};

export default RightHeader;
