var generateError = function (status, message) {
	if (status && message) {
		var error = new Error(message);
		error.status = status;
		return error;
	}
	var error = {
		status: 401,
		message: 'Something went wrong'
	}
	return error;
}

module.exports = {
	user: function (err) {
		var errorName = err.name;
		if (errorName.includes('ValidationError')) {
			return generateError(409, 'This user already exists');
		}
		return generateError();
	},
	custom: function (status, message) {
		return generateError(status, message);
	}
}
