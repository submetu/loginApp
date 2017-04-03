(function () {
	angular
		.module('app')
		.controller('ProfileCtrl',[profileFunc]);
	
	function profileFunc() {
		this.test = 'Profile page'
	}
}());

