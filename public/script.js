// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(['$routeProvider', function($routeProvider) {
                 $routeProvider
                 
                 // route for the home page
                 .when('/', {
                       templateUrl : 'pages/home.html',
                       controller  : 'mainController'
                       })
                 
                 // route for the about page
                 .when('/deck', {
                       templateUrl : 'pages/deck.html',
                       controller  : 'deckController'
                       })
                 
                 // route for the contact page
                 .when('/contact', {
                       templateUrl : 'pages/contact.html',
                       controller  : 'contactController'
                       });
                 }]);

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', ['$scope', function($scope) {
                     // create a message to display in our view
                     $scope.message = 'Everyone come and see how good I look!';
                     }]);

scotchApp.controller('deckController', ['$scope', function($scope) {
                     $scope.message = 'Welcoem to deck builder. Customize and perfect your hearthstone deck!';
                     }]);

scotchApp.controller('contactController', ['$scope', function($scope) {
                     $scope.message = 'Contact us! JK. This is just a demo.';
                     }]);