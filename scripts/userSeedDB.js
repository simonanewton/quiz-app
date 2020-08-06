const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/quizapp"
);

<<<<<<< HEAD
const userSeed = [{
  firstname: "Toni",
  lastname: "Davis",
  username: "tdj",
  emailaddress: "tdj@gmail.com",
  password: "coolchick92",
  score: []
}]
=======
const userSeed = [
  {
    firstname: "Toni",
    lastname: "Davis",
    username: "tdj",
    emailAddress: "tdj@gmail.com",
    password: "coolchick92"
  },
  {
    firstname: "Nicole",
    lastname: "Obomsawin",
    username: "nicoleobom",
    emailAddress: "nicoleobom@yahoo.com",
    password: "dfjs8jc83jf"
  }

]
>>>>>>> 8f8047cafe9dd67965e81cdac85a0ea6c5257927

db.User
  .remove({})
  .then(() => db.User.collection.insert(userSeed))
  .then(data => {
    console.log(data.result.n + " humans inserted into the database!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
