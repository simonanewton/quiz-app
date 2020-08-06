const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(cookieParser);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(require("./routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quizAppDB", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},()=> console.log(`Connected to Database`));


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
