import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getUsers = async() => {
    try {
        return await prisma.user.findMany({});
    } catch (error) {
        handlePrismaError('Error fetching user:', error);
    }
}
const addUser = async (email, password) => {
    const existingUser = await prisma.user.findMany({}).then((users) =>
        users.some((user) => user.email === email && user.password === password)
    );
    if (existingUser) {
        throw new Error('The user already exists.');
    }

    const newUser = await prisma.user.create({
        data: { email, password }
    });
    return newUser;
};

function handlePrismaError(message, error) {
    console.error(message, error);
    throw error;
}

const userService = {
    getUsers,
    addUser,
}
export default userService;
