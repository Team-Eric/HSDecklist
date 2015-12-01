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
    $scope.message = 'Choose your deck. Let us, decide your fate.';
    $scope.classList = ['Druid', 'Hunter', 'Mage',
        'Paladin', 'Priest', 'Rogue',
        'Shaman', 'Warlock', 'Warrior'];

    $scope.decks = [];
    $scope.getDecks = function (playerClass) {
        $http.get('api/deck/class/' + playerClass)
            .then(function success(response) {
                $scope.decks[playerClass] = response.data;
            });
    };

    $scope.classList.forEach(function (playerClass) {
        $scope.getDecks(playerClass);
    })
}]);

wellMetApp.controller('deckController', ['$scope', '$http', '$routeParams', 'CardService', function ($scope, $http, $routeParams, CardService) {
    $scope.message = 'Deck list';
    $scope.deck_id = $routeParams.id;
    $scope.deck_name = $routeParams.name;
    $scope.totalDustCost = 0;
    $scope.optimalPack = '';
    $scope.cardSetCount = {};

    CardService.getCardSets().forEach(function (pack) {
        $scope.cardSetCount[pack] = 0;
    })

    $scope.cards = [];
    $scope.pivot = [];
    $scope.getCards = function (deck_id) {
        $http.get('api/deck/' + deck_id)
            .then(function success(response) {
                $scope.cards = response.data.cards;
                $scope.cards.forEach(function (card) {
                    // Dust
                    card.dustCost = CardService.dustCost(card);
                    $scope.totalDustCost += card.dustCost * card.pivot.count;

                    // Counts
                    card.userCount = 0;
                    $scope.cardSetCount[card.cardSet] += +card.pivot.count;
                });
                $scope.calcOptimalPack();
            });
    };

    $scope.adjustCount = function (card, value) {
        // Should now account for changing selected value        
        if (value > card.userCount) {
            $scope.totalDustCost += (value - card.userCount) * card.dustCost;
            $scope.cardSetCount[card.cardSet] += value - card.userCount;
        } else {
            $scope.totalDustCost -= card.userCount * card.dustCost;
            $scope.cardSetCount[card.cardSet] -= card.userCount;
        }
        
        $scope.calcOptimalPack();
    };

    $scope.calcOptimalPack = function () {
        var max = -1;
        angular.forEach($scope.cardSetCount, function (count, cardSet) {
            if (CardService.getCardPacks().indexOf(cardSet) > -1 && max < count) {
                max = count;
                $scope.optimalPack = cardSet;
            }
        });
    }

    $scope.getCards($scope.deck_id);
}]);

wellMetApp.controller('contactController', ['$scope', function ($scope) {
    $scope.message = 'Our job is to squash the bugs. And to take care of you.';
}]);

wellMetApp.factory('CardService', function () {
    var adventures = ['Naxxramas', 'Blackrock Mountain', 'The League of Explorers'];
    var cardPacks = ['Classic', 'Goblins vs Gnomes', 'The Grand Tournament'];
    var cardSets = adventures.concat(cardPacks, ['Basic']); // gross?

    return {
        getCardPacks: function () {
            return cardPacks;
        },

        getCardSets: function () {
            return cardSets;
        },

        dustCost: function (card) {
            if (card.cardSet == 'Basic' || adventures.indexOf(card.cardSet) > -1) {
                // Basic cards can't be crafted. Adventure cards are unlocked with adventure.
                return 0;
            }

            switch (card.rarity) {
                case 'Common':
                    return 40;
                case 'Rare':
                    return 100;
                case 'Epic':
                    return 400;
                case 'Legendary':
                    return 1600;
                default:
                    return 0;
            }
        }
    };
});