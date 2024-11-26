import mongoose from 'mongoose';

/* NOTE - add to the user a rank 
profileImage (String, optional): URL for the user’s profile picture.
location (Object, optional):
latitude (Number): User's latitude.
longitude (Number): User's longitude.
address (String): Human-readable address.
points (Number, default: 0): Points for user engagement and activity.
ratings (Array of Numbers, optional): Ratings given by other users.
 */
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
    age: {
        type: Number,
        required: [true, 'A user must have an age']
    },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const User = mongoose.model('User', userSchema); /* creating the model from the schema */

export default User;