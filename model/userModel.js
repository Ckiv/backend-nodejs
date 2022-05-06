import connection from "./db.js"
class UserModel {
    create(name) {
        const sql = "INSERT INTO users (name) VALUES(?)";

        connection.query(sql, [name], function(err, results) {
            if(err) console.log(err);
        });
    }
}


export default new UserModel();