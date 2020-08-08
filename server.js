const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
//const cookieParser = require('cookie-parser');
=======
const routes = require('./routes');
const cookieParser = require('cookie-parser');
>>>>>>> 68fce91338fd49ac683e6ec8b0479eef1432f869

const app = express();
const PORT = process.env.PORT || 3001;

//app.use(cookieParser);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quizapp", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},()=> console.log(`Connected to Database`));

app.use(require("./routes"));


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
