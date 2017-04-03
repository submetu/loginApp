(function () {
	angular.module('app')
		.controller('LoginCtrl', ['$scope', '$http', '$window', loginFunc]);
	
	function loginFunc($scope, $http, $window) {
		$scope.user = {};
		// $window.localStorage('auth', 'kashi');
		$scope.login = function () {
			$http.post('/api/users/login', JSON.stringify($scope.user)).then(function () {
				console.log('success in logging in');
			});
		};
	}
}())