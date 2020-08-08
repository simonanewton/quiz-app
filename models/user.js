const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstname: { 
        type: String 
    },
    lastname: { 
        type: String
    },
    emailaddress: { 
        type: String, 
        required: true, 
        unique: true 
    },
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true
    },
    scores: [{
        score: { 
            type: Number 
        },
        difficulty: { 
            type: Number 
        },
        subject: { 
            type: String 
        }
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;