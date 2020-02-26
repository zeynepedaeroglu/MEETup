var express = require('express');
var router = express.Router();

var ctrlSignup = require('../controllers/signupController');

router.get('/', ctrlSignup.signupGet);
router.post('/', ctrlSignup.signupPost);

module.exports= router;