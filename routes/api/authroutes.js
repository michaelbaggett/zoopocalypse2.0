const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();
const accountSid = "AC70a046ea6c5310a42c3b32595c054efd";
const authToken = "a7c281b2d3e91d0c3f66fc84904ab49d";
//const API = require("../../client/src/utils/API");

const client = require("twilio")(accountSid, authToken);

// getNumber = () => {
//   API.phoneNumber().then(res => {
//     console.log(res.data);
//   });
// };

router.route("/login").post(passport.authenticate("local"), (req, res) => {
  // you can place req.body here, but then you log the password to console...bad call.
  console.log("login route hit");
  const { username, password } = req.body;
  const loginMessage = client.messages
    .create({
      to: "+18048393249",
      from: "+14054454072",
      body:
        "Your child has logged in to Zoopocalypse - watch out for the Elephant!!!"
    })
    .then(
      message => console.log("user login"),
      res.json({
        isAuth: true
      })
    );
});

router.route("/signup").post((req, res) => {
  console.log("signup route hit");
  const { username, password, age, phone } = req.body;
  db.User.create({
    username,
    password,
    age,
    phone
  })
    .then(() => {
      res.redirect(307, "/api/auth/login");
    })
    .catch(err => {
      console.log(err);
      res.send("error" + err);
    });
});

// router.route("/completedStatus").get((req, res) => {
//   console.log(res);
// });

router.route("/logout").get((req, res) => {
  console.log(req + "this is my /logout req");
  req.logout();
  const resObj = { success: false };
  if (!req.user) {
    resObj.success = true;
  }
  const logoutMessage = client.messages.create({
    to: "+14057613879",
    from: "+14054454072",
    body: "Your child has logged out of Zoopocalypse - You're safe......For now"
  });
  res.send(resObj);
});

module.exports = router;
