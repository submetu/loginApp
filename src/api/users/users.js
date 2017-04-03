var router = require('express').Router();
var User = require('../../models/users');

//For testing
module.exports = function (req, res, next) {
	
	User.find({}, function (err, users) {
		if (err) {
			var err = new Error('Something went wrong');
			err.status = 401;
			return next(err);
		}
		return res.json({users: users});
	});
	
};
