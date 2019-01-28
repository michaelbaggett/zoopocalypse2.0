const router = require("express").Router();
const animalsController = require("../../client/controllers/animalsController");

router.route("/");
app
  .get("/", function(req, res) {
    logger.info("/ is hit!");
    // define what we want from db.user
  })
  .then(res, function(res) {
    // if user has account, check creds
    // if not user needs to create an account
  });
app
  .post("/createAcct", function(req, res) {
    // send account creds to db
  })
  .then(res, function(res) {
    // alert your registers
    // send to game play page
  });
