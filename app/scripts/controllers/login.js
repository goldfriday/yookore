'use strict';


angular.module('yookoreApp').controller('LoginCtrl', function ($scope, $http, API_URL, alert, authToken, $state, auth) {
        $scope.submit = function  () {

    	auth.login($scope.email, $scope.password)
    	.success(function  (res) {
    		alert('success', 'Welcome!', 'Thanks for coming back, ' + res.user.email + '!');
            $state.go('activitystream');

    	})
    	.error(function  (err) {
    		alert('warning', 'Something Went wrong :(', err.message);
    	})
    }
  });
