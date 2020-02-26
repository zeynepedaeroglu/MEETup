var express = require('express');
var router = express.Router();

var ctrlLogin = require('../controllers/loginController');
var sign = require('../controllers/signupController')


router.get('/', ctrlLogin.loginGet);
router.post('/', ctrlLogin.loginPost);
router.get('/signup', sign.signupGet);
router.post('/signup', sign.signupPost);

module.exports = router;