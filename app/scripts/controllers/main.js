'use strict';

angular.module('androidBackendApp')
  .controller('MainCtrl', ['$scope','$http', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  }]);
