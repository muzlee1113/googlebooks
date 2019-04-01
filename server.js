const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var logger = require("morgan");


// Use morgan logger for logging requests
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks";
console.log(MONGODB_URI)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
