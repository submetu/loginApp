var angular = require('angular');
var uiRouter = require('angular-ui-router');

angular.module('app',[uiRouter]);
	
//Webpack requires
require('./config.js');
require('./home');
require('./users');
