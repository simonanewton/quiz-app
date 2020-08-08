const express = require("express");
const mongoose = require("mongoose");
// const routes = require('./routes');
// const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cookieParser);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quizapp", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},()=> console.log(`Connected to Database`));

app.get('/api/user'), function(req, res) {
    console.log('test!')
    // try {
    //     console.log('create user')
    //     res.send({"message": "cool"})

    // } catch (err) {
    //     res.status(500).send(err);
    // }
}

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
