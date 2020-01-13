const Event = require("../models/Event-model");

// Get all Events and send to frontend

// ROUTE CRUD WILL BE MANAGED VIA POSTMAN UNTIL ADMIN INTERFACE AND LOGIC
// IS BUILT
//____________________________________________________________//

// All events
exports.allEvents = (req, res) => {
  Event.find().exec((err, events) => {
    if (err) {
      return res.status(400).json({
        err: "err"
      });
    }
    res.json(events);
  });
};

// All events w/ pagination
exports.eventsPagination = (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = {};

  result.next = {
    page: page + 1,
    limit: limit
  };

  result.previous = {
    page: page - 1,
    limit: limit
  };

  Event.find().exec((err, event) => {
    if (err) {
      return res.status(400).json({ err: "err" });
    }
    result.event = event.reverse().slice(startIndex, endIndex);
    res.json(result.event);
    console.log(result);
    // res.json(event);
    // console.log(event);
  });
};

// Create an event ( will be created from postman)
exports.addEvent = (req, res) => {
  let newEvent = new Event(req.body);
  newEvent.save((err, result) => {
    if (err) {
      return res.status(400).json({
        err: "err"
      });
    }
    res.status(200).json(result);
    console.log("event successfully created.");
  });
};

// Delete Event (will be removed from postman)
exports.deleteEvent = (req, res) => {
  let event = req.body;
  event.remove((err, result) => {
    if (err) {
      return res.status(400).json({
        err: "err"
      });
    }
    res.json({ msg: "event removed successfully." });
  });
};

// Update an Event (will be removed from postman)
exports.updateEvent = (req, res) => {};
