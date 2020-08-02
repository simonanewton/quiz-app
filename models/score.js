const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema ({
    username: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    subject: { type: String },
    score: { type: Number }
})

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;