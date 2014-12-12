'use strict';

angular.module('careguardiantestApp')
  /**
   *  Filter used to translate selectable field on the data grid
   */
  .filter('mapAvailability', function () {
    var resultHash = {
      0: 'Avalilable',
      1: 'Not available'
    };
    return function (input) {
      if (!input)
        return '';
      else
        return resultHash[input];
    }
  })
  .controller('CaregiversCtrl', function ($scope, $http) {
    //variable containing the caregivers
    $scope.caregivers = [];
    /**
     * Creating the  options that allow us to use ui-grid
     * @type {{enableSorting: boolean, enableFiltering: boolean, enableColumnResizing: boolean, columnDefs: *[], data: *}}
     */
    $scope.betHistoryOptions = {
      enableFiltering: false,
      enableCellEditOnFocus: true,
      columnDefs: [
        {field: 'name', displayName: 'Name', enableCellEdit: false},
        {field: 'surname', displayName: 'Surname', enableCellEdit: false},
        {field: 'age', displayName: 'Age', enableCellEdit: false},
        {
          field: 'availability',
          displayName: 'Availability',
          enableCellEdit: true,
          editableCellTemplate: 'ui-grid/dropdownEditor',
          cellFilter: 'mapAvailability',
          editDropdownValueLabel: 'available',
          editDropdownOptionsArray: [
            {id: 0, available: 'Pending'},
            {id: 1, available: 'Won'}
          ]
        }
      ],
      data: $scope.caregivers
    };

  });
