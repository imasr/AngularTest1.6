'use strict';

/**
 * @ngdoc overview
 * @name angular1App
 * @description
 * # angular1App
 *
 * Main module of the application.
 */
angular
  .module("angular1App", [
    "ui.router",
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngSanitize",
    "ngTouch"
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("category");
    $stateProvider
      .state("main", {
        url: "/main",
        templateUrl: "views/main.html",
        controller: "MainCtrl",
      })
      .state("category", {
        url: "/category",
        templateUrl: "views/category.html",
        controller: "CategoryCtrl",
      });
  })
  .controller("NavCtrl", function(
    apiCommunity,
    $scope,
    $http,
    $rootScope,
    $state
  ) {
    $scope.location = [];
    $scope.location = () => {
      apiCommunity.then(
        response => {
          $scope.location = response.data.data.locations;
        },
        error => {
          console.log(error);
        }
      );
    };

    $scope.selectLocation = location => {
      $state.go("category");
      var data = { data: location };
      $rootScope.$broadcast("categoryData", data);

    };
    $scope.selectBranch = (location, branch) => {
      $state.go("category");
      var data = { 'data': location, 'branch': branch };
      $rootScope.$broadcast("categoryData", data);
    };

    $scope.location();
  });
