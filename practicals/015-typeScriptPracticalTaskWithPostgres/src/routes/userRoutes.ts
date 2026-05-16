import express from 'express';
import { getUsersController, getUserByIdController, createUserController, updateUserController, deleteUserController } from '../controllers/userController.js'

const userRoutes = express.Router();

userRoutes.get('/', getUsersController).post('/', createUserController)
userRoutes.get('/:id', getUserByIdController).put('/:id', updateUserController).delete('/:id', deleteUserController)

export default userRoutes;