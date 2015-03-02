'use strict';

angular.module('yookoreApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert, authToken, $state) {
    $scope.submit = function  () {
    	var url = 'http://localhost:3000/register';
    	var user = {
    		email: $scope.email,
    		password: $scope.password,
    		firstname: $scope.firstname,
    		lastname: $scope.lastname,
            username: $scope.username
    		
    	};

    	$http.post(url,user)
    	.success(function  (res) {
    		alert('success', 'Account Created!', 'Welcome, ' + res.user.email + '!');
    		authToken.setToken(res.token);
            $state.go('activitystream');

    	})
    	.error(function  (err) {
    		alert('warning', 'Opp!', 'You cant login');
    	})
    }
  });

