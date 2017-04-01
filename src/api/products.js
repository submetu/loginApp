var router = require('express').Router();

 router.get('/',function(req,res){
	res.json({products:[{name:'kashi',price:23}]});
});
module.exports = router;