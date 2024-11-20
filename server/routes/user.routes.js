const express = require('express');
const { createUser, getUsers } = require('../controllers/user.controller');

const router = express.Router();

// Define routes for user operations
router.post('/', createUser); // POST /api/users - Create a new user
router.get('/', getUsers); // GET /api/users - Get all users

module.exports = router;
