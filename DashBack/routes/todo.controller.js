var DB = require('../dao/db'); 
var ToDoDao = require('../dao/todos');


class ToDoController {

    static async testConnection(req, res, next) {
        var database = new DB;

        database.connect()
            .then(function () {
                console.log("Successful connect");
                res.json({ "DatabaseConnection": "Success" });
            })
            .catch(function (err) {
                console.error("Failed to connect");
                res.json({ "DatabaseConnection": { err } });
            })
    }

    static async getToDos(req, res, next) {
        let todos = await ToDoDao.getToDos();
   
        return res.json(todos);
    }

}

module.exports = ToDoController;