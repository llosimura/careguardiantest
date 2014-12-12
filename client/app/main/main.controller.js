'use strict';

angular.module('careguardiantestApp')
  .controller('MainCtrl', function ($scope, $http, API_URL) {
    //Variable used to store the user in case we want to create a new one
    $scope.service = {name: null, description: null,someField: null,otherField: null};

    // bind create function to scope
    $scope.create = create;

    //Function to remove a random service
    $scope.removeRandom = function (){
        var totalCount =  $scope.services.length
        if (totalCount > 0){
            var service = $scope.services[_.random(0, totalCount -1)];
            remove(service.id);
        } else {
          alert('Services are empty')
        }
    };

    //Dummy function to update a service
    $scope.updateRandom = function() {
      var totalCount =  $scope.services.length;
      if (totalCount > 0){
        var service = $scope.services[_.random(0, totalCount -1)];
        service.name += '-UPDATED';
        update(service);
      } else {
        alert('Services are empty')
      }
    };

    //Varaible used to store the retrieved services from the services
    $scope.services = [];

    //Once the page is loaded, we call the index function to populate the services
    $scope.$on('$viewContentLoaded', function () {
      index();
    });

    /**
     * Create a new service calling the POST method on the API endpoint
     */
    function create () {
      $http.post(API_URL+'services', $scope.service)
        .success(function (data) {
          alert('Service was created correctly');
          $scope.service = {name: null, description: null,someField: null,otherField: null};
          index();
        })
        .error(function (err) {
          alert('Error: '+ err.message);
          console.debug(err)
        })
    }
    /**
     * Remote a service calling the DELETE method on the API endpoint
     */
    function remove (id){
      $http.delete(API_URL+'services/'+ id)
        .success(function (data) {
            alert('Service removed correctly');
            index();
        })
        .error(function (err) {
          alert('Error: '+ err.message);
          console.debug(err)
        })
    }

    /**
     * Update a service calling the PUT method on the API endpoint
     */
    function update (service){
      $http.put(API_URL+'services/'+ service.id, service)
        .success(function (data) {
          alert('Service updated correctly');
          index();
        })
        .error(function (err) {
          alert('Error: '+ err.message);
          console.debug(err)
        })
    }

    /**
     * Retrieve all service calling the GET method on the API endpoint
     */
    function index (){
      $http.get(API_URL+ 'services')
        .success(function (data) {
          console.log(data);
          $scope.services = data;
        })
        .error(function (err){
          console.debug(err);
        })
    }

    /**
     * Creating the  options that allow us to use ui-grid
     * @type {{enableSorting: boolean, enableFiltering: boolean, enableColumnResizing: boolean, columnDefs: *[], data: *}}
     */
    $scope.servicesOptions = {
      enableFiltering: false,
      enableCellEditOnFocus: true,
      columnDefs: [
        {field: 'name', displayName: 'Name', enableCellEdit: false},
        {field: 'description', displayName: 'Description', enableCellEdit: false},
        {field: 'someField', displayName: 'Some Field', enableCellEdit: false},
        {field: 'otherField', displayName: 'Other Field', enableCellEdit: false},
      ],
      data: 'services'
    };

  });
