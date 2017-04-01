var mongoose = require('mongoose');
var config = require('../../config');

mongoose.connect(config.database,function(err){
	if(err){
		console.log('Could not connect to database');
	}else{
		console.log('Connected to database');
	}
});

module.exports = mongoose;