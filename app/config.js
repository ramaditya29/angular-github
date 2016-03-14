angular.module('githubApp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/repos', {
				templateUrl: './app/views/repos.html',
				controller: 'githubCtrl'
			})
			.when('/create', {
				templateUrl: './app/views/create.html',
				controller: 'manageCtrl'
			})
			.otherwise({
				redirectTo: '/repos'
			});
	});