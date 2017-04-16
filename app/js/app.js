var angular = require('angular');
var uiRouter = require('angular-ui-router');
require('jquery');
require('bootstrap/dist/js/bootstrap');

//Services Module Definition
angular.module('app.services',[]);
//Webpack requires
require('./common');

// Directives Module Definition
angular.module('app.directives',[]);
//Webpack requires
require('./navbar');


//Core Module Definition
angular.module('app',[uiRouter,'app.services','app.directives']);
//Webpack requires
require('./config.js');
require('./run.js');
require('./home');
require('./users');