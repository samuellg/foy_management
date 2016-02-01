'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.general',
  'myApp.stats',
  'myApp.admin',
  'myApp.stocks',
  'myApp.planning',
  'myApp.version',
  'nya.bootstrap.select',
  'ngAnimate',
  'toastr'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/general'});
  	// General view
    $routeProvider.when('/general', {
    templateUrl: 'views/general.html',
    controller: 'GeneralCtrl'
  })

    .when('/admin', {
    templateUrl: 'views/admin.html',
    controller: 'AdminCtrl'
  })

    .when('/planning', {
    templateUrl: 'views/planning.html',
    controller: 'PlanningCtrl'
  })

    .when('/stats', {
    templateUrl: 'views/stats.html',
    controller: 'View2Ctrl'
  })

    .when('/stocks', {
    templateUrl: 'views/stocks.html',
    controller: 'StocksCtrl'
  })

    .when('/newUser', {
      templateUrl: 'views/newUser.html',
      controller: 'GeneralCtrl'
    });

}]);
