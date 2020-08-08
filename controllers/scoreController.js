// const db = require("../models");
// const bcrypt = require("bcrypt")
// const { request, response } = require("express");
// const Score = require("../models/score");

// module.exports = {
//     findAll: function(req, res) {
//         db.Score.find(req.query)
//         .then(dbScore => res.json(dbScore))
//         .catch(err => res.status(422).json(err));
//     },
//     findById: function(req, res) {
//         console.log(req.params)
//         db.Score.findById({ _id: req.params.id })
//         .then(dbScore => res.json(dbScore))
//         .catch(err => res.status(422).json(err));
//     },
//     findByUsername: function(req, res) {
//         db.Score.findOne(req.body)
//         .then(dbScore => res.json(dbScore))
//         .catch(err => res.status(422).json(err));
//     },
//     create: async function(req, res) {

//     }, 
//     update: function (req, res) {

//     }, 
//     remove: function (req, res) {
//         db.Score.findById(req.params.id)
//         .then(dbScore => dbScore.remove())
//         .then(dbScore => res.json(dbScore))
//         .catch(err => res.status(422).json(err));
//     }
// }