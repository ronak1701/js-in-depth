import pool from '../connection';

interface User{
    id?:number;
    name?:string;
    age?:number;
    email?:string;
    city?:string;
}

export const getUsers = async () => {
    try{
        const result = await pool.query("SELECT * FROM customers");
        return result.rows;
    }catch(err){
        console.log(err);
        return {message: "Error fetching users"};
    }
}

export const getUserById = async (id: string) => {
    try{
        const result = await pool.query("SELECT * FROM customers WHERE cust_id = $1", [id]);
        return result.rows;
    }catch(err){
        console.log(err);
        return {message: "Error fetching user"};
    }
}

export const createUser = async(user:User) =>{
    try{
        const {name, age, email, city} = user;
        const result = await pool.query("INSERT INTO customers (cust_name, cust_age, cust_email, cust_city) VALUES ($1, $2, $3, $4)", [name, age, email, city]);
        return {message: "User created successfully"};
    }catch(err){
        console.log(err);
        return {message: "Error creating user"};
    }
}

export const updateUser = async(user:User) =>{
    try{
        const {id, name, age, email, city} = user;
        const result = await pool.query("UPDATE customers SET cust_name = $1, cust_age = $2, cust_email = $3, cust_city = $4 WHERE cust_id = $5", [name, age, email, city, id]);
        return {message: "User updated successfully"};
    }catch(err){
        console.log(err);
        return {message: "Error updating user"};
    }
}

export const deleteUser = async(id:string) =>{
    try{
        const result = await pool.query("DELETE FROM customers WHERE cust_id = $1", [id]);
        return {message: "User deleted successfully"};
    }catch(err){
        console.log(err);
        return {message: "Error deleting user"};
    }
}