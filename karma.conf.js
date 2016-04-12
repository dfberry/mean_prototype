// Karma configuration
// Generated on Wed Nov 25 2015 20:38:39 GMT+0000 (WET)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],


        // list of files / patterns to load in the browser
        // must include all files that browser would load
        // must be loaded in same order browser would load
        files: [
            'http://code.jquery.com/jquery-1.11.3.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.js',
            // For ngMockE2E
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-mocks.js',

            './public/index.js', // main release library for this project
            //'test/fixtures/*.html*', currently not testing html DOM
            './test/client.*.test.js' // location of test files
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        
        //--topmail is already browserified by the time I get it
        //preprocessors: {
        //    'public/js/*.js': [ 'browserify' ]
        //},

        //browserify: {
        //    debug: true
        //},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            'karma-mocha-reporter',
            'karma-mocha'

        ],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    })
}
