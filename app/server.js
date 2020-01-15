// Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
// const proxy = require("http-proxy-middleware");

dotenv.config();

const app = express();

// React front end
app.use(express.static(path.join(__dirname, "client", "build")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Routes
const contactRoute = require("./routes/contact-route");
const eventRoute = require("./routes/event-route");

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
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
