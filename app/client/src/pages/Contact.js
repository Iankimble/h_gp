import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { render } from "@testing-library/react";
import { sendMsg } from "./api";
import contactImg from "../images/email-3249062_1280.png";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      to: "ian.kimble571@gmail.com",
      from: "",
      subject: "",
      text: "",
      error: "",
      confirmSent: false
    };
  }

  handleChange = name => event => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    const { from, subject, text, to } = this.state;
    const msg = {
      from,
      subject,
      text,
      to
    };
    console.log(msg);
    sendMsg(msg).then(msg => {
      if (msg.error) this.setState({ eror: msg.error });
      else
        this.setState({
          error: "",
          from: "",
          subject: "",
          text: ""
        });
    });
    this.setState({ confirmSent: true });
  };

  contactForm = (name, from, subject, text) => (
    <div>
      <div
        style={{
          textAlign: "center",
          marginTop: "15px",
          fontFamily: "Gelasio"
        }}
      >
        <h1 style={{ fontSize: "40px" }}>Contact us</h1>
        <hr />
        <div>
          <img
            src={contactImg}
            alt={"contact image"}
            style={{
              height: "50%",
              width: "50%",
              paddingLeft: "2%",
              paddingRight: "2%"
            }}
          />
        </div>
      </div>
      <Container
        style={{
          borderRadius: "25px",
          padding: "10px",
          fontFamily: "Gelasio"
        }}
      >
        <Form
          style={{ margin: "15px", paddingRight: "20%", paddingLeft: "20%" }}
        >
          <Form.Group>
            <Form.Control
              type="name"
              placeholder="Name"
              onChange={this.handleChange("name")}
              value={name}
              style={{
                backgroundColor: "#transparent",
                borderColor: "#f7a655",
                borderWidth: "1.5px"
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={this.handleChange("from")}
              value={from}
              style={{
                backgroundColor: "transparent",
                borderColor: "#f7a655",
                borderWidth: "1.5px"
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Subject"
              onChange={this.handleChange("subject")}
              value={subject}
              style={{
                backgroundColor: "transparncy",
                borderColor: "#f7a655",
                borderWidth: "1.5px"
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="message..."
              rows="5"
              onChange={this.handleChange("text")}
              value={text}
              style={{
                backgroundColor: "transparency",
                borderColor: "#f7a655",
                borderWidth: "1.5px"
              }}
            />
          </Form.Group>
        </Form>
        <div
          style={{
            alignContent: "center",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          <Button
            size="lg"
            style={{
              width: "300px",
              margin: "5px",
              backgroundColor: "#7022c3",
              fontFamily: "Gelasio",
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: "2px"
            }}
            onClick={this.submit}
          >
            Send
          </Button>
        </div>
      </Container>
    </div>
  );

  render() {
    const { name, from, subject, text } = this.state;
    if (this.state.confirmSent === false) {
      return <div>{this.contactForm(name, from, subject, text)}</div>;
    } else if (this.state.confirmSent === true) {
      return (
        <div
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontFamily: "Gelasio",
            marginTop: "15px"
          }}
        >
          <h2>Mesaage sent!</h2>
          <hr />
          <p
            style={{
              fontSize: "14px"
            }}
          >
            Thank you for your message. We'll be in touch very soon!
          </p>
        </div>
      );
    }
  }
}

export default Contact;
