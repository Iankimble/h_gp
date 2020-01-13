// Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

//Routes
const contactRoute = require("./routes/contact-route");
const eventRoute = require("./routes/event-route");

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: "ian.kimble571@gmail.com",
//   from: "greezingart@gmail.com",
//   subject: "testing new sen grid message - Ian",
//   text: "this should be my stuff test from another email ",
//   // html: "<strong>Scrong text doesnt print</strong>",
//   html:
//     "html is where the message actually goes. We need to figure out what text does <br/>crong text doesnt print"
// };
// sgMail.send(msg);

//Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use("/", contactRoute);
app.use("/", eventRoute);

// Mongo Atlas DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected"))
  .catch(err => {
    console.log(`db connection error : ${err.message}`);
    process.exit();
  });

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
