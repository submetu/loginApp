(function(){
	angular
		.module('app.directives')
		.controller('NavbarCtrl',['Authentication','$state',NavbarFunc]);
	
	function NavbarFunc(Authentication,$state) {
		this.userLoggedIn = function () {
			return Authentication.isLoggedIn()
		};
		this.userLogout = function () {
			Authentication.logout();
			setTimeout(function () {
				$state.go('home');
			},300);
		}
	}
}());