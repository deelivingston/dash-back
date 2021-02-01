/*
This module provides helper methods to allow the application to interact with a MongoDB database.
*/

var MongoClient = require('mongodb').MongoClient;

function DB() {
	this.db = null;			// The MongoDB database connection

	var conn1 = "mongodb+srv://";
	var conn2 = "@cluster0.qbyvt.mongodb.net/Dashboard?retryWrites=true&w=majority";
	dbUri = conn1.concat(process.env.MONGO_USER, ":", process.env.MONGO_PWD, conn2);
}

DB.prototype.connect = function() {

	var _this = this;

	return new Promise(function(resolve, reject) {
		if (_this.db) {
			// Already connected
			resolve();
		} else {
			var __this = _this;

			MongoClient.connect(dbUri, { useNewUrlParser: true })
			.then(
				function(database) {
					__this.db = database;
					resolve();
				},
				function(err) {
					console.log("Error connecting to Mongo: " + err.message);
					console.log(dbUri);
					reject(err.message);
				}
			)
		}
	})
}

DB.prototype.close = function() {

	if (this.db) {
		this.db.close()
		.then(
			function() {},
			function(error) {
				console.log("Failed to close the database: " + error.message)
			}
		)	
	}
}

DB.prototype.getUri = function () {
	return dbUri;
}

module.exports = DB;