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

    // route for the deck builder page
        .when('/deck/:id?/:name?', {
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

    $scope.decks = [];
    $scope.getDecks = function (playerClass) {
        $http.get("api/deck/class/" + playerClass)
            .then(function success(response) {
                $scope.decks[playerClass] = response.data;
            });
    };

    for (i = 0; i < $scope.classList.length; i++) {
        $scope.getDecks($scope.classList[i]);
    }


}]);

wellMetApp.controller('deckController', ['$scope', '$http', '$routeParams', 'CardCalc', function ($scope, $http, $routeParams, CardCalc) {
    $scope.message = 'Deck list';
    $scope.deck_id = $routeParams.id;
    $scope.deck_name = $routeParams.name;
    $scope.totalDustCost = 0;

    $scope.cards = [];
    $scope.pivot = [];
    $scope.getCards = function (deck_id) {
        $http.get("api/deck/" + deck_id)
            .then(function success(response) {
                $scope.cards = response.data.cards;
                angular.forEach($scope.cards, function (value) {
                    $scope.totalDustCost += CardCalc.dustCost(value) * value.pivot.count;
                });
            });
    };

    $scope.getCards($scope.deck_id);
}]);

wellMetApp.controller('contactController', ['$scope', function ($scope) {
    $scope.message = 'Contact us! We love to hear your complaints. Jk.';
}]);

wellMetApp.factory('CardCalc', function () {
    var adventures = ['Naxxramas', 'Blackrock Mountain', 'The League of Explorers'];
    
    return {
        dustCost: function (card) {
            if (card.cardSet == 'Basic' || adventures.indexOf(card.cardSet) > -1) {
                // Basic cards can't be crafted. Adventure cards are unlocked with adventure.
                return 0;
            }
            
            switch (card.rarity) {
                case "Common":
                    return 40;
                case "Rare":
                    return 100;
                case "Epic":
                    return 400;
                case "Legendary":
                    return 1600;
                default:
                    return 0;
            }
        }
    };
});