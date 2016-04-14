exports.UserMenuController = function($scope, configService) {
    
   console.log("controllers.js::UserMenuController, bottom of Function"); 

  //console.log("controllers.js::UserMenuController, $myConfig=" + $myConfig);  
  //console.log("controllers.js::UserMenuController, $myConfig=" + JSON.stringify($myConfig));    
    
  //console.log("before fn top");  
  configService.loadConfig(function(data, err){
    console.log("inside fn, data = " + JSON.stringify(data));
    $scope.config = data;
    console.log("inside fn, err = " + JSON.stringify(err));
  });  
  //console.log("before fn bottom");
    
  //$scope.config = $myConfig;
  //setTimeout(function() {
 //   $scope.$emit('UserMenuController');
  //}, 0);
  
   //console.log("controllers.js::UserMenuController, bottom of Function"); 
  
};
exports.LoadImmediatelyController = function($scope, $myImmediateService) {
  
  console.log("LoadImmediatelyController top");
  
  $scope.data = $myImmediateService;

  setTimeout(function() {
    $scope.$emit('LoadImmediatelyController');
  }, 0);
  
  console.log("LoadImmediatelyController bottom");
};