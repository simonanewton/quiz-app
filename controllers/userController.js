const db = require("../models");
//const bcrypt = require("bcrypt")
const { request, response } = require("express");
const User = require("../models/user");

module.exports = {
  findAll: function(req, res) {
    db.User
      .findAll({})
      .projection({ username: 1, scores: 1 })
      .sort({ "scores.0.score": -1 })
      .limit(10)
  },

  create: async function(req, res) {
    try {
      //req.body.password = bcrypt.hashSync(req.body.password, 10);
      let user = new User(req.body);
      let result = await user.save();
      res.send(result);
      // console.log("Create user")
      // res.send({"message": "This is good"})
    } catch (err) {
      res.status(500).send(err);
    }
  }

}