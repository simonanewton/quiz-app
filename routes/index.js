const path = require("path");
const router = require("express").Router();
const api = require("./api");
const Score = require('../models/score');

router.use("/api", api);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// router.get('/api/score', (req, res) => {
//     Score.find({})
//     .then(quizappDB => {
//         res.json(quizappDB)
//     })
// })

module.exports = router;
