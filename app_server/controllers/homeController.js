module.exports.index= function(req, res){
    res.clearCookie('user');
    res.render('login', {kuki: req.cookies.user});
};