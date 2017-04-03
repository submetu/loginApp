(function () {
	angular
		.module('app')
		.run(['$rootScope', '$state', 'Authentication', runFunc]);
	
	function runFunc($rootScope, $state, Authentication) {
		$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
			if (toState.authenticate && !Authentication.isLoggedIn()) {
				// User isn’t authenticated
				$state.go("login");
				event.preventDefault();
			}
			else if (toState.sign && Authentication.isLoggedIn()) {
				$state.go(fromState.name);
				event.preventDefault();
			}
		});
	};
	
}())
