'use strict';

/**
 * @ngdoc function
 * @name yookoreApp.controller:StatusupdateCtrl
 * @description
 * # StatusupdateCtrl
 * Controller of the yookoreApp
 */
angular.module('yookoreApp')
  .controller('StatusupdateCtrl', function ($scope, $http, API_URL, alert) {

  	$http.get(API_URL + 'statusupdate').success(function(statusupdate){
  		$scope.statusupdate = statusupdate;

  	}).error(function(err){
  		alert('warning',"Unable to get status", err.message);
  	})

  });
