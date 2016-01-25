'use strict';

angular.module('myApp.admin', ['ngRoute'])

.controller('AdminCtrl', ['$scope', '$http', 'toastr', function($scope, $http, toastr) {
	$scope.validateForm = function(negativeAuthorized, maxAmount){
		var config = [{
			"negativeAuthorized": negativeAuthorized,
			"maxAmount": maxAmount
		}];
		$http.post('api/admin/saveConfig', config).success(function(){
			toastr.success("Changes saved");
		});
	};

}]);