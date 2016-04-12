var status = require('http-status');

exports.$myConfig = function($http) {
  var s = {};

  s.loadConfig = function() {
    $http.
      get('/api/v1/config').
      success(function(data) {
        s.config = data.config;
      }).
      error(function(data, status) {
        if (status === status.UNAUTHORIZED) {
          s.user = null;
        }
      });
  };

  s.loadConfig();

  setInterval(s.loadUser, 60 * 60 * 1000);

  return s;
};
