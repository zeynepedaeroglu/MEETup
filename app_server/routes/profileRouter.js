var express = require('express');
var router = express.Router();

var ctrlProfile = require('../controllers/profileController');

router.get('/', ctrlProfile.profileGet);
router.get('/build', ctrlProfile.buildGet);
router.post('/build', ctrlProfile.buildPost);

module.exports = router;