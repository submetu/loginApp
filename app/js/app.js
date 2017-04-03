var angular = require('angular');
var uiRouter = require('angular-ui-router');

angular.module('app',[uiRouter]);
	
//Webpack requires
require('./common');
require('./config.js');
require('./run.js');
require('./home');
require('./users');