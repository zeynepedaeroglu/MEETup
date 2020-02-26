var express = require('express');
var router = express.Router();

var ctrlHome = require('../controllers/profileController');

router.get('/', ctrlHome.buildGet);
router.post('/', ctrlHome.buildPost);

module.exports = router;