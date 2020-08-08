const db = require('../models');

module.exports = {

  // find all users by score, sort by ascending
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ score : 1 })
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
    db.User
      .create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.json(422).json(err));
  }

}