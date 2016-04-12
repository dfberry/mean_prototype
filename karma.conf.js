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

            'public/app.js', // main release library for this project
            'test/client.*.test.js', // location of test files
            { pattern: 'public/templates/*.html', included: false, served: true }
            
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

        //ngHtml2JsPreprocessor: {
            // strip this from the file path
           // stripPrefix: 'aaa/',
            //stripSuffix: '.abc',
            // prepend this to the
            //prependPrefix: 'zzz/',

            // or define a custom transform function
            // - cacheId returned is used to load template
            //   module(cacheId) will return template at filepath
            //cacheIdFromPath: function(filepath) {
                // example strips 'public/' from anywhere in the path
                // module(app/templates/template.html) => app/public/templates/template.html
                //var cacheId = filepath.strip('public/', '');
                //return cacheId;
            //},

            // - setting this option will create only a single module that contains templates
            //   from all the files, so you can load them all with module('foo')
            // - you may provide a function(htmlPath, originalPath) instead of a string
            //   if you'd like to generate modules dynamically
            //   htmlPath is a originalPath stripped and/or prepended
            //   with all provided suffixes and prefixes
            //moduleName: 'ng-tpl'
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
        //autoWatch: true,


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
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        //concurrency: Infinity,


        proxies: {
            '/': 'http://localhost:9876/base/public'
        },

        client: {
            captureConsole: true,
            mocha: {
                bail: true
            }
        }
    })
}
