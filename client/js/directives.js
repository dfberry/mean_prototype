exports.userMenu = function() {
  return {
    controller: 'UserMenuController',
    templateUrl: '/templates/user_menu.html'
  };
};

exports.now = function() {
  return {
    controller: 'LoadImmediatelyController',
    templateUrl: '/templates/now.html'
  };
};