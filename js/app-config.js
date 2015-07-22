angular.module("myApp")
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");

		$stateProvider.state("home", {
			url: "/",
			templateUrl: "views/home.html"
		})
		.state("about", {
			url: "/about",
			templateUrl: "views/about.html"
		});
	});