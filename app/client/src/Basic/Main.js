import React from "react";
import { Jumbotron, Container, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainImg from "../images/money-2724241_1920.jpg";

const Main = () => (
  <div>
    <img
      src={mainImg}
      style={{
        height: "68vh",
        width: "90vw",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15px",
        paddingLeft: "2px",
        paddingRight: "2px"
      }}
    />
    <Container
      style={{
        textAlign: "center",
        marginTop: "15px",
        fontFamily: "Gelasio"
      }}
    >
      <h1 style={{ fontSize: "45px", textDecoration: "underline" }}>
        Welcome to Greenprint
      </h1>
      <h3>
        <i style={{ fontSize: "20px" }}>
          financial freedom, one step at a time
        </i>
      </h3>
    </Container>
  </div>
);

export default Main;
