'use strict';

angular.module('yookoreApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert, authToken, $state) {
    $scope.submit = function  () {
    	var url = '/api/login';
    	var user = {
    		email: $scope.email,
    		password: $scope.password
    		// firstName: $scope.firstName,
    		// lastName: $scope.lastName,
    		// username: $scope.username
    	};
    	$http.post(url,user)
    	.success(function  (res) {
    		alert('success', 'Account Created!', 'Welcome, ' + res.user.email + '!');
    		authToken.setToken(res.token);
            $state.go('stream');

    	})
    	.error(function  (err) {
    		alert('warning', 'Opp!', 'You cant login');
    	})
    }
  });

