'use strict';

angular.module('androidBackendApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
