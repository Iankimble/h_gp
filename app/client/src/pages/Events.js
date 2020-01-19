import React, { Component } from "react";
import { allEvents } from "./api";

import {
  Button,
  Card,
  CardGroup,
  CardDeck,
  CardColumns,
  Row
} from "react-bootstrap";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      page: 1,
      limit: 2,
      noDataDisplay: true
    };
  }

  getEvents = () => {
    const limit = this.state.limit;
    const page = this.state.page;
    allEvents(page, limit).then(data => {
      if (data.error) {
        console.log("error");
      } else {
        this.setState({ events: data, noDataDisplay: false });
      }
      console.log(this.state.events);
    });
    let eventsData = this.state.events.reverse();
  };

  loadNext = () => {
    this.setState({ page: this.state.page + 1 });
    this.getEvents();
    console.log(this.state.page);
  };

  loadPrev = () => {
    this.setState({ page: this.state.page - 1 });
    this.getEvents();
    console.log(this.state.page);
  };

  componentDidMount() {
    this.getEvents(this.state.page);
    console.log(this.state.page);
  }

  renderEvents = events => {
    return (
      <div
        style={{
          alignContent: "center",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        {events.map((event, i) => {
          return (
            <div key={i}>
              <CardGroup
                style={{
                  margin: "15px auto",
                  borderRadius: "25px",
                  margin: "25px",
                  backgroundColor: "#f7a655",
                  color: "white",
                  fontFamily: "Gelasio"
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <h1>{event.title}</h1>
                  </Card.Title>
                  <h4>
                    <i>{event.eventDay}</i>
                  </h4>
                  <hr />
                  <Card.Text> {event.body}</Card.Text>
                  <br />
                  <Button
                    size="lg"
                    style={{
                      backgroundColor: "#7022c3",
                      border: "none",
                      width: "300px",
                      borderStyle: "solid"
                    }}
                  >
                    Get tickets
                  </Button>
                  <br />
                </Card.Body>
              </CardGroup>
              <hr />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { events } = this.state;
    if (this.state.noDataDisplay === true) {
      return (
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontFamily: "Gelasio",
              marginTop: "15px"
            }}
          >
            Events
          </h1>
          <hr />{" "}
          <h2
            style={{
              textAlign: "center",
              fontSize: "14px",
              fontFamily: "Gelasio",
              marginTop: "15px"
            }}
          >
            Sorry, no events to display at this time.
          </h2>
        </div>
      );
    } else if (this.state.noDataDisplay === false) {
      return (
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontFamily: "Gelasio",
              marginTop: "15px"
            }}
          >
            Events
          </h1>
          <hr />

          {this.renderEvents(events)}
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
                width: "200px",
                margin: "5px",
                backgroundColor: "#7022c3",
                border: "none"
              }}
              onClick={this.loadPrev}
            >
              Prev
            </Button>
            <Button
              size="lg"
              style={{
                width: "200px",
                margin: "5px",
                backgroundColor: "#7022c3",
                border: "none"
              }}
              onClick={(this, this.loadNext)}
            >
              Next
            </Button>
          </div>
        </div>
      );
    }
  }
}
export default Events;
