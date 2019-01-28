const router = require("express").Router();

const authroutes = require("./authroutes");

router.use("/auth", authroutes);

module.exports = router;
