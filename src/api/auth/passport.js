var passport = require('passport');
var LocalStrategy = require('passport-local');
var Users = require('../../models/users');
var errors = require('../../error');

passport.use(new LocalStrategy(
	function (username, password, done) {
		if(!username || !password){
			var error = errors.custom(422,'Data incomplete');
			return done(error);
		}
		
		Users.findOne({username: username}, function (err, user) {
			if (err) {
				return done(err);
			}
			if(!user){
				return done(null, false, {
					message: 'User not found!'
				});
			}
			if(!user.username || !user.password){
				var error = errors.custom(422,'Data incomplete');
				return done(error);
			}
			
			/**
			 * @param password: password that user provides
			 * @param user.password: password that is already saved in the database as a hash
			 */
			user.validPassword(password,user.password,function(error,isMatch){
				if (error) {
					return done(error);
				}
				// Return if user not found in database
				if (!user) {
					return done(null, false, {
						message: 'User not found!'
					});
				}
				// Return if password is wrong
				if (!isMatch) {
					return done(null, false, {
						message: 'Password is wrong'
					});
				}
				// If credentials are correct, return the user object
				return done(null, user);
			});
			
		});
	}
));
