'use strict';

var app = require(__dirname + '/server/server')
    , logging = true
    
var port = process.env.PORT || 3000;

var server = app(logging).listen(port, function(){
    console.log("listening on port " + port);
});