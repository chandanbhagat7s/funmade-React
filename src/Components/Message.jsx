// CenteredMessage.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Message = ({ message }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center circular-gradient-animation "
      style={{
        height: "90vh",
        width: "100vw",
        fontSize: "2rem",
        color: "white",
      }}
    >
      <Row>
        <Col className="text-center">
          <p>{message}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Message;
