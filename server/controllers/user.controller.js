import User from '../models/user.model.js';

/* Create new user */
export const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body); // NOTE - create() is a built in mongoose function which creates an instance of document and saves it to MongoDB, it returns a promise.
        res.status(201).json(newUser); // Respond with the saved user

    }catch (err) {

        res.status(400).json({
            message: err.message
        });
    }
};


// Get all users

export const getUsers = async (req, res) => {
    try {
        const users = await User.find(); // NOTE - find() is a built in mongoose function that returns all the users documents in the mongoDB, it returns a promise.

        if (users.length === 0) {
            return res.status(200).json([]); // Return an empty array with a 200 status
        }

        res.status(200).json(users); // Send back the list of users

    } catch (err) {
        res.status(500).json({ message: err.message }); // Handle server errors
    }
};


