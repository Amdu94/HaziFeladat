import userService from "../services/userServices.js";

const getUsers = async (req, res, next) => {
    try{
        const users = await userService.getUsers();
        res.json(users);
    } catch (err) {
        next(err);
    }

}
const getUserByEmailAndPassword = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.getUserByEmailAndPassword(email, password);
        if (user) {
            res.status(200).json({ message: 'Successful login!' });
        } else {
            res.status(401).json({ message: 'Incorrect email address or password!' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const userController = {
    getUsers,
    getUserByEmailAndPassword
};

export default userController;
