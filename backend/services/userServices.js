import {PrismaClient} from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

const getUsers = async() => {
    try {
        return await prisma.user.findMany({});
    } catch (error) {
        handlePrismaError('Error fetching user:', error);
    }
}
const getUserByEmailAndPassword = async (email, password) => {
    try {
        const existingUsers = await prisma.user.findMany({}).then((users) =>
            users.some((user) => user.email === email && user.password === password)
        );
        if (existingUsers || ( process.env.USER_EMAIL === email && process.env.USER_PASSWORD === password)){
            return true;
        } else{
            return false;
        }
    } catch (error) {
        console.error('Error when querying the user:', error);
        throw error;
    }

};


function handlePrismaError(message, error) {
    console.error(message, error);
    throw error;
}

const userService = {
    getUsers,
    getUserByEmailAndPassword
}
export default userService;
