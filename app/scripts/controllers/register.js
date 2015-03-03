'use strict';

angular.module('yookoreApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert, authToken, $state, API_URL) {
    $scope.submit = function  () {
    	
        var url = API_URL + 'register';
    	var user = {

    		title: $scope.title,
            username: $scope.username,
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            email: $scope.email,
            cellphone: $scope.cellphone,
            password: $scope.password
    		
    	};

        var url = API_URL + 'auth/create-account';
        var user = {
            title: $scope.title,
            username: $scope.username,
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            email: $scope.email,
            cellphone: $scope.cellphone,
            password: $scope.password
            
        };

    	$http.post(url,user)
    	.success(function  (res) {
    	
    		alert('success', 'Account Created!', 'Welcome, ' + res.user.email + '!');
    		authToken.setToken(res.token);
            $state.go('activitystream');

    	})
    	.error(function  (err) {
    		alert('warning', 'Something Went wrong :(', err.message);
    	})
    }
  });

