'use strict';

angular.module('androidBackendApp')
  .controller('ContactsCtrl', function ($scope, $http, Contactservice) {
    	Contactservice.get()
    		.success(function(data){
    			$scope.contacts = data;
    		});

    	$scope.createContact = function(){
    		Contactservice.create($scope.contactName,$scope.contactNumber,$scope.contactEmail)
    			.then(function(promise){
    				$scope.contactNumber = promise.contactNumber();
    				$scope.contactName = promise.contactName();
    				$scope.contactEmail = promise.contactEmail();
    				Contactservice.get()
    					.success(function(data){
    						$scope.contacts = data;
    					});
    			});
    	};

    	$scope.deleteContact = function(contact){
    		Contactservice.delete(contact._id)
    			.success(function(data){
    				$scope.contacts = data;
    			});
    	};
   });
