const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/quizapp"
);

console.log("boop")

const userSeed = [
  {
    firstname: "Toni",
    lastname: "Davis",
    username: "tdj",
    emailAddress: "tdj@gmail.com",
    password: "coolchick92",
    scores: [{
      score: 542,
      difficulty: 5,
      subject: "English"
    }]
  },
  {
    firstname: "Nicole",
    lastname: "Obomsawin",
    username: "nicoleobom",
    emailAddress: "nicoleobom@yahoo.com",
    password: "dfjs8jc83jf",
    scores: [{
      score: 432,
      difficulty: 4,
      subject: "Math"
    }]
  }

];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + "  records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
