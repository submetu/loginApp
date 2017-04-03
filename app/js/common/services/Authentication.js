(function () {
	angular
		.module('app')
		.service('Authentication', ['$http','$window', AuthenticationFunc]);
	
	function AuthenticationFunc($http, $window) {
		
		var saveToken = function (token) {
			$window.localStorage.setItem('auth', token);
		};
		
		var getToken = function () {
			return $window.localStorage.getItem('auth')
		};
		
		var logout = function () {
			$window.localStorage.removeItem('auth');
		}
		
		var isLoggedIn = function() {
			var token = getToken();
			var payload;
			
			if(token){
				payload = token.split('.')[1];
				payload = $window.atob(payload);
				payload = JSON.parse(payload);
				
				return payload.exp > Date.now() / 1000;
			} else {
				return false;
			}
		};
		
		var currentUser = function() {
			if(isLoggedIn()){
				var token = getToken();
				var payload = token.split('.')[1];
				payload = $window.atob(payload);
				payload = JSON.parse(payload);
				return {
					email : payload.email,
					name : payload.name
				};
			}
		};
		
		var register = function(user) {
			return $http.post('/api/users/register', user).then(function(data){
				saveToken(data.data.token);
			});
		};
		
		var login = function(user) {
			return $http.post('/api/users/login', user).then(function(data) {
				console.log('data',data);
				saveToken(data.data.token);
			});
		};
		
		return {
			saveToken: saveToken,
			getToken: getToken,
			logout: logout,
			isLoggedIn: isLoggedIn,
			currentUser: currentUser,
			register: register,
			login: login
		};
	}
}());