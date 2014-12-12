'use strict';

angular.module('careguardiantestApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Services',
        'link': '/'
      },
      {
        'title': 'Caregivers',
        'link': '/caregivers'
      },
      {
        'title': 'Customers',
        'link': '/customers'
      }
    ];
    $scope.isCollapsed = true;
    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
