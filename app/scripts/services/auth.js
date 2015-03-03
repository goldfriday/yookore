'use strict';


angular.module('yookoreApp').service('auth', function auth($http, API_URL, authToken, $state) {
     
      	function authSuccessful(res){
      		authToken.setToken(res.token);
      		$state.go('activitystream');
      	}
         

    	this.login = function(email,password){
    		return $http.post(url,{email: email, password:password}).success(function(res){
    			authToken.setToken(res.token);
    			 $state.go('activitystream');
    		}).success(authSuccessful);
    	}
    	this.register = function(title, firstname, lastname, username, email, password, cellphone){
    	return $http.post( API_URL + 'auth/create-account',{
    		title: title,
    		firstname: firstname,
    		lastname: lastname,
    		email : email,
    		username: username,
    		password: password,
    		cellphone: cellphone

    	}).success(authSuccessful);
    }
});


