angular.module('app')
	.controller('RegisterCtrl',['$scope','$http',function ($scope,$http) {
		$scope.user = {}
		//Test
		
		$scope.register = function(){
			$http.post('/api/users/register',JSON.stringify($scope.user)).then(function(){
				console.log('success');
			});
		};
		
	}]);
