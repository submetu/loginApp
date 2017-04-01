var passport = require('passport');
var LocalStrategy = require('passport-local');
var Users = require('../../models/users');

passport.use(new LocalStrategy(
	function (username, password, done) {
		Users.findOne({username: username}, function (err, user) {
			user.validPassword(password,user.password,function(error,isMatch){
				if (err || error) {
					return done(err || error);
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
