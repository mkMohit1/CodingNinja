import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchContact, getContacts } from "../../reducers/ContextReducer";
import { useNavigate } from "react-router-dom";

// this is a search component in which we can search our contacts we use useDispatch() so that we can call the reducer function of searc
const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const find = (e) => {
    navigate("/");
    if (e.target.value.trim()) {
      dispatch(searchContact(e.target.value));
    } else {
      dispatch(getContacts());
    }
  };
  return (
    <Row className="mt-3">
      <Col sm={9}>
        <Form.Control
          type="text"
          placeholder="search names"
          title="search"
          onChange={find}
        />
      </Col>
      <Col sm={3}>
        <Button style={{ backgroundColor: "#6ae32d", border: "none" }}>
          Search
        </Button>{" "}
      </Col>
    </Row>
  );
};

export default Search;
