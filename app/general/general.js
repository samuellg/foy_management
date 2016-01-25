'use strict';

angular.module('myApp.general', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/general', {
    templateUrl: 'general/general.html',
    controller: 'GeneralCtrl'
  });
}])

/*.controller('GeneralCtrl', [function() {

}]);*/

.controller('GeneralCtrl', ['$scope','$http', function($scope, $http) {
   $http.get('data/users.json').success(function(data) {
   	$scope.users = data;
   });
   $http.get('data/products.json').success(function(data) {
    $scope.products = data;
   });

   /**
   * buying function
   */
   $scope.buy = function(product, user) {
   	if(user == "noUserSelected"){
   		alert("Please select an user");
   	}
   	else{
   		alert("Bought : " + product.name + " by " + user.name + "\n" + "New balance : " + user.balance);
   	}
   };

   // Initiate currentUser
   $scope.currentUser = "noUserSelected";
}]);

