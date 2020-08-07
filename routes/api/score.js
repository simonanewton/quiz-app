const router = require("express").Router();
const scoreController = require("../../controllers/scoreController");
const { db } = require("../../models/user");

//Connects to "/api"
router.get('/api/user', (req, res) => {
    db.User.find({})
})

module.exports = router;