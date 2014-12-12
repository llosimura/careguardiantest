'use strict';

angular.module('careguardiantestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('caregivers', {
        url: '/caregivers',
        templateUrl: 'app/caregivers/caregivers.html',
        controller: 'CaregiversCtrl'
      });
  });