var passport = require('passport');

var errors = require('../../error');

module.exports =  function (req, res, next) {
	
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
			
			//Todo: Remove user property in the future
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
};

