(function () {
	angular.module('app')
		.controller('RegisterCtrl', ['$state', 'Authentication', registerFunc]);
	
	function registerFunc($state, Authentication) {
		this.user = {};
		
		this.register = function () {
			
			Authentication.register(JSON.stringify(this.user)).then(function () {
				console.log('You have successfully registered');
			}, function (err) {
				console.log(err);
				$state.go('register')
			});
			// $http.post('/api/users/register',JSON.stringify($scope.user)).then(function(){
			// 	console.log('success');
			//
			// });
		};
		
	}
}())