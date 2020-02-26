var express = require('express');
var router = express.Router();

var ctrlChat = require('../controllers/chatController');

router.get('/', ctrlChat.chatGet);
module.exports = router;
