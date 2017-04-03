var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var crypto = require('crypto');
var uniqueValidator = require('mongoose-unique-validator');
var jwt = require('jsonwebtoken');

var config = require('../../config');

var usersSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true
	},
	name: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
	}
});
//Call the unique validator to avoid duplicate users
usersSchema.plugin(uniqueValidator);

//hash passwords before saving to the database
usersSchema.pre('save', function (next) {
	var user = this;
	bcrypt.hash(user.password, 10, function (err, hash) {
		if (err) {
			return next(err);
		}
		user.password = hash;
		next();
	});
});

//A helper method accessible for checking for a valid password
usersSchema.methods.validPassword = function (password, hash, cb) {
	bcrypt.compare(password, hash, function(err, isMatch) {
		if(err){
			return cb(err);
		}
		cb(null,isMatch);
	});
}

//A helper method accessible for generating a JWT
usersSchema.methods.generateJwt = function() {
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);
	
	return jwt.sign({
		_id: this._id,
		username: this.username,
		email: this.email,
		name: this.name,
		exp: parseInt(expiry.getTime() / 1000),
	}, config.secret);
};


var model = mongoose.model('Users', usersSchema);

module.exports = model;