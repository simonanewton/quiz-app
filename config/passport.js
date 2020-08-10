var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

const validate = async (email, password, done) => {
    const dbUser = await db.User.findOne({ where: { email: email } });

    if (!dbUser) return done(null, false, { message: "Incorrect email." });

    else if (!dbUser.validPassword(dbUser, password)) return done(null, false, { message: "Incorrect password." });

    return done(null, dbUser);
}

passport.use(new LocalStrategy({ usernameField: "email" }, validate));

passport.serializeUser((user, cb) => cb(null, user));

passport.deserializeUser((obj, cb) => cb(null, obj));

module.exports = passport;
