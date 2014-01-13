'use strict';

/* Controllers */
angular.module('recipe.controllers', []).
    controller('ListCtrl', ['$scope', 'ejsResource', 
      function($scope, ejsResource) {
          var ejs = ejsResource('https://es.noionlabs.com'); //TODO angularjs.settings?
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
                             '$location',
     function($scope, $routeParams, ejsResource, $location) {
         var ejs = ejsResource('https://es.noionlabs.com'); //TODO angularjs.settings?
         $scope.template = {
             '_source': {
                 'title': '',
                 'ingredients': [
                     {'ingredient': ''},
                     {'ingredient': ''},
                     {'ingredient': ''},
                     {'ingredient': ''},
                     {'ingredient': ''},
                 ],
                 'method': ''
             }
         };
         $scope.addIngredient = function() {
             $scope.recipe._source.ingredients.push({'ingredient':''});
         };
         $scope.removeIngredient = function(index) {
             $scope.recipe._source.ingredients.splice(index, 1);
         };
         $scope.create = function () {
             $scope.recipe = angular.copy($scope.template);
         };
         $scope.delete = function () {
             ejs.Document('recipes', 'recipe', $scope.recipe._id)
                 .refresh(true)
                 .doDelete()
                 .then(function () {
                     $location.path('/recipes');
                 });
         };
         $scope.save = function() {
             ejs.Document('recipes', 'recipe', $scope.recipe._id)
                 .source($scope.recipe._source)
                 .refresh(true)
                 .doIndex()
                 .then(function () {
                     $location.path('/recipes');
                 });
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
