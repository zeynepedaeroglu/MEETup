
var routeLogin = require('./loginRouter');
var routeHome = require('./homeRouter');
var routeSignup = require('./signupRouter');
var routeChat = require('./chatRouter');
var routeProfile = require('./profileRouter');
var routeDelete = require('../controllers/deleteController');

module.exports = function(x){
    x.use('/login', routeLogin);
    x.use('/', routeHome);
    x.use('/signup', routeSignup);
    x.use('/chat', routeChat);
    x.use('/profile', routeProfile);
    x.get('/delete', routeDelete.deleteAccount)
};