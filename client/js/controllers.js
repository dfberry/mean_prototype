exports.UserMenuController = function($scope, $myConfig) {
    
  $scope.config = $myConfig;
  
  setTimeout(function() {
    $scope.$emit('UserMenuController');
  }, 0);
};