// script.js

var wellMetApp = angular.module('wellMetApp', ['ngRoute', 'ui.bootstrap']);

// configure our routes
wellMetApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl: '../pages/home.html',
            controller: 'mainController'
        })

    // route for the about page
        .when('/deck', {
            templateUrl: '../pages/deck.html',
            controller: 'deckController'
        })

    // route for the contact page
        .when('/contact', {
            templateUrl: '../pages/contact.html',
            controller: 'contactController'
        });
}]);

// create the controller and inject Angular's $scope
wellMetApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $scope.message = 'Everyone come and see how good I look!';
    $scope.classList = ['Druid', 'Hunter', 'Mage',
        'Paladin', 'Priest', 'Rogue',
        'Shaman', 'Warlock', 'Warrior'];
    
    $scope.getDecks = function (playerClass) {
        $http.get("api/deck/class/Paladin")
            .then(function (response) {
                console.log(response);
            });
    };
    
    $scope.getDecks("Paladin");
}]);

wellMetApp.controller('deckController', ['$scope', function ($scope) {
    $scope.message = 'Deck list';
}]);

wellMetApp.controller('contactController', ['$scope', function ($scope) {
    $scope.message = 'Contact us! We love to hear your complaints. Jk.';
}]);

wellMetApp.service('cardCalcService', function () {
    this.dustCost = function (rarity) {
        switch (rarity) {
            case "Common":
                return 40;
            case "Rare":
                return 100;
            case "Epic":
                return 400;
            case "Legendary":
                return 1600;
            default:
                break;
        }
    };
});