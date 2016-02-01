
'use strict';

angular.module('myApp.general', ['ngRoute'])


.controller('GeneralCtrl', ['$scope','$http', 'toastr', function($scope, $http, toastr) {
   $http.get('api/users').success(function(data) {
   	$scope.users = data;
   });
   $http.get('api/products').success(function(data) {
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
   		toastr.success("Bought : " + product.name + " by " + user.firstName, "New balance : " + user.balance);
   	}
   };

   // Initiate currentUser
   $scope.currentUser = "noUserSelected";

   /** Return button class according to product type (the color is changing...)
   */
   $scope.getButtonClass = function(product){
    if(product.type == "bottle"){
      return "btn-inverse";
    }
    else if(product.type == "tapBeer"){
      return "btn-info";
    }
    else if(product.type == "food"){
      return "btn-warning";
    }
    else{
      return "btn-default";
    }
   };


   $scope.validateNewUserForm = function(foysteamer, firstName, lastName, promotion, balance){
    var data = {
      "firstName" : firstName,
      "lastName" : lastName,
      "isFoysteamer" : foysteamer,
      "promotion" : promotion,
      "balance" : balance
    }

    $http.post('api/users', data).success(function(data) {
    toastr.success("User created");
   });
   }

   
}]);

