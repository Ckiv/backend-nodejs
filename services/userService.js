import User from "../model/userModel.js"

class UserService {
    async create (name) {
        const createUser = await User.create(name);
        return createUser;
    }
    async getAll() {
        const users = await User.getAll();
        return users;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const user = await User.getOne(id);
        return user;
    }
    async update(id, name) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const user = await User.updateUser(id, name);
        return user;
    }
    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const user = await User.delete(id);
        return user;
    }
}

export default new UserService();