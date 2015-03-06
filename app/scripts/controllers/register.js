'use strict';

angular.module('yookoreApp').controller('RegisterCtrl', function ($scope, alert, auth) {
    $scope.submit = function  () {

        // var url = API_URL + 'auth/create-account';
        // var user = {
        //     title: $scope.title,
        //     username: $scope.username,
        //     firstname: $scope.firstname,
        //     lastname: $scope.lastname,
        //     email: $scope.email,
        //     cellphone: $scope.cellphone,
        //     password: $scope.password
            
        // };

    	auth.register($scope.firstname, $scope.lastname, $scope.title, $scope.username,  $scope.email, $scope.cellphone, $scope.password)
    	.success(function  (res) {
            console.log(res);
            var res = res;
    		alert('success', 'Account Created!', 'Welcome, ' + res.email + '!');

    	})
    	.error(function  (err) {
    		alert('warning', 'Something Went wrong :(', err.message);
    	})
    }
  });

