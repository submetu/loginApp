var errors = require('../../error');
var Users = require('../../models/users');

module.exports = function (req, res, next) {
	if (!req.payload._id) {
		var error = errors.custom(401, 'Unauthorized');
		return next(error);
	}
	else {
		Users.findById(req.payload._id, function (err, user) {
			if(err){
				var error = errors.user(err);
				return next(error);
			}
			if(!user){
				var error = errors.custom(404, 'User not found');
				return next(error);
			}
			return res.json({user:user});
			
		});
		
	}
};