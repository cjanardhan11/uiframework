const express = require("express");
const route = express.Router();
const { getUserData } = require("../controller/user-controller.js");

route.get("/getUser", getUserData);

module.exports = route; 