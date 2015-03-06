'use strict';


angular.module('yookoreApp').service('auth', function auth($http, API_URL, API_URL_2, authToken, $state) {
     
      	function authSuccessful(res){
      		authToken.setToken(res.token);
      		$state.go('activitystream');
      	}
         

    	this.login = function(username,password){
    		return $http.post( API_URL + '/auth/login',{
    			username: username,
    			password: password
    		}).success(authSuccessful);
    	}

    	this.register = function( firstname, lastname, title, username, email, cellphone, password ){
    	return $http.post( API_URL + '/auth/create-account',{
     //    this.register = function(title, firstname, lastname, username, email, password, cellphone){
    	// return $http.post( API_URL_2 + 'register',{
    		firstname: firstname,
    		lastname: lastname,
    		title: title,
    		username: username,
    		email : email,
    		cellphone: cellphone,
    		password: password,
    		

    	}).success(authSuccessful);
    }
});


