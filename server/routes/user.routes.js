import express from 'express';

const router = express.Router();
import { createUser, getUsers } from '../controllers/user.controller.js';

router.post('/', createUser); // POST /api/users - Create a new user
router.get('/', getUsers); // GET /api/users - Get all users
// router.get('/:id', getuser); // GET /api/users/:id - Get a single user by ID

export default router;
