const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    scores: [{
        score: { type: Number },
        difficulty: { type: Number },
        subject: { type: String }
    }]
});

// userSchema.methods.comparePassword = function(password, callback) {
//     console.log(this.password + " and " + password)
//     return callback(null, bcrypt.compareSync(password, this.password));
// };

const User = mongoose.model('User', userSchema);

module.exports = User;