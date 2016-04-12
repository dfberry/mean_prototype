var status = require('http-status');

exports.$myConfig = function($http) {
  var configData= {};

  configData.loadConfig = function() {
    $http.
      get('/config/v1/json').
      success(function(data) {
          
          console.log(JSON.stringify(data));
          
        configData.data = data;
      }).
      error(function(data, status) {
        if (status === status.UNAUTHORIZED) {
          configData.data = null;
        }
      });
  };

  configData.loadConfig();

  setInterval(configData.loadUser, 60 * 60 * 1000);

  return configData;
};
