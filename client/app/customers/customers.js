'use strict';

angular.module('careguardiantestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customers', {
        url: '/customers',
        templateUrl: 'app/customers/customers.html',
        controller: 'CustomersCtrl'
      });
  });