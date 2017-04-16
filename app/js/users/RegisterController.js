(function () {
	angular.module('app')
		.controller('RegisterCtrl', ['$state', 'Authentication', registerFunc]);
	
	function registerFunc($state, Authentication) {
		this.user = {};
		
		this.register = function () {
			
			Authentication.register(JSON.stringify(this.user)).then(function () {
				console.log('You have successfully registered');
				$state.go('profile');
			}, function (err) {
				console.log(err);
				$state.go('register')
			});
			
		};
		
	}
}())