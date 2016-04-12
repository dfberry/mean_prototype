'use strict';

var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');

// url: /config/v1/
module.exports = function(wagner) {
    
    var config = express.Router();

    config.get('/help', function(req, res) {
	    res.status(200).json({ success: true });
	});
    return config;
};