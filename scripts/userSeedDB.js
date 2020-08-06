const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/quizapp"
);

const userSeed = [{
  firstname: "Toni",
  lastname: "Davis",
  username: "tdj",
  emailAddress: "tdj@gmail.com",
  password: "coolchick92"
}]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " humans inserted into the database!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
