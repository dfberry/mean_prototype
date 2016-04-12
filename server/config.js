'use strict';

var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');
var configFile = require('./config.json');

// url: /config/v1/
module.exports = function(wagner) {
    
    var config = express.Router();
    
    config.get('/json', function(req, res) {
	    res.status(200).json(configFile);
	});    
    return config;
};