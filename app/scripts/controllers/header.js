'use strict';

/**
 * @ngdoc function
 * @name yookoreApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the yookoreApp
 */
angular.module('yookoreApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
