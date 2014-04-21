'use strict';

angular.module('androidBackendApp')
  .service('Messageservice', function($http) {
  	return{
  		get : function(){
  			return $http.get('/api/messages');
  		},
  		create : function(message){
  			var method = 'POST';
  			var insertURL = '/api/messages';
  			var formData = {
  				'message' : message
  			};
  			var jdata = JSON.stringify(formData);
  			var promise = $http({
  				method : method,
  				url : insertURL,
  				data : jdata,
  				headers : {'Content-Type': 'application/json'}
  			}).then(function(response){
  				message = response.data.message;
  				return{
  					message : function(){
  						return message;
  					}
  				};
  			});
  			return promise;
  		},
  		delete : function(id){
  			return $http.delete('/api/messages/'+id);
  		}
  	};
  });
