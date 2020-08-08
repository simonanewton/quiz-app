const db = require("../models");
//const bcrypt = require("bcrypt")
const { request, response } = require("express");
const User = require("../models/user");

module.exports = {

  // find all users by score, sort by ascending
  findAll: function(req, res) {
    db.User
      .find(req.query) // find all
      .limit(10) // limit to 10 users
      .sort({ score: -1 }) // sort them in descending order
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));

  },

  // find all by id
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  // creating new users/posting to json
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