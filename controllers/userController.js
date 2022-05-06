import UserModel from "../model/userModel.js"
import UserService from "../services/userService.js";

class UserController{
    create(req, res) {
        try {
            const {name} = req.body;
            const user = UserService.create(name);
            res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController();