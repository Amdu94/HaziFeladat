import userService from "../services/userServices.js";

const getUsers = async (req, res, next) => {
    try{
        const users = await userService.getUsers();
        res.json(users);
    } catch (err) {
        next(err);
    }

}
const addUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.addUser(email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const userController = {
    getUsers,
    addUser,
};

export default userController;
