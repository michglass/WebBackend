'use strict';

angular.module('androidBackendApp')
  .service('Contactservice', function($http) {
  	return{
  		get : function(){
  			return $http.get('/api/contacts');
  		},
  		create : function(contactName, contactNumber, contactEmail){
  			var method = 'POST';
  			var insertURL = '/api/contacts';
  			var formData = {
  				'contactName' : contactName,
  				'contactNumber': contactNumber,
  				'contactEmail' : contactEmail
  			};
  			var jdata = JSON.stringify(formData);
  			var promise = $http({
  				method: method,
  				url: insertURL,
  				data: jdata,
  				headers:{'Content-Type': 'application/json'}
  			}).then(function(response){
  				contactName = response.data.contactName;
  				contactEmail = response.data.contactEmail;
  				contactNumber = response.data.contactNumber;
  				return{
  					contactNumber : function(){
  						return contactNumber;
  					},
  					contactEmail : function(){
  						return contactEmail;
  					},
  					contactName : function(){
  						return contactName;
  					}
  				};
  			});
  			return promise;
  		},
  		delete : function(id){
  			return $http.delete('/api/contacts/'+id);
  		}
  	};
  });
