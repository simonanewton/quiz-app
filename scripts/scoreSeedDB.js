const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/quizapp"
);

const scoreSeed = [{
    subject: "English",
    score: 54
}]

db.Score
    .remove({})
    .then(() => db.Score.collection.insertMany(scoreSeed))
    .then(data => {
        console.log("score inserted!")
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })