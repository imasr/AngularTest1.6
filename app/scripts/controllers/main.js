'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular1App
 */
angular
  .module("angular1App")
  .controller("MainCtrl", function(apiCommunity, $scope, $http) {
    $scope.location=[];
    $scope.location = function() {
      apiCommunity.then(
        response => {
          console.log(response.data);
          $scope.location = response.data.data.locations;
          console.log($scope.location);
        },
        error => {
          console.log(error);
        }
      );
    };

    $scope.location();
  });
