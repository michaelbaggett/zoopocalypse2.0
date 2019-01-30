const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();
const accountSid = "AC70a046ea6c5310a42c3b32595c054efd";
const authToken = "a7c281b2d3e91d0c3f66fc84904ab49d";

const client = require("twilio")(accountSid, authToken);

router.route("/login").post(passport.authenticate("local"), (req, res) => {
  // you can place req.body here, but then you log the password to console...bad call.
  console.log("login route hit");
  const { username, password } = req.body;
  const loginMessage = client.messages
    .create({
      to: this.user.phone,
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

router.route("/completedStatus").get((req, res) => {
  console.log("SUP");
});

router.route("/logout").get((req, res) => {
  console.log(req + "this is my /logout req");
  req.logout();
  const resObj = { success: false };
  if (!req.user) {
    resObj.success = true;
  }
  const logoutMessage = client.messages.create({
    to: this.user.phone,
    from: "+14054454072",
    body: "Your child has logged out of Zoopocalypse - You're safe......For now"
  });
  res.send(resObj);
});

// router.route("/login").post(passport.authenticate("local"), (req, res) => {
//   const { body } = req;
//   const { username, email, password, age } = body;

//   if (!username) {
//     return res.send({
//       success: false,
//       message: "Error: Please enter a username."
//     });
//   }
//   if (!email) {
//     return res.send({
//       success: false,
//       message: "Error: Please enter your email address."
//     });
//   }
//   if (!password) {
//     return res.send({
//       success: false,
//       message: "Error: Please enter a password."
//     });
//   }
//   if (!age) {
//     return res.send({
//       success: false,
//       message: "Error: Please enter an age."
//     });
//   }

//   console.log("before user");
//   db.User.findOne({
//     where: {
//       email: req.body.email
//     }
//   })
//     .then(user => {
//       if (!user) {
//         db.User.create({
//           name: req.body.username,
//           email: req.body.email,
//           password: req.body.password,
//           age: req.body.age
//         })
//           .then(() => {
//             res.send(user + "created");
//           })
//           .catch(function(err) {
//             console.log(err);
//             res.json(err);
//           });
//       } else {
//         res.send("Error: User already exists");
//       }
//     })
//     .catch(err => {
//       res.send("error" + err);
//     });
// });

module.exports = router;
