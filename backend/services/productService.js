import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getProducts = async() => {
    try {
        return await prisma.product.findMany({});
    } catch (error) {
        handlePrismaError('Error fetching user:', error);
    }
}
const addProduct = async (name, price, image, isActive) => {
    const existingProduct = await prisma.product.findMany({}).then((products) =>
        products.some((product) => product.name === name && product.price === price && product.image === image)
    );
    if (existingProduct) {
        throw new Error('The product already exists.');
    }

    const newProduct = await prisma.product.create({
        data: { name, price, image, isActive }
    });
    return newProduct;
};

function handlePrismaError(message, error) {
    console.error(message, error);
    throw error;
}

const productService = {
    getProducts,
    addProduct,
}
export default productService;
