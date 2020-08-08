const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    emailaddress: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true},
    scores: [{type: mongoose.Schema.Types.ObjectId, ref: 'Score'}]
})

// userSchema.methods.comparePassword = function(password, callback) {
//     console.log(this.password + " and " + password)
//     return callback(null, bcrypt.compareSync(password, this.password));
// };

const User = mongoose.model('User', userSchema);

module.exports = User;