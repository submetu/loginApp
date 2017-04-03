var router = require('express').Router();
var apiAuth = require('../auth/apiAuth');

//For testing
router.get('/', require('./users'));

router.post('/login', require('./login'));
router.post('/register', require('./register'));
router.post('/profile', apiAuth, require('./profile'));

module.exports = router;

