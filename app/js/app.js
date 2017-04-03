var angular = require('angular');
var uiRouter = require('angular-ui-router');
require('bootstrap');
//Module Definition
// angular.module('app.directives',[]);
// //Webpack requires
// require('./navbar');


//Module Definition
angular.module('app',[uiRouter]);
//Webpack requires
require('./common');
require('./config.js');
require('./run.js');
require('./home');
require('./users');