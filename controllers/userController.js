import UserModel from "../model/userModel.js"
import UserService from "../services/userService.js";

class UserController{
    async create(req, res) {
        try {
            const {name} = req.body;
            const user = await UserService.create(name);
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const users = await UserService.getAll();
            return res.json(users)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const user = await UserService.getOne(req.params.id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const user = req.body;
            const updateUser = await UserService.update(user.id, user.name);
            return res.json(updateUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const user = await UserService.delete(req.params.id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController();