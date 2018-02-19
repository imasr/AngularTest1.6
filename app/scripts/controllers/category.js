'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angular1App
 */
angular.module('angular1App')
  .controller('CategoryCtrl', function(apiCommunity,$scope) {
    $scope.categories = [];
    $scope.location = () => {
      apiCommunity.then(response => {
          $scope.location = response.data.data.locations;
        }, error => {
          console.log(error);
        });
    };
    $scope.$on("categoryData", function(event, data) {
      console.log(data.branch);
      if (data.branch.categories) {
        $scope.categories = data.branch.categories;
      }
      console.log($scope.categories);
    });
    $scope.location();
  });
