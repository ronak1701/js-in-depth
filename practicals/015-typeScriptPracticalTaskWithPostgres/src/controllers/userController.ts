import {Request, Response} from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../models/userModel';

export const getUsersController = async (req:Request, res:Response) => {
    try{
        const result = await getUsers();
        res.json(result);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Error fetching users"});
    }
}

export const getUserByIdController = async (req:Request, res:Response) => {
    try{
        const result = await getUserById(req.params.id as string);
        res.json(result);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Error fetching user"});
    }
}

export const createUserController = async(req:Request, res:Response) =>{
    try{
        const {name, age, email, city} = req.body;
        const result = await createUser({name, age, email, city});
        res.json(result);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Error creating user"});
    }
}

export const updateUserController = async(req:Request, res:Response) =>{
    try{
        const {name, age, email, city} = req.body;
        const result = await updateUser({id:Number(req.params.id), name, age, email, city});
        res.json(result);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Error updating user"});
    }
}

export const deleteUserController = async(req:Request, res:Response) =>{
    try{
        const result = await deleteUser(req.params.id as string);
        res.json(result);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Error deleting user"});
    }
}