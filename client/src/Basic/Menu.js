import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../images/greenprint_revised_logo.png";

const Menu = () => (
  <>
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{
        backgroundColor: "#7022c3",
        fontFamily: "Gelasio"
      }}
    >
      <Navbar.Brand style={{ fontSize: "30px" }}>
        <img
          src={logo}
          style={{
            height: "75px",
            width: "75px",
            margin: "2px",
            padding: "4px"
          }}
        />
        <Link to="/" style={{ color: "white" }}>
          Greenprint
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle areia-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link>
          <Link to="/calculator" style={{ color: "white" }}>
            Calculator
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="events" style={{ color: "white" }}>
            Events
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="blog" style={{ color: "white" }}>
            Blog
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="about" style={{ color: "white" }}>
            About
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="contact" style={{ color: "white" }}>
            Contact Us
          </Link>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default withRouter(Menu);
