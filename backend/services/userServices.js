import {PrismaClient} from '@prisma/client';

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
        return await prisma.user.findMany({}).then((users) =>
            users.some((user) => user.email === email && user.password === password)
        );
    } catch (error) {
        console.error('Hiba a felhasználó lekérdezésekor:', error);
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
