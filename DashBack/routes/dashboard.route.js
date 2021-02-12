'use strict';
var express = require('express');
var router = express.Router();
var DashboardController = require('./dashboard.controller');

// Routes start at /dash

router.get('/version', function (req, res) {
    // Test route
    var infoObject = {
        "AppName": "DashBack",
        "Version": 1.0
    }
    res.json(infoObject);
});

router.route('/testConnection').get(DashboardController.testConnection);

router.route('/').get(DashboardController.getToDos);

module.exports = router;
