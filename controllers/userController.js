const db = require("../models");
//const bcrypt = require("bcrypt")
const { request, response } = require("express");

module.exports = {

  // find all users by score, sort by ascending
  findAll: function(req, res) {
    db.User
      .find(req.query) // find all
      .limit(10) // limit to 10 users
      .sort({ scores: -1 }) // sort them in descending order
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
  create: function(req, res) {
    console.log(req.body);
    db.User
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  }

}