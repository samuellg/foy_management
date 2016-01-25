'use strict';

angular.module('myApp.planning', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/planning', {
    templateUrl: 'planning/planning.html',
    controller: 'PlanningCtrl'
  });
}])

.controller('Planning', [function() {

}]);