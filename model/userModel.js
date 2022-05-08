import sequelize from "./db.js"
import { Sequelize, DataTypes, Model } from 'sequelize'


class User extends Model {
    async create (name) {
        const user = await User.create({name: name});
        return user;
    }
    async getAll () {
        const users = await User.findAll();
        return users;
    }
    async getOne (id) {
        const user = await User.findByPk(id);
        return user;
    }
    async updateUser (id, name) {
        const user =  await User.update({ name: name }, {
            where: {
                id: id
            }
        });
        return user;
    }
    async delete (id) {
        const user = await User.destroy({
            where: {
                id: id
            }
        });
        return user;
    }
}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
});


export default new User;