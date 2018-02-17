'use strict';

angular.module('angular1App')
.factory('apiCommunity', ($http) => {
    return $http.get('catalog.json')
})
