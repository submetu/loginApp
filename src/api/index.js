var app = require('express')();

//Routers
var productsApi = require('./products');
var usersApi = require('./users');


module.exports = {
	productsApi: productsApi,
	usersApi:usersApi
};

