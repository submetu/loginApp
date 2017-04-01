var router = require('express').Router();
var passport = require('passport');

var User = require('../models/users');
var errors = require('../error');
//For testing
router.get('/', function (req, res, next) {
	
	User.find({}, function (err, users) {
		if (err) {
			var err = new Error('Something went wrong');
			err.status = 401;
			return next(err);
		}
		return res.json({users: users});
	});
	
});

//Register user
router.post('/register', function (req, res, next) {
	var user = new User();
	
	user.name = req.body.name;
	user.email = req.body.email;
	user.username = req.body.username;
	user.password = req.body.password;
	
	if (user.name && user.password && user.email && user.username) {
		user.save(function (err) {
			if (err) {
				var userError = errors.user(err);
				return next(userError);
			}
			var token = user.generateJwt();
			return res.json({
				user: user,
				token: token
			});
		});
	} else {
		var customError = errors.custom(422, 'Data incomplete')
		return next(customError);
	}
	
});

router.post('/login', function (req, res, next) {
	
	if(!req.body.username || !req.body.password){
		var customError = errors.custom(422, 'Data incomplete')
		return next(customError);
	}
	
	passport.authenticate('local', function (err, user, info) {
		// If Passport throws/catches an error
		if (err) {
			var customError = errors.custom(404, 'Authentication error')
			return next(customError);
		}
		// If a user is found
		if (user) {
			var token = user.generateJwt();
			res.json({
				user: user,
				token: token
			});
		} else {
			// If user is not found
			var customError = errors.custom(401, 'User not found!')
			return next(customError);
		}
	})(req, res);
});


module.exports = router;