const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Score
        .find(req.query)
        .then(quizAppDB => res.json(quizAppDB))
        .catch(err => res.status(422).json(err));
    }
}