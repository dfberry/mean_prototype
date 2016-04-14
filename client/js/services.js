var status = require('http-status');

exports.configService = function($http) {
  
  var loadConfig = function(callback) {
    
    $http.
      get('/config/v1/json').
      success(function(data) {
          
        console.log("services.js.$myConfig, data = " + JSON.stringify(data));
          
        callback(data);
      }).
      error(function(data, status) {
        if (status === status.UNAUTHORIZED) {
          callback( new Error("error"));
        }
      });
  };
  return {
    loadConfig: loadConfig
  };
};

exports.$myImmediateService = function($http) {
  var s = {};

  s.loadUser = function() {

    console.log("myImmediateService called");

    /*
    $http.
      get('/config/v1/json').
      success(function(data) {
        console.log("myImmediateService get returned");
        s.user = data.user;
      }).
      error(function(data, $status) {
        if ($status === status.UNAUTHORIZED) {
          s.user = null;
        }
      });*/
      s.data = 5;
      
  };

  s.loadUser();

  // 'redoes request every hour
  setInterval(s.loadUser, 60 * 60 * 1000);

  return s;
};
