'use strict';


angular.module('yookoreApp').service('auth', function auth($http, API_URL, authToken) {
      	var url = API_URL + 'login';
         
    	this.login = function(email,password){
    		return $http.post(url,{email: email, password:password}).success(function(res){
    			authToken.setToken(res.token);
    		})
    	}

  });
