'use strict';

var express = require('express');
var wagner = require('wagner-core');
var favicon = require('serve-favicon');
var path = require('path');

var cli = false; // http instead

require(__dirname + '/dependencies')(wagner);

module.exports = function(logging) {

    var app = express();

    if (logging) {
        app.use(require('morgan')('combined'));
    }


    app.use('/config/v1', require(__dirname + '/config')(wagner));
    
    app.use('/', express.static(__dirname + '/../public', { maxAge: 4 * 60 * 60 * 1000 /* 2hrs */ }));

    return app;
};
