// script.js

var wellMetApp = angular.module('wellMetApp', ['ngRoute', 'ui.bootstrap']);

// configure our routes
wellMetApp.config(['$routeProvider', function($routeProvider) {
                 $routeProvider
                 
                 // route for the home page
                 .when('/', {
                       templateUrl : '../pages/home.html',
                       controller  : 'mainController'
                       })
                 
                 // route for the about page
                 .when('/deck', {
                       templateUrl : '../pages/deck.html',
                       controller  : 'deckController'
                       })
                 
                 // route for the contact page
                 .when('/contact', {
                       templateUrl : '../pages/contact.html',
                       controller  : 'contactController'
                       });
                 }]);

// create the controller and inject Angular's $scope
wellMetApp.controller('mainController', ['$scope', function($scope) {
                     // create a message to display in our view
                     $scope.message = 'Everyone come and see how good I look!';
                     $scope.classList = ['Druid', 'Hunter', 'Mage',
                                         'Paladin', 'Priest', 'Rogue',
                                         'Shaman', 'Warlock', 'Warrior']
                     $scope.deckListOne = ['Aggro Druid', 'Face Hunter', 'Freeze Mage',
                                           'Secret Paladin', 'Dragon Priest', 'Oil Rogue',
                                           'Bloodlust Shaman', 'Demon Handlock', 'Control Warrior']
                     $scope.deckListTwo = ['Mid-Range Druid', 'Hybrid Hunter', 'Tempo Mage',
                                           'Mid-Range Paladin', 'Control Priest', '',
                                           'Mid-Range Shaman', 'Zoolock', 'Patron Warrior']
                    
                 
                     }]);

wellMetApp.controller('deckController', ['$scope', function($scope) {
                     $scope.message = 'Deck list';
                     }]);

wellMetApp.controller('contactController', ['$scope', function($scope) {
                     $scope.message = 'Contact us! We love to hear your complaints. Jk.';
                     }]);