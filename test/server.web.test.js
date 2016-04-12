'use strict';

var app = require('../server/server')
    , assert = require('chai').assert
    , expect = require('chai').expect
    , request= require('superagent-bluebird-promise');

var port = 3001;

describe(__filename, function() {
    
    var server=null;

    before(function() {
        server = app().listen(port, function() {

        });
    });

    after(function() {
        server.close(function() {

        });
    });
    

    it('returns home page', function(done){
        this.timeout(50000);    
        // nothing to send via querystring    
            
        // ACT
        request.get("http://localhost:3001/")
            .then(function(res){
                expect(res.status).to.equal(200);
                //assert.ok(res.body.success);
                done();
            }, function(error){
                assert.ifError(error);
                done(error);
            });
    });    
    it('returns config file', function(done){
        this.timeout(50000);    
        // nothing to send via querystring    
            
        // ACT
        request.get("http://localhost:3001/config/v1/help")
            .then(function(res){
                expect(res.status).to.equal(200);
                console.log(res.body);
                done();
            }, function(error){
                assert.ifError(error);
                done(error);
            });
    });
});