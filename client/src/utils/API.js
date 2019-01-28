const axios = require("axios");

export default {
  userLogin: function(userCreds) {
    return axios.post("/api/auth/login", userCreds);
  },
  userSignup: function(userCreds) {
    return axios.post("/api/auth/signup", userCreds);
  },
  userSignOut: function() {
    return axios.get("/api/auth/logout");
  },
  getAnimals: function() {
    return axios.get("/api/animals");
  }
};
