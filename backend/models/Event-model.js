const mongoose = require("mongoose");

const event = new mongoose.Schema({
  title: {
    type: String
  },
  subTitle: {
    type: String
  },
  body: {
    type: String
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  eventDay: {
    type: String
  },
  eventStartTime: {
    type: String
  },
  eventEndTime: {
    type: String
  }
});

module.exports = mongoose.model("event", event);
