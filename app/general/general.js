'use strict';

angular.module('myApp.general', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/general', {
    templateUrl: 'general/general.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);