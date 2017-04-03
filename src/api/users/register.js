var User = require('../../models/users');
var errors = require('../../error');

//Register user
module.exports =  function (req, res, next) {
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
			
			//Todo: Remove user property in the future
			return res.json({
				user: user,
				token: token
			});
		});
	} else {
		var customError = errors.custom(422, 'Data incomplete')
		return next(customError);
	}
	
};
