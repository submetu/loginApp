var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');
var passport = require('passport');

//Requiring passport config
require('./api/auth/passport');

//requiring config and error modules
var config = require('../config');
var errors = require('./error');

//Initialize the application
var app = express();

//Set public folder to be statically served
app.use(express.static(path.join(__dirname,'/../public')));

//Initialize the database
require('./database');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.json());


// use morgan to log requests to the console
app.use(morgan('dev'));

//Routing
var router = require('./routes');
app.use('/',router);

//Initializing passport just before the api routes
app.use(passport.initialize());
//APIs
app.use('/api/products',require('./api').productsApi);
app.use('/api/users',require('./api').usersApi)

//Error Handling
app.use(function (req,res,next) {
	var error = errors.custom(404,'Page not found');
	next(error);
});
app.use(function (err,req,res,next) {
	return res.status(err.status || 500).send({
		message: err.message || 'This is an error!'
	});
});

//set port and start server
app.set('port',config.port);
app.listen(app.get('port'),function(err){
	if(err){
		return console.log('Could not connect to port: '+ app.get('port'));
	}
	console.log('Connected to port: ', app.get('port'));
});