const db = require("../models");

module.exports = {
  findAll: function(req) {
    req.animals.findAll({}).then(res, function(res) {
      console.log(res);
    });
  }
};
