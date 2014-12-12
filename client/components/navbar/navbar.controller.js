'use strict';

angular.module('careguardiantestApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Services',
        'link': '/'
      }
    ];
    $scope.isCollapsed = true;
    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
