'use strict';
var express = require('express');
var router = express.Router();
var ToDoController = require('./todo.controller');

// Routes start at /dash

router.get('/version', function (req, res) {
    // Test route
    var infoObject = {
        "AppName": "DashBack",
        "Version": 1.0
    }
    res.json(infoObject);
});

router.route('/testConnection').get(ToDoController.testConnection);

router.route('/').get(ToDoController.getToDos);

module.exports = router;
