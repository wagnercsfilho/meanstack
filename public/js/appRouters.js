// public/js/appRoutes.js
	angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})

		// nerds page that will use the NerdController
		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdCtrl'
		})

		// 
		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekCtrl'	
		});

	$locationProvider.html5Mode(true);

}]);