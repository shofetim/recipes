'use strict';

// Declare app level module which depends on filters, and services
angular.module('recipe', [
  'elasticjs.service',
  'ngRoute',
  'recipe.filters',
  'recipe.services',
  'recipe.directives',
  'recipe.controllers'
]).
config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
  $routeProvider.when('/recipes/:recipeId', {templateUrl: 'partials/detail.html', controller: 'DetailCtrl'});
  $routeProvider.otherwise({redirectTo: '/recipes'});
}]);
