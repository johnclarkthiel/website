var app = angular.module("my-site", ["ngRoute"]);

app.controller('StaticController', ['$scope', function($scope) {
	console.log("THIS DOES NOTHING");

}]); 

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({ enabled: true }); // tell angular to use push state
	$routeProvider.
	when('/', {
		templateUrl: 'partials/home.html',
		controller: 'StaticController',
		controllerAs: 'statCtrl'
	}).
	when('/about', {
		templateUrl: 'partials/about.html',
		controller: 'StaticController',
		controllerAs: 'statCtrl'
	}).
// 	when('/projects', {
// 		templateUrl: 'partials/projects.html',
// 		controller: 'StaticController',
// 		controllerAs: 'statCtrl'
// }).
	when('/interests', {
		templateUrl: 'partials/interests.html',
		controller: 'StaticController',
		controllerAs: 'statCtrl'
	}).
	when('/contact', {
		templateUrl: 'partials/contact.html',
		controller: 'StaticController',
		controllerAs: 'statCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);

