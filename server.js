// lib imports
const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");

// localized imports
const db = require("./models");
const routes = require("./routes");
const session = require("express-session");
const passport = require("./config/passport");

// app instantiation
const app = express();
const PORT = process.env.PORT || 3001;

// middlewarez
// morgan is a bad ass logger
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let syncOptions = { force: true };
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  syncOptions = {};
}

app.use(
  session({ secret: "zoopocalypse", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// asynchronous stuff needs to be checked and exceptions/errors need to be caught.
// try {
db.sequelize.sync(syncOptions).then(() => {
  db.User.create({
    username: "asdf",
    password: "asdf"
  }).then(console.log("user created"));
});
//       .then(() => {
//         logger.log("first user created");
//       })
//       .catch(err => {
//         logger.error("An error occurred while creating a user", err);
//       });
//   });
// .catch(err => {
//   logger.error("An error occurred while initializing the database");
// } catch (e) {
//   logger.error("sequelize error", e);
// }

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
