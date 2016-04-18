module.exports = function(config) {
  config.set({
    files: [
      'http://code.jquery.com/jquery-1.11.3.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.js',
      // For ngMockE2E
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-mocks.js',
      './public/index.js',
      './test/client.*.test.js',
      { pattern: './public/templates/*.html', included: false, served: true }
    ],
    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],
    port: 9876,
    proxies : {
      '/': 'http://localhost:9876/base/'
    },
    client: {
      captureConsole: true,
      mocha: {
        bail: false
      }
    }
  });
};