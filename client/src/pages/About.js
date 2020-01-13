import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import aboutImg from "../images/piggy-bank-2889042_1920.jpg";

const About = () => (
  <div>
    <div
      style={{
        textAlign: "center",
        marginTop: "15px",
        fontFamily: "Gelasio"
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "15px", fontSize: "40px" }}>
        About Greenprint
      </h1>
      <hr />
      <div
        style={{
          alignContent: "center"
        }}
      >
        <img
          src={aboutImg}
          alt={"about image"}
          style={{
            height: "45vh",
            width: "50vh",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
      </div>
      <p style={{ height: "", margin: "50px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
);

export default About;
