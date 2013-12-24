'use strict';

/* Controllers */
var recipes = [
    {
        'id': 1,
        'title': 'Misoyaki Salmon',
        'ingredients': [
            {'ingredient': '1/4 cup white miso paste'},
            {'ingredient': '2 tbsps naturally fermented soy sauce'},
            {'ingredient': '2 tbsps honey'},
            {'ingredient': '4 4- to 6-oz salmon fillets'},
            {'ingredient': '2 tbsps sesame seeds'}
        ],
        'method' : 'Preheat oven to 425º F and line a baking sheet with parchment paper. Whisk miso paste, soy sauce and honey together in a mixing bowl until thoroughly combined. Place salmon filets on a baking sheet lined with parchment paper. Spoon miso, soy and honey paste over the salmon filets so that they’re fully covered. Sprinkle salmon with sesame seeds and bake in an oven preheated to 425º Fahrenheit for 15 to 20 minutes or until the fish flakes easily when pierced by a fork.',
        'created_at': '2013-12-25T18:11:41.553Z'
    },
    {
        'id': 2,
        'title': 'Mayonnaise',
        'ingredients': [
            {'ingredient': '2 egg yolks'},
            {'ingredient': '1 tbsp apple cider vinegar'},
            {'ingredient': '1 tbsp water'},
            {'ingredient': '1/4 tsp sea salt'},
            {'ingredient': '3/4 cup olive oil'},
        ],
        'method' : 'Toss egg yolks, cider vinegar, water and unrefined sea salt into the basin of a food processor. Pulse 2 or 3 times until well-combined. In a smooth a steady stream, pour in olive oil and continue pouring slowly until the mayonnaise is thoroughly emulsified.',
        'created_at': '2013-12-24T18:11:41.553Z'
    },
];

angular.module('recipe.controllers', []).
    controller('ListCtrl', ['$scope', 'ejsResource', 
      function($scope, ejsResource) {
           $scope.recipes = recipes;
           $scope.orderProp = 'title';
  }])
  .controller('DetailCtrl', ['$scope', '$routeParams', 'ejsResource',
     function($scope, $routeParams, ejsResource) {
         $scope.new = {
             'title': '',
             'ingredients': [
                 {'ingredient': ''},
                 {'ingredient': ''},
                 {'ingredient': ''},
                 {'ingredient': ''},
                 {'ingredient': ''},
             ],
             'method': ''
         };
         $scope.addIngredient = function() {
             $scope.recipe.ingredients.push({'ingredient':''});
         };
         $scope.removeIngredient = function(index) {
             $scope.recipe.ingredients.splice(index, 1);
         };
         $scope.save = function() {
             console.log('implement me');
         };
         $scope.recipe = recipes[parseInt($routeParams['recipeId']) - 1];
  }]);
