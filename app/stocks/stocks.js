'use strict';

angular.module('myApp.stocks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stocks', {
    templateUrl: 'stocks/stocks.html',
    controller: 'StocksCtrl'
  });
}])

.controller('StocksCtrl', [function() {

}]);