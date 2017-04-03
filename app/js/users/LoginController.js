(function () {
	angular.module('app')
		.controller('LoginCtrl', ['$state', 'Authentication', loginFunc]);
	
	function loginFunc($state, Authentication) {
		this.user = {};
		this.login = function () {
			Authentication.login(JSON.stringify(this.user)).then(function () {
				console.log('You have successfully logged in');
			}, function (err) {
				console.log(err);
				$state.go('login');
			});
			
		};
	}
}())