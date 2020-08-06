const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema ({
    username: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    subject: [{
        id: { type: String, required: true },
        subj: { type: String, required: true },
        difficulty: [{
            id: { type: String, required: true },
            difficulty: { type: Number, required: true }
        }]
    }]
})

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;