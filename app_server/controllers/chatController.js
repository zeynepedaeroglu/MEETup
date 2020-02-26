module.exports.chatGet= function(req, res){
            if (req.cookies.user) {
                res.render('chat', {kuki: req.cookies.user.toString()});
            }
            else {
                res.redirect('/login');
            }
};