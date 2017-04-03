(function(){
	angular
		.module('app.directives')
		.directive('navbar',[navbarFunc]);
	
	function navbarFunc() {
		return{
			restrict: 'E',
			templateUrl: '../../../public/templates/navbar/index.html',
			link:  function(scope, element, attrs){
				
			}
		};
	};
	
}());