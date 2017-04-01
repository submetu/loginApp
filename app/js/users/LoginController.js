angular.module('app')
.controller('LoginCtrl',['$scope','$http',function ($scope,$http) {
	$scope.user = {}
	//Test
	$scope.login = function(){
		$http.post('/api/users/login',JSON.stringify($scope.user)).then(function(){
			console.log('success in logging in');
		});
	};
}]);
