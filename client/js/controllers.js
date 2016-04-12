exports.UserMenuController = function($scope, $myConfig) {
    
  $scope.config = $myConfig;  
    
  //$scope.config = $myConfig;
  
  //console.log("usermenucontroller = " + JSON.stringify($scope.config));
  
  setTimeout(function() {
    $scope.$emit('UserMenuController');
  }, 0);
};