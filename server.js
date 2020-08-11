const express = require("express");
const session = require('express-session');
const passport = require("./config/passport");
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb+srv://newuser123:nicole123@gtechproject3.lp7z3.mongodb.net/quizapp?retryWrites=true&w=majority";
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session
app.use(session({ secret: "study", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	console.log("req.session", req.session);
	return next();
});

app.use(routes);

app.use(express.static("client/build"));

// if (process.env.NODE_ENV === "production") {
	
// }

// UNCOMMENT THIS WHEN READY TO USE ATLAS
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},()=> console.log("Connected to Atlas Database"));

// REMOVE THIS WHEN READY TO USE ATLAS
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quizapp", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},()=> console.log(`Connected to Local MongoDB Database`));

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
