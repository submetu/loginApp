(function () {
	angular.module('app')
		.controller('RegisterCtrl',['$scope','$http',registerFunc]);
	
	function registerFunc ($scope,$http) {
		$scope.user = {};
		
		$scope.register = function(){
			$http.post('/api/users/register',JSON.stringify($scope.user)).then(function(){
				console.log('success');
			});
		};
		
	}
}())