(function () {
	angular
		.module('app')
		.run(['$rootScope', '$state', 'Authentication', runFunc]);
	
	function runFunc($rootScope, $state, Authentication) {
		$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
			//if the route is for logged in users and the visitor is not signed in
			if (toState.authenticate && !Authentication.isLoggedIn()) {
				// User isn’t authenticated
				$state.go("login");
				event.preventDefault();
			}
			//if the visitor is signed in and is trying to access the sign-up / login pages
			else if (toState.sign && Authentication.isLoggedIn()) {
				$state.go(fromState.name);
				event.preventDefault();
			}
		});
	};
	
}())
