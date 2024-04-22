import express from 'express';
import bodyParser from 'body-parser';
import productController from "./controller/productController.js";
import userController from "./controller/userController.js";

const app = express();
app.use(bodyParser.json());

app.get('/products', productController.getProducts);
app.get('/users', userController.getUsers);
app.post('/add-product', productController.addProduct);
app.post('/add-user', userController.addUser);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
