'use strict';

/* Controllers */

angular.module('recipe.controllers', []).
  controller('ListCtrl', ['$scope', function($scope) {
      $scope.recipes = [
          {
              'id': 1,
              'title': 'Mayonnaise',
              'ingredients': [
                  '2 egg yolks',
                  '1 tbsp apple cider vinegar',
                  '1 tbsp water',
                  '1/4 tsp unrefined sea salt',
                  '3/4 cup unrefined extra virgin olive oil'
              ],
              'method': 'Toss egg yolks, cider vinegar, water and unrefined sea salt into the basin of a food processor. Pulse 2 or 3 times until well-combined. In a smooth a steady stream, pour in olive oil and continue pouring slowly until the mayonnaise is thoroughly emulsified.'
          },
          {
              'id': 2,
              'title': 'Misoyaki Salmon',
              'ingredients': [
                  '1/4 cup white miso paste',
                  '2 tbsps naturally fermented soy sauce',
                  '2 tbsps honey',
                  '4 4- to 6-oz salmon fillets',
                  '2 tbsps sesame seeds'
              ],
              'method' : 'Preheat oven to 425º F and line a baking sheet with parchment paper. Whisk miso paste, soy sauce and honey together in a mixing bowl until thoroughly combined. Place salmon filets on a baking sheet lined with parchment paper. Spoon miso, soy and honey paste over the salmon filets so that they’re fully covered. Sprinkle salmon with sesame seeds and bake in an oven preheated to 425º Fahrenheit for 15 to 20 minutes or until the fish flakes easily when pierced by a fork.'
          }
      ];
      $scope.orderProp = 'name';
  }])
  .controller('DetailCtrl', ['$scope', function($scope) {

  }]);
