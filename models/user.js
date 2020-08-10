const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
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

// Define schema methods
userSchema.methods = {
	checkPassword: function (user, inputPassword) {
		return bcrypt.compareSync(inputPassword, user.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    console.log('presave')
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema);

module.exports = User;