var DB = require('./db'); 

let toDoCollection

var MongoClient = require('mongodb').MongoClient;
var DB = require('../dao/db'); 

class ToDoDao {

    static async getToDos() {
        try {
            if (this.toDoCollection) {
                console.log('already connected');
            }
            else {
                var database = new DB;
                let uri = database.getUri();
                let client = await MongoClient.connect(uri, { useNewUrlParser: true });
                let collection = await client.db("Dashboard").collection("todos");
                this.toDoCollection = collection;
            }
           
            console.log('Connected');
            let cursor = await this.toDoCollection.find();
            return cursor.toArray();
        } catch (e) {
            console.error(e);
            return []
        } finally {
            // need to close connection
        }
    }

    static async addToDo(todo) {
        try {
            if (this.toDoCollection) {
                console.log('already connected');
            }
            else {
                let client = await MongoClient.connect(uri);
                let collection = await client.db("Dashboard").collection("todos");
                this.toDoCollection = collection;
            }

            let result = await this.toDoCollection.insertOne(todo);
            console.log('Inserted: ' + todo);
        } catch (e){
            console.error(e);
        }

        // Do we return all the todos now?
    }

}

module.exports = ToDoDao;