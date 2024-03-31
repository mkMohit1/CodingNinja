import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./left/Header";
import Search from "./left/Search";
import RightHeader from "./right/RightHeader";
import MessageBox from "./right/MessageBox";
import { useDispatch } from "react-redux";
import { contactSelector, getContacts } from "../reducers/ContextReducer";
import { useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NoConversation from "./right/NoConversation";
import UserList from "./left/UserList";

const ChatBox = () => {
  const dispatch = useDispatch();
  const contactsState = useSelector(contactSelector);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    // here we are calling to other components of chat-app
    <Container fluid>
      <Row>
        <Col md={4} style={{ height: "100vh" }}>
          <Header />
          <Search />
          <UserList contactsState={contactsState} />
        </Col>
        <Col style={{ height: "100vh" }}>
          <Routes>
            <Route
              path="/:id"
              element={
                <>
                  <RightHeader /> <MessageBox />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <NoConversation />
                </>
              }
            />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatBox;
