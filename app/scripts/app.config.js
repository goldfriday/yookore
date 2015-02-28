'use strict'
// ****** This provides the routing config using the state provider from the angular ui.routet ******//
angular.module('yookoreApp').config(['$urlRouterProvider', '$stateProvider','$httpProvider', function ($urlRouterProvider, $stateProvider,$httpProvider) {

    $urlRouterProvider.otherwise('/');
	$stateProvider
	.state('main',{
		url: '/',
		templateUrl: '/views/main.html'
	})
	.state('register',{
		url: '/register',
		templateUrl: '/views/register.html',
		controller: 'RegisterCtrl'
	})
	.state('activitystream',{
		url: '/activitystream',
		templateUrl: '/views/activitystream.html',
		controller: 'ActivitystreamCtrl'
	})

	
}]);