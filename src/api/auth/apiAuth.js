var jwt = require('express-jwt');
var config = require('../../../config');

var auth = jwt({
	secret: config.secret,
	userProperty: 'payload'
});

module.exports = auth;