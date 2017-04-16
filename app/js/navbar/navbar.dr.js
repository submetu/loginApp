(function(){
	angular
		.module('app.directives')
		.directive('navbar',[navbarFunc]);
	
	function navbarFunc() {
		return{
			restrict: 'E',
			templateUrl: '/templates/navbar/index.html',
			controller: 'NavbarCtrl',
			controllerAs: 'vm',
			link:  function(scope, element, attrs){
				
			}
		};
	};
	
}());