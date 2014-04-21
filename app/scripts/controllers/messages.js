'use strict';

angular.module('androidBackendApp')
  .controller('MessagesCtrl', function ($scope, $http, Messageservice) {
    Messageservice.get()
    	.success(function(data){
    		$scope.messages = data;
    	});

    $scope.createMessage = function(){
    	Messageservice.create($scope.message)
    		.then(function(promise){
    			$scope.message = promise.message();
    			Messageservice.get()
    				.success(function(data){
    					$scope.messages = data;
    				});
    		});
    };

    $scope.deleteMessage = function(message){
    	Messageservice.delete(message._id)
    		.success(function(data){
    			$scope.messages = data;
    		})
    }
  });
