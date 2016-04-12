'use strict';

describe('User menu', function() {
  var injector;
  var element;
  var scope;
  var intercepts;
  var httpBackend;
  
  var configData = {"name": "myApp"};

  beforeEach(function() {
    injector = angular.injector(['myApp', 'ngMockE2E']);
    intercepts = {};

    injector.invoke(function($rootScope, $compile, $httpBackend) {
      scope = $rootScope.$new();

      $httpBackend.whenGET(/.*\/templates\/.*/i).passThrough();
      httpBackend = $httpBackend;

      element = $compile('<user-menu></user-menu>')(scope);
      scope.$apply();
    });
  });

  it('shows logged config info', function(done) {
      
    httpBackend.expectGET('/config/v1/json').respond(configData);

    scope.$on('UserMenuController', function() {
      
      console.log(element);  
        
      //assert.equal(element.find('.config').text().trim(), configData);

      httpBackend.flush();
      
      // TODO: test css values
      //assert.notEqual(element.find('.user-info .user').css('display'), 'none');
      //assert.equal(element.find('.user-info .user img').attr('src'), 'myPic');
      done();
    });
  });
});
