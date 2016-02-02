
'use strict';

angular.module('myApp.general', ['ngRoute'])


.controller('GeneralCtrl', ['$scope','$http', '$location','toastr', function($scope, $http, $location, toastr) {
   $http.get('api/users').success(function(data) {
   	$scope.users = data;
   });
   $http.get('api/products').success(function(data) {
    $scope.products = data;
   });
   // A MODIFIER POUR TENIR COMPTE DES PARAMETRES DE L'ADMIN
   $scope.maxNegative = 0;


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

   /**
   * Validation action for new user form
   */
   $scope.validateNewUserForm = function(foysteamer, firstName, lastName, promotion, balance){
    var data = {
      "firstName" : firstName,
      "lastName" : lastName,
      "isFoysteamer" : foysteamer,
      "promotion" : promotion,
      "balance" : balance
    }

    $http.post('api/users', data).success(function(data) {
      // back to the general view
      $location.path('#/general'),
      toastr.success("User created");
   });
   }

   $scope.buy = function(user, product){
    // modification prix foysteamer à faire
    if(user == "noUserSelected"){
      toastr.warning("Please select an user");
    }
    else{
      if(user.balance - product.price > $scope.maxNegative){
        user.balance -= product.price;
        $http.post('api/users/' + user.userId, user)
        .success(function(){
          var sale = {
            "userId" : user.userId,
            "productId" : product.productId
          }
          console.log(sale);
          $http.post('api/sales/', sale).success(function(){
            toastr.success('Sale done');
          })
        });
      }
      else{
        toastr.error('Insufficient balance');
      }
    }
   }

   
}]);

