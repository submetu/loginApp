var router = require('express').Router();

//Home route for testing purposes
router.get('/',function(req,res){
	res.send('Yup, its working :))');
});

module.exports = router;