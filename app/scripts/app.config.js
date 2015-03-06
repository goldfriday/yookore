'use strict'
// ****** This provides the routing config using the state provider from the angular ui.routet ******//
angular.module('yookoreApp').config(function ($urlRouterProvider, $stateProvider, $httpProvider) {
  
  // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');
	
	// Main state routing

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
	.state('login',{
		url: '/login',
		templateUrl: '/views/register.html',
		controller: 'LoginCtrl'
	})
	.state('activitystream',{
		url: '/activitystream',
		templateUrl: '/views/activitystream.html',
		controller: 'ActivitystreamCtrl'
	})
	.state('logout',{
		url: '/logout',
		controller: 'LogoutCtrl'
	})
	.state('statusupdate',{
		url: '/statusupdate',
		templateUrl: '/views/statusupdate.html',
		controller: 'StatusupdateCtrl'
    });

    $httpProvider.interceptors.push('authInterceptor');

	
})
   .constant('API_URL_2', 'http://localhost:3000')
   .constant('API_URL', 'http://192.168.10.144:3000');

