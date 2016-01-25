'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.general',
  'myApp.stats',
  'myApp.admin',
  'myApp.stocks',
  'myApp.version',
  'nya.bootstrap.select'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/general'});
}]);
