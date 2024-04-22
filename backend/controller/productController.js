import productService from "../services/productService.js";

const getProducts = async (req, res, next) => {
    try{
        const products = await productService.getProducts();
        res.json(products);
    } catch (err) {
        next(err);
    }

}
const addProduct = async (req, res) => {
    const { name, price, image, isActive } = req.body;
    try {
        const product = await productService.addProduct(name, price, image, isActive);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const productController = {
    getProducts,
    addProduct,
};

export default productController;
