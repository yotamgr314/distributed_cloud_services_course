import User from '../models/user.model.js';

// Create a new user
export const createUser = async (req, res) => {
    try {

        const user = new User(req.body); // Create a new user from the request body
        const savedUser = await user.save(); // Save the user to the database
        res.status(201).json(savedUser); // Send back the saved user
    } catch (err) {
        res.status(400).json({ message: err.message });
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

