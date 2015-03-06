'use strict';


angular.module('yookoreApp').controller('LoginCtrl', function ($scope, alert, auth) {
    $scope.submit = function() {

        auth.login($scope.username, $scope.password)
            .success(function (res) {
                alert('success', 'Welcome!', 'Thanks for coming back, ' + res.user.username + '!');

            })
            .error(function(err) {
                alert('warning', 'Something Went wrong :(', err.message);
            })
    }

});

