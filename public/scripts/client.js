
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/pages/home.html',
    })
    .when('/profile', {
      templateUrl: 'views/pages/profile.html',
      controller: 'profileController as x'
    })
    .when('/repos', {
      templateUrl: 'views/pages/repos.html',
      controller: 'repoController as x'
    })
    .otherwise('/');

    $locationProvider.html5Mode(true);
});
