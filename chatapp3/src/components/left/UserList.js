import React from "react";
import User from "./User";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const UserList = ({ contactsState }) => {
  console.log(contactsState);
  return (
    <Row
      style={{ height: "70%", backgroundColor: "#a5ff78" }}
      className="d-flex align-items-start overflow-y-scroll"
    >
      {contactsState.length > 0 ? (
        contactsState.map((u) => (
          <Link
            to={`/${u.id}`}
            className="text-dark text-decoration-none"
            key={u.id}
          >
            <User u={u} />
          </Link>
        ))
      ) : (
        <span className="text-dark text-decoration-none">
          Their is no user found
        </span>
      )}
    </Row>
  );
};

export default UserList;
