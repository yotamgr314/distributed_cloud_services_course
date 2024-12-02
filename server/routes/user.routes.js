const express = require('express'); 
const userController = require('../controllers/user.controller.js');


const router = express.Router();

router.post('/', userController.createUser); // POST /api/users - Create a new user
router.get('/', userController.getUsers); // GET /api/users - Get all users
router.get('/:id', userController.getUserById); // GET /api/users/:id - Get a single user by ID, the the id parameter will be passed as path parameter. 

module.exports = router;
