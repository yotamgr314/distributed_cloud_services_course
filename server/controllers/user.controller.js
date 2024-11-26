import User from '../models/user.model.js';

/* Create new user */
export const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body); // `User.create` will also save the user to the MongoDB.
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
        const users = await User.find({}); // Find all users in the database
        if (!users) {
            res.status(404).json({ message: 'No users found' });
        }

        if(users.length === 0){
            res.status(204).json({ message: 'empty response' });
        }

        res.status(200).json(users); // Send back the list of users

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

