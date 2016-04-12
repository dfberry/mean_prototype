'use strict';

var configFile = require(__dirname + '/config.json');

module.exports = function(wagner) {

    // app-wide config object
    wagner.factory('Config', function() {
        return configFile;
    });
};
