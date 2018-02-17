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
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch"
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl",
        controllerAs: "main"
      })
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl",
        controllerAs: "about"
      })
      .otherwise({
        redirectTo: "/",
      });
  })
  .controller("NavCtrl", function(apiCommunity, $scope, $http) {
    $scope.location = [];
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
