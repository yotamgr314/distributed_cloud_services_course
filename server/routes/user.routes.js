import express from 'express';

const router = express.Router();
import { createUser, getUsers } from '../controllers/user.controller';

router.post('/', createUser); // POST /api/users - Create a new user
router.get('/', getUsers); // GET /api/users - Get all users

export default router;
