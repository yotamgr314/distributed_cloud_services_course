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

   /* WISHLIST[pc,laptop,phone] 
   Rodion idea: array of wishlist.
   the map will display only users with non empty array.
   user with both wishlist and donations ad will be displayed with 2 colors combined. 
   user with only a wishlist will be displayed with color x.
   user with only donation ad will be displayed with color y. 

   
   */
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const User = mongoose.model('User', userSchema); /* creating the model from the schema */

export default User;