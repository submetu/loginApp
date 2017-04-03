(function () {
	angular
		.module('app')
		.service('Authentication', ['$http,$window', AuthenticationFunc]);
	
	function AuthenticationFunc($http, $window) {
		var saveToken = function (token) {
			$window.localStorage.setItem(auth, token);
		};
		var getToken = function () {
			return $window.localStorage.getItem(auth)
		};
		var logout = function () {
			$window.localStorage.removeItem(auth);
		}
		
		return {
			saveToken: saveToken,
			getToken: getToken,
			logout: logout
		}
	}
}());