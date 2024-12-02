const mongoose = require('mongoose'); // Use require for mongoose


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name']
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    profilePicture: {
        type: String /* for the url containing the photo */
    },
    phone: {
        type: Number
    },
    ratingPoints: {
        
        type: Number,
        default: 0
    },
    badges: [
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String
            },
            icon: {
                type: String /* for the url containing the badge icon */
            },
            earnedAt: {
                 type: Date,
                default: Date.now 
            }
        }

    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('UserSchema', userSchema);





