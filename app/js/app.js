'use strict';

// Declare app level module which depends on filters, and services
angular.module('recipe', [
  'ngRoute',
  'recipe.filters',
  'recipe.services',
  'recipe.directives',
  'recipe.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
  $routeProvider.when('/recipes/:recipeId', {templateUrl: 'partials/detail.html', controller: 'DetailCtrl'});
  $routeProvider.otherwise({redirectTo: '/recipes'});
}]);
