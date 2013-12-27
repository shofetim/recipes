'use strict';

/* Controllers */
angular.module('recipe.controllers', []).
    controller('ListCtrl', ['$scope', 'ejsResource', 
      function($scope, ejsResource) {
          var ejs = ejsResource('http://localhost:9200'); //TODO angularjs.settings?
          ejs.Request()
              .indices("recipes")
              .types("recipe")
              .query(ejs.MatchAllQuery())
              .doSearch()
              .then(function (data) {
                  $scope.recipes = data.hits.hits;
              });
          $scope.orderProp = 'title';
  }])
  .controller('DetailCtrl', ['$scope', '$routeParams', 'ejsResource',
     function($scope, $routeParams, ejsResource) {
         var ejs = ejsResource('http://localhost:9200'); //TODO angularjs.settings?
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
         ejs.Request()
             .indices("recipes")
             .types("recipe")
             .filter(ejs.IdsFilter($routeParams['recipeId']))
             .doSearch()
             .then(function (data) {
                 $scope.recipe = data.hits.hits[0];
             });
  }]);
