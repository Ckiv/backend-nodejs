import UserModel from "../model/userModel.js"

class UserService {
    create (name) {
        const createUser = UserModel.create(name);
        return createUser;
    }
}

export default new UserService();