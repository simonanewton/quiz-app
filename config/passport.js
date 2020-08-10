var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

const validate = async (username, password, done) => {
    console.log(username, password)
    const dbUser = await db.User.findOne({ username: username });
    
    if (!dbUser) return done(null, false, { message: "Incorrect email." });

    else if (!dbUser.checkPassword(dbUser, password)) return done(null, false, { message: "Incorrect password." });
    console.log(dbUser)
    return done(null, dbUser);
}

passport.use(new LocalStrategy({ usernameField: "username" }, validate));

passport.serializeUser((user, cb) => cb(null, user));

passport.deserializeUser((obj, cb) => cb(null, obj));

module.exports = passport;
